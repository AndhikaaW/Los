<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JenisAgunan extends Model
{
    use HasFactory;
    protected $table = 'ref_jenis_agunan';
    public $timestamps = false;
    protected $fillable = [
        'Id',
        'Kode',
        'Keterangan'
    ];
}
