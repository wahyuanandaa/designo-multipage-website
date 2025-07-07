# Designo Multipage Website (Vite + React)

[🌐 Demo Website](https://your-demo-link-here.com)

## Fitur

- Multi-page website dengan React Router
- Responsive design (desktop, tablet, mobile)
- Struktur folder modular dan mudah dikembangkan
- Semua aset dan halaman sudah dimigrasi dari versi CRA

## Cara Menjalankan

1. Install dependencies:
   ```bash
   pnpm install
   # atau
   npm install
   ```
2. Jalankan development server:
   ```bash
   pnpm run dev
   # atau
   npm run dev
   ```
3. Buka browser ke [http://localhost:5173](http://localhost:5173)

## Build Production

```bash
pnpm run build
# atau
npm run build
```

Output akan ada di folder `dist/`.

## Catatan Migrasi

- Semua file komponen React diubah ke ekstensi `.jsx`.
- Semua import sudah disesuaikan untuk Vite.
- File `index.html` adalah entry point utama (bukan `index-cra.html`).
- Tidak ada lagi dependensi pada Create React App.

---

Project ini sudah siap dikembangkan lebih lanjut dengan ekosistem Vite.
