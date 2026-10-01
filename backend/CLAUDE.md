# Backend — Tempa API

FastAPI di Python 3.12, dikelola dengan uv. Konteks proyek ada di `../CLAUDE.md`.

## Perintah

```bash
uv sync                                   # install deps (termasuk dev group)
uv run uvicorn app.main:app --reload      # http://localhost:8000, docs di /docs
uv run pytest                             # test
uv run ruff check . && uv run ruff format --check .
uv add <pkg> / uv add --dev <pkg>         # jangan edit uv.lock manual
```

## Struktur

```
app/
├── main.py         create_app(): CORS + include_router; `app` dipakai uvicorn
├── core/config.py  Settings (pydantic-settings, baca .env); akses via get_settings()
└── api/            satu modul per area, masing-masing punya `router = APIRouter(...)`
tests/              pytest + fastapi.testclient.TestClient
```

## Konvensi

- Route baru: buat `app/api/<area>.py` dengan `router`, lalu `app.include_router(...)` di `create_app()`.
- Konfigurasi baru: tambah field di `Settings` dan barisnya di `.env.example`. Jangan baca
  `os.environ` langsung.
- `CORS_ORIGINS` adalah string dipisah koma (bukan JSON list); dipecah oleh `cors_origin_list`.
- TestClient memakai `httpx2` (Starlette menandai `httpx` deprecated untuk TestClient).
- Setiap endpoint baru disertai test di `tests/`.
- Belum ada DB/ORM/auth — itu cakupan #14 dan seterusnya. Ikuti model data di
  `docs/assets/erd.png` (User, Profile, CV, Job, Skill, Match, Session, Question, Answer, Report).
