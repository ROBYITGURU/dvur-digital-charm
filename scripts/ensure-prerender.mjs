// ensure-prerender.mjs — běží v Netlify build commandu PŘED `bun run build`.
//
// PROČ: web je TanStack Start (SSR). Aby šel hostovat staticky na Netlify, musí mít v
// `vite.config.ts` zapnutý prerender (vygeneruje statické HTML pro každou routu do dist/client).
// Jenže `vite.config.ts` vlastní Lovable a při svých úpravách ho REGENERUJE do své šablony —
// čímž náš prerender zahodí (přesně to 2026-06-23 srazilo malikovskydvur.cz na site-wide 404,
// viz INCIDENTS.md). Spoléhat na ruční edit ve vite.config.ts proto nejde.
//
// CO DĚLÁ: při každém Netlify buildu zkontroluje vite.config.ts a když prerender chybí,
// dočasně ho do něj vloží (jen pro tento build, necommituje). Tím je hosting odolný vůči tomu,
// že Lovable config kdykoli přepíše. Když tvar configu nepozná, SELŽE nahlas (build spadne,
// Netlify nechá naživo poslední funkční deploy) — nikdy tiše neproduktivní prázdný web.

import { readFileSync, writeFileSync } from "node:fs";

const file = new URL("../vite.config.ts", import.meta.url);
let src = readFileSync(file, "utf8");

if (/prerender\s*:/.test(src)) {
  console.log("[ensure-prerender] prerender už ve vite.config.ts je — nic neměním.");
  process.exit(0);
}

const PRERENDER = "prerender: { enabled: true, crawlLinks: true },";
let out;

// Kotvíme na `export default defineConfig(...)` — NE na zmínky v komentáři výše.
const EMPTY = /export\s+default\s+defineConfig\s*\(\s*\{\s*\}\s*\)/;     // defineConfig({})
const OPEN = /(export\s+default\s+defineConfig\s*\(\s*\{)/;             // defineConfig({ ...
const HAS_TANSTACK = /tanstackStart\s*:\s*\{/;                          // tanstackStart: { ...

if (EMPTY.test(src)) {
  // prázdný config → vlož celý tanstackStart blok
  out = src.replace(EMPTY, `export default defineConfig({ tanstackStart: { ${PRERENDER} } })`);
} else if (HAS_TANSTACK.test(src)) {
  // existuje tanstackStart blok → vlož prerender dovnitř
  out = src.replace(/(tanstackStart\s*:\s*\{)/, `$1\n      ${PRERENDER}`);
} else if (OPEN.test(src)) {
  // neprázdný config bez tanstackStart → přidej tanstackStart blok hned za otevírací {
  out = src.replace(OPEN, `$1\n  tanstackStart: { ${PRERENDER} },`);
} else {
  console.error("[ensure-prerender] CHYBA: neznámý tvar vite.config.ts — neumím bezpečně vložit prerender. Build zastaven.");
  process.exit(1);
}

if (out === src || !/prerender\s*:/.test(out)) {
  console.error("[ensure-prerender] CHYBA: injekce prerenderu selhala. Build zastaven.");
  process.exit(1);
}

writeFileSync(file, out);
console.log("[ensure-prerender] prerender doplněn do vite.config.ts pro tento build.");
