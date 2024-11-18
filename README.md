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

### **1. Frontend (Next.js)**  
Ikuti langkah-langkah berikut untuk menjalankan aplikasi frontend:  
1. Langkah Pertama clone project dari github dan buka pada text editor
2. Navigasikan ke folder **`losfrontend`**:
   ```bash
   cd /losfrontend
   ```  
3. Instal semua dependensi yang diperlukan:  
   ```bash
   npm install
   ```  
4. Jalankan aplikasi frontend:  
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
4. Ubah nama file **`.env.example`** menjadi **`.env`**
5. Buat kunci aplikasi:
   ```bash
   php artisan key:generate
   ```  
6. Atur konfigurasi database di file **`.env`**:  
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=los
   DB_USERNAME=root
   DB_PASSWORD=

   DB_CONNECTION_REAL_LOS=mysql
   DB_HOST_REAL_LOS=127.0.0.1
   DB_PORT_REAL_LOS=3306
   DB_DATABASE_REAL_LOS=real_los
   DB_USERNAME_REAL_LOS=root
   DB_PASSWORD_REAL_LOS=
   ```
7. Jalankan server backend:  
   ```bash
   php artisan serve --host=192.168.x.xx --port=8000
   ```  

---

### **3. Integrasi Backend dengan Frontend**  
Pastikan untuk mengonfigurasi URL backend di file konfigurasi frontend:
```typescript
const API_URL = "http://192.168.x.xx:8000/api";
```

## **🚀 Deployment**
### Frontend
```bash
npm run build
```
