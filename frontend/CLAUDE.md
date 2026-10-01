@AGENTS.md

# Frontend — Tempa

Next.js 16 App Router + TypeScript + Tailwind v4, dikelola dengan Bun. Konteks proyek ada di
`../CLAUDE.md`.

## Perintah

```bash
bun install
bun dev                       # http://localhost:3000 (pindah ke 3001 kalau 3000 terpakai)
bun run lint
bun run build                 # menghasilkan .next/standalone
```

## Struktur

```
src/
├── app/          route App Router (layout.tsx, page.tsx, ...)
└── components/   komponen bersama; file client diawali "use client"
```

Alias import: `@/*` → `src/*`.

## Konvensi

- Versi Next.js ini lebih baru dari data latih — baca `node_modules/next/dist/docs/` sebelum memakai
  API Next (lihat `AGENTS.md`). `AGENTS.md` dibuat ulang oleh `next dev`; biarkan apa adanya.
- `NEXT_PUBLIC_API_URL` di-inline saat build. Nilainya harus benar sebelum `bun run build`; mengubah env
  setelah build tidak berpengaruh.
- Fetch ke backend yang perlu menguji CORS dilakukan dari client component; selebihnya utamakan
  Server Component.
- `output: "standalone"` dan `reactCompiler: true` aktif di `next.config.ts`. Folder `public/` harus
  tetap ada (ada `.gitkeep`) karena dipakai saat menyalin aset untuk standalone.
- Teks UI dalam Bahasa Indonesia; `<html lang="id">`.
- Halaman sekarang masih placeholder skeleton. Desain final mengikuti hi-fi #8; halaman UI dikerjakan
  di #9, #12, #13 (Yuki). shadcn/ui belum di-init.
