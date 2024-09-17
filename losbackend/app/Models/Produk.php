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
        'Cif',
        'pengajuan',
        'bidang_usaha',
        'NomorRekening',
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
    public function financial()
    {
        return $this->hasOne(Finansial::class, 'NomorRekening', 'NomorRekening');
    }

    public function survey()
    {
        return $this->hasMany(OutSurvey::class, 'NomorRekening', 'NomorRekening');
    }
    public function LimaC()
    {
        return $this->hasOne(LimaC::class, 'NomorRekening', 'NomorRekening');
    }

    public function aspekForm()
    {
        return $this->hasMany(OutAspekForm::class, 'NomorRekening', 'NomorRekening');
    }

    public function jaminan()
    {
        return $this->hasOne(Jaminan::class, 'NomorRekening', 'NomorRekening');
    }

}
