# Tempa

Aplikasi web persiapan karier untuk mahasiswa/fresh graduate Indonesia: upload CV → parsing LLM →
matching lowongan + skill gap → gladi wawancara suara (TTS/STT) → report card. Senior Project
DTETI UGM, kelompok "Claude Final Boss". Spesifikasi lengkap (FR-1..FR-9, ERD, use case, wireframe,
Gantt) ada di `docs/index.md` dan `docs/assets/`.

## Struktur

| Folder | Isi | Panduan |
| :--- | :--- | :--- |
| `frontend/` | Next.js 16 App Router, TypeScript, Tailwind v4, Bun | `frontend/CLAUDE.md` |
| `backend/` | FastAPI, Python 3.12, uv | `backend/CLAUDE.md` |
| `docs/` | Dokumen desain, GitHub Pages (Jekyll, tema slate) | `docs/CLAUDE.md` |
| `.github/workflows/main.yml` | CI: validasi docs, build Pages, frontend, backend | — |

## Tim dan pembagian kerja

| Orang | GitHub | Peran |
| :--- | :--- | :--- |
| Axel Urwawuska Atarubby (ketua) | `Lexirieru` | Software + Cloud Engineer: skeleton, deploy Azure, auth, upload CV |
| Muhammad Nabil Fitriansyah Boernama | `nabil-boernama` | PM + AI Engineer: prompt, matching, Azure Speech |
| Yuki Shafa Maheswari | `yuukiiiss` | UI/UX: hi-fi Figma, semua halaman UI |

Tugas dilacak di GitHub Issues + board "Tempa -Scrumban" (Backlog → Ready → In Progress → Review → Done).
Penugasan ditulis sebagai mention `@user` di body issue, bukan lewat field Assignee.

## Konvensi

- **Branch:** `<NIM>-<topik>` dari `main` terbaru, mis. `545465-skeleton`. Merge lewat PR ke `main`.
- **Commit:** Conventional Commits (`feat`, `fix`, `chore`, `ci`, `docs`), scope `frontend`/`backend`
  bila relevan, akhiri body dengan `Refs #<issue>`. PR memakai `Closes #<issue>`.
- **CI mewajibkan ketiga NIM ada di `README.md`.** Jangan hapus baris anggota kelompok.
- **Bahasa:** teks UI dan dokumen dalam Bahasa Indonesia; identifier kode dalam Bahasa Inggris.
- **Secret:** hanya `.env.example` yang di-commit; `.env`/`.env.local` di-ignore.

## Cek sebelum push (sama dengan CI)

```bash
cd frontend && bun run lint && bun run build
cd backend && uv run ruff check . && uv run ruff format --check . && uv run pytest
```

## Keputusan yang belum diambil

- **Database:** belum dipilih. ERD punya `Job.embedding`, jadi kandidat kuat Postgres + pgvector
  (didukung Azure Database for PostgreSQL). Putuskan sebelum #14 (auth) karena menentukan ORM/migrasi.
- **Hosting Azure (#10):** App Service vs Container Apps. Frontend sudah `output: "standalone"`.
- **shadcn/ui:** belum di-init; menunggu keputusan UI di #9.
