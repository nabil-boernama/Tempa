# Docs — GitHub Pages

Situs Jekyll (tema `jekyll-theme-slate`) yang dipublikasikan di https://nabil-boernama.github.io/Tempa/.
Konteks proyek ada di `../CLAUDE.md`.

- `index.md` adalah dokumen desain produk: latar belakang, fitur, kompetitor, FR-1..FR-9, ERD, use case,
  wireframe, Gantt 12 minggu. Ini sumber kebenaran untuk requirement.
- `assets/` berisi gambar yang dirujuk dengan path relatif `assets/<nama>.png`.
- Setiap file `.md` di folder ini ikut dipublikasikan Jekyll. File yang bukan untuk publik (seperti
  `CLAUDE.md` ini) harus masuk daftar `exclude` di `_config.yml`.
- CI mewajibkan `index.md` dan `_config.yml` ada, dan menjalankan build Pages pada setiap PR ke `main`.
