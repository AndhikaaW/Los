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

    public function RefJenisAgunan()
    {
        return $this->belongsTo(RefJenisAgunan::class, 'jenisAgunan', 'Kode');
    }
    public function RefHakMilik()
    {
        return $this->belongsTo(RefHakMilik::class, 'buktiHakMilik', 'Kode');
    }
    public function RefTipe()
    {
        return $this->belongsTo(RefTipe::class, 'tipe', 'Kode');
    }   
    public function RefHubPemilik()
    {
        return $this->belongsTo(RefHubPemilik::class, 'hubunganDenganPemilik', 'Kode');
    }
    public function RefJenisPengikatan()
    {
        return $this->belongsTo(RefJenisPengikatan::class, 'jenisPengikatan', 'Kode');
    }
}
