<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AspekForm extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'aspek_form';
    protected $fillable = [
        // 'aspek_hukum',
        // 'aspek_organisasi',
        // 'aspek_pasar',
        // 'aspek_jaminan',
        // 'aspek_keuangan',
        // 'aspek_teknis',
        // 'aspek_amdal',
        // 'risiko',
        // 'mitigasi'
        'id',
        'title_aspek'
    ];
}
