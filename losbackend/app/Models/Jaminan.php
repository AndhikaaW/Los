<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jaminan extends Model
{
    use HasFactory;
    protected $table = 'trx_jaminan';
    protected $fillable = [
        'NomorRekening',
        'jenisAgunan',
        'merek',
        'buktiHakMilik',
        'namaPemilikJaminan',
        'lokasiAgunan',
        'nilaiTransaksi',
        'jenisPengikatan',
        'tipe',
        'tahunPembuatan',
        'noAgunan',
        'hubunganDenganPemilik',
        'informasiTambahan',
        'asuransi',
    ];
    public $timestamps = false;
}
