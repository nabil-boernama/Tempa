# Tempa
Aplikasi web persiapan karier yang menggabungkan analisis skill gap dan simulasi wawancara berbasis suara dengan AI dalam satu alur.

Kelompok Claude Final Boss<br>
Ketua Kelompok: Axel Urwawuska Atarubby – 24/545465/TK/60670 <br>
Anggota 1: Muhammad Nabil Fitriansyah Boernama - 24/545232/TK/60628<br>
Anggota 2: Yuki Shafa Maheswari - 24/545600/TK/60708<br>

---
## Struktur Repo

| Folder | Isi |
| :--- | :--- |
| `frontend/` | Next.js 16 (App Router, TypeScript, Tailwind v4), dikelola dengan Bun |
| `backend/` | FastAPI (Python 3.12), dikelola dengan uv |
| `docs/` | Dokumen desain produk, dipublikasikan via GitHub Pages |

## Menjalankan Lokal

Prasyarat: [Bun](https://bun.sh) dan [uv](https://docs.astral.sh/uv/).

**Backend** (http://localhost:8000)

```bash
cd backend
cp .env.example .env
uv sync
uv run uvicorn app.main:app --reload
```

**Frontend** (http://localhost:3000)

```bash
cd frontend
cp .env.example .env.local
bun install
bun dev
```

Halaman utama menampilkan status koneksi ke `GET /health` backend. Kalau frontend jalan di port selain 3000, tambahkan origin-nya ke `CORS_ORIGINS` di `backend/.env`.

**Cek sebelum push** (sama dengan CI)

```bash
cd frontend && bun run lint && bun run build
cd backend && uv run ruff check . && uv run ruff format --check . && uv run pytest
```
