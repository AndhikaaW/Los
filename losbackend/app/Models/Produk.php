<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produk extends Model
{
    use HasFactory;
    protected $table = 'produk';
    public $timestamps = false;
    protected $fillable = [
        'produk',
        'bidang_usaha',
        'nomor_aplikasi',
        'plafon_kredit',
        'tanggal_aplikasi',
        'suku_bunga',
        'tanggal_permohonan',
        'jangka_waktu',
        'sifat_kredit',
        'jenis_permohonan',
        'jenis_angsuran',
        'no_aplikasi_sebelumnya',
        'tujuan_penggunaan',
        'detail_tujuan_penggunaan',
    ];

    protected $casts = [
        'tanggal_aplikasi' => 'date',
        'tanggal_permohonan' => 'date',
    ];
}
