<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pemohon extends Model
{
    use HasFactory;
    protected $table = 'pemohon';
    public $timestamps = false;
    protected $fillable = [
        'produk',
        'bidang_usaha',
        'nomor_aplikasi',
        'tanggal_aplikasi',
        'tanggal_permohonan',
        'plafon_kredit',
        'suku_bunga',
        'jangka_waktu',
        'sifat_kredit',
        'jenis_permohonan',
        'jenis_angsuran',
        'no_aplikasi_sebelumnya',
        'tujuan_penggunaan',
        'detail_tujuan_penggunaan',
        'cif',
        'tempat_lahir',
        'jenis_kelamin',
        'status_perkawinan',
        'no_ktp',
        'profesi_sampingan',
        'nama_lengkap',
        'tanggal_lahir',
        'nama_ibu_kandung',
        'jumlah_tanggungan',
        'ktp_berlaku',
        'no_hp',
        'alamat',
        'kode_pos',
        'provinsi',
        'kecamatan',
        'telepon',
        'status_tempat_tinggal',
        'kota',
        'kelurahan',
        'fax',
        'lama_tinggal',
        'nama_usaha',
        'tanggal_mulai_usaha',
        'status_tempat_usaha',
        'surat_keterangan_usaha',
        'sektor_ekonomi',
        'jumlah_karyawan',
        'jarak_lokasi_usaha',
        'masa_laku',
        'alamat_usaha',
        'kode_pos_usaha',
        'provinsi_usaha',
        'kecamatan_usaha',
        'kota_usaha',
        'kelurahan_usaha'
    ];
}
