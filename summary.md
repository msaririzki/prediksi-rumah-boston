Tentu, ini adalah **Mega Prompt** yang dirancang khusus untuk AI IDE (seperti Google Antigravity/Cursor/idx) agar ia memahami konteks migrasi dari **Laravel Monolith** ke **FastAPI + React (Vite)** sambil menerapkan semua poin perbaikan UX yang kamu inginkan.

Kamu bisa menyalin prompt di bawah ini ke dalam Chat atau Plan Mode di IDE kamu:

---

### **PROMPT UNTUK MIGRASI & OPTIMASI PROYEK**

**Context:**
Saya memiliki proyek UAS "Boston Housing Price Prediction" yang saat ini menggunakan Laravel (Frontend Blade + Backend Controller). Saya ingin melakukan migrasi total ke arsitektur modern: **FastAPI (Backend)** dan **React dengan Vite (Frontend)**, semuanya dibungkus dalam **Docker**.

**Tugas Utama:**
Hapus file Laravel yang tidak perlu, migrasikan logic ke stack baru, dan langsung terapkan perbaikan UX berdasarkan instruksi spesifik di bawah ini.

**Daftar Instruksi Migrasi & Perbaikan (Wajib Diikuti):**

1. **Backend (FastAPI Migration):**
* Gunakan logic dari `ml-api/app.py` sebagai dasar.
* Hapus `HousingController.php` dan ganti dengan endpoint `/predict` di FastAPI yang memproses data dari `boston_model.pkl`.
* Pastikan output prediksi dikembalikan dalam format float asli (tanpa pembulatan kasar di awal) agar perubahan kecil pada input langsung terlihat di UI.


2. **Frontend (React + Vite Migration):**
* Konversi `form.blade.php` menjadi komponen React. Gunakan **Tailwind CSS** untuk styling agar lebih ringan.
* **Penyederhanaan Layout:** Hapus fitur Premium, sistem Review/User Feedback, dan elemen "corrupt" lainnya yang tidak relevan dengan fungsionalitas utama.
* **WhatsApp Redirect:** Ganti form kontak yang kompleks menjadi tombol sederhana yang redirect langsung ke WhatsApp saya.


3. **Perbaikan UX & UI (Berdasarkan Feedback):**
* **Anti-100vh Mobile:** Jangan paksa setiap section menjadi `100vh`. Gunakan padding yang pas agar di mobile user tidak perlu scroll terlalu jauh antar elemen.
* **Limit Scroll:** Desain ulang agar seluruh aplikasi bisa diakses dengan maksimal 1-2 kali scroll saja. Buat lebih compact.
* **Stepper Form:** Jangan gunakan 3 tab terpisah yang membingungkan. Ubah input fitur (13 fitur Boston) menjadi sistem **Multi-step Form/Stepper**. Tombol "Estimate Value" hanya muncul di tahap terakhir.
* **Fix Dark Mode:** Pastikan variabel warna di Dark Mode konsisten (terutama pada teks dan background input) agar tidak ada teks yang tidak terbaca.


4. **Data & Logic:**
* Hapus semua logic dummy `(rm * 10000)`. UI harus memanggil API FastAPI secara real-time.
* Tampilkan hasil prediksi dengan format mata uang yang rapi tapi tetap menunjukkan presisi angka di belakang koma.


5. **Dockerization:**
* Buat `Dockerfile` untuk Backend (Python) dan Frontend (Node/Nginx).
* Buat `docker-compose.yml` untuk menjalankan kedua layanan tersebut dalam satu perintah.



**Langkah Pertama:**
Analisa semua file di direktori saat ini, identifikasi file Laravel yang bisa dihapus, dan buatkan saya **Step-by-Step Migration Plan** sebelum kita mulai mengeksekusi kodenya.

---

### **Tips Tambahan Saat Menggunakan IDE AI:**

* **Attach Files:** Pastikan kamu sudah "attach" atau membuka file `ml-api/app.py`, `HousingController.php`, dan `form.blade.php` agar AI bisa membaca logic aslinya.
* **Plan Mode:** Jika IDE kamu punya "Plan Mode", biarkan dia membuat daftar file yang akan dihapus (seperti folder `vendor`, `app/Http`, `resources/views/welcome.blade.php`, dll) terlebih dahulu.
* **Iterasi:** Jika hasil Dark Mode-nya masih kurang pas, kamu bisa berikan perintah lanjutan: *"Perbaiki kontras warna teks pada input field saat dark mode aktif."*