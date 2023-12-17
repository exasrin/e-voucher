# e-voucher

e-voucher App adalah aplikasi manajemen voucher dengan backend Node.js dan MongoDB.

## Table of Contents

- [Instalasi](#instalasi)
- [Konfigurasi](#konfigurasi)
- [Menjalankan Aplikasi](#menjalankan-aplikasi)
- [Penggunaan](#penggunaan)
  - [Manajemen Voucher](#manajemen-voucher)
  - [Manajemen Transaksi](#manajemen-transaksi)
- [API Endpoint](#api-endpoint)

## Instalasi

1. Pastikan Anda memiliki [Node.js](https://nodejs.org/) dan [MongoDB](https://www.mongodb.com/) terinstal di komputer Anda.
2. Clone repositori ini: `git clone https://github.com/exasrin/e-voucher.git`
3. Pindah ke direktori proyek: `cd e-voucher`
4. Instal dependensi: `npm install`

## Konfigurasi

1. Buat file `.env` di dalam direktori proyek dan tambahkan konfigurasi berikut:

   ```plaintext
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/voucher
