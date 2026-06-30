// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Prerender každou routu do statického HTML (dist/client) → web jde hostovat staticky na Netlify.
// ⚠️ vite.config.ts vlastní Lovable a tenhle blok může při své úpravě kdykoli přepsat pryč
// (přesně to 2026-06-23 srazilo web na 404 — viz ../INCIDENTS.md). Pro ten případ ho Netlify
// build znovu doplní přes scripts/ensure-prerender.mjs (zapojeno v netlify.toml), takže hosting
// je odolný i bez tohoto bloku. Necháváme ho tu i tak — ať lokální `bun run build` funguje sám.
export default defineConfig({
  tanstackStart: {
    prerender: { enabled: true, crawlLinks: true },
  },
  vite: {
    nitro: {
      preset: "node-server",
    },
  },
});
