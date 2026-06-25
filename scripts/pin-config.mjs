// pin-config.mjs — běží v Netlify build commandu PŘED `bun install`.
//
// PROČ: build webu závisí na `@lovable.dev/vite-tanstack-config`. Lovable si tenhle plugin
// kdykoli sám od sebe povýší (2026-06-25 bump 2.5.3 → 2.6.2 přesunul výstup z `dist/` do
// `.output/` → prerender spadl → build neudělal `dist/client/index.html` → Netlify zamrzl na
// starém deploji a klientova úprava se neukázala; viz ../../INCIDENTS.md). Verze 2.5.3 je
// ověřeně funkční (vyrábí staticky prerenderované `dist/client`).
//
// CO DĚLÁ: při každém Netlify buildu přepíše v package.json verzi pluginu zpět na PINNED,
// ať Lovable do package.json commitne cokoli. Pak build command pustí `bun install`, čímž se
// pin reálně aplikuje. Tím je build odolný vůči tomu, že Lovable plugin zase povýší.
//
// ⚠️ AŽ BUDEŠ CHTÍT VĚDOMĚ POVÝŠIT: změň PINNED tady + ověř `rm -rf dist && <build z netlify.toml>`
// → musí vyrobit `dist/client/index.html`. Nikdy nezvyšuj jen proto, že "je dostupná novější".

import { readFileSync, writeFileSync } from "node:fs";

const PKG = "@lovable.dev/vite-tanstack-config";
const PINNED = "2.5.3";

const file = new URL("../package.json", import.meta.url);
const pkg = JSON.parse(readFileSync(file, "utf8"));

const buckets = ["devDependencies", "dependencies"];
let current = null;
let bucket = null;
for (const b of buckets) {
  if (pkg[b] && Object.prototype.hasOwnProperty.call(pkg[b], PKG)) {
    current = pkg[b][PKG];
    bucket = b;
    break;
  }
}

if (current === null) {
  // Plugin v package.json vůbec není — nečekané, ale doplníme ho (build by jinak stejně spadl).
  pkg.devDependencies = pkg.devDependencies || {};
  pkg.devDependencies[PKG] = PINNED;
  writeFileSync(file, JSON.stringify(pkg, null, 2) + "\n");
  console.log(`[pin-config] ${PKG} v package.json chyběl — doplněn na ${PINNED}.`);
  process.exit(0);
}

if (current === PINNED) {
  console.log(`[pin-config] ${PKG} už je ${PINNED} — nic neměním.`);
  process.exit(0);
}

pkg[bucket][PKG] = PINNED;
writeFileSync(file, JSON.stringify(pkg, null, 2) + "\n");
console.log(`[pin-config] ${PKG}: ${current} → ${PINNED} (přepnuto zpět na ověřenou verzi).`);
