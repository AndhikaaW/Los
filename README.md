# 🌿 **Project Loan Origination System (LOS)**

**LOS** adalah aplikasi website modern untuk sistem manajemen pinjaman yang dirancang dengan teknologi terkini untuk pengembangan frontend dan backend.

---

## **📌 Teknologi yang Digunakan**

| **Bahasa**        | **Framework/Tools**       | **Versi**        |
|--------------------|---------------------------|------------------|
| **TypeScript**     | React                    | **18.2.0**       |
| **TypeScript**     | Next.js                  | **13.4.8**       |
| **PHP**            | Laravel                  | **10.48.22**     |
| -                  | MySQL                    | **8.0.30**       |
| -                  | NPM                      | **10.8.1**       |
| -                  | Composer                 | **2.4.1**        |

---

## **📖 Panduan Instalasi**

### **1. Frontend (React + Next.js)**  
Ikuti langkah-langkah berikut untuk menjalankan aplikasi frontend:  
1. Navigasikan ke folder **`losfrontend`**:  
   ```bash
   cd losfrontend
   ```  
2. Instal semua dependensi yang diperlukan:  
   ```bash
   npm install
   ```  
3. Jalankan aplikasi frontend:  
   ```bash
   npm run dev
   ```  

### **2. Backend (Laravel)**  
Langkah-langkah untuk mengatur backend menggunakan Laravel:  
1. Navigasikan ke folder backend:  
   ```bash
   cd losbackend
   ```  
2. Instal semua dependensi dengan Composer:  
   ```bash
   composer install
   ```  
3. Buat salinan file environment:  
   ```bash
   cp .env.example .env
   ```  
4. Buat kunci aplikasi:  
   ```bash
   php artisan key:generate
   ```  
5. Atur konfigurasi database di file **`.env`**:  
   ```env
   DB_DATABASE=los_database
   DB_USERNAME=root
   DB_PASSWORD=
   ```  
6. Jalankan migrasi database:  
   ```bash
   php artisan migrate
   ```  
7. Jalankan server backend:  
   ```bash
   php artisan serve
   ```  

---

### **3. Integrasi Backend dengan Frontend**  
Pastikan untuk mengonfigurasi URL backend di file konfigurasi frontend:
```typescript
const API_URL = "http://localhost:8000/api";
```

---

## **🔒 Konfigurasi Keamanan**
- Pastikan untuk mengatur environment variables dengan aman
- Gunakan Laravel Sanctum untuk autentikasi
- Implement CORS di backend Laravel

---

## **🚀 Deployment**
### Frontend
```bash
npm run build
```

### Backend
```bash
composer install --optimize-autoloader --no-dev
php artisan config:cache
php artisan route:cache
```

---

## **🤝 Kontribusi**
1. Fork repository
2. Buat branch fitur (`git checkout -b fitur/Amazing`)
3. Commit perubahan (`git commit -m 'Menambahkan fitur baru'`)
4. Push ke branch (`git push origin fitur/Amazing`)
5. Buka Pull Request

---

## **📝 Catatan Penting**
- Selalu perbarui `.env` dengan kredensial yang aman
- Lakukan testing secara menyeluruh sebelum merge
- Ikuti panduan coding yang konsisten

Selamat mengembangkan! 💻🚀
