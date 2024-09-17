<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OutAspekForm extends Model
{
    use HasFactory;
    protected $table = 'trx_aspek_form';
    public $timestamps = false;
    protected $fillable = [
        'id',
        'aspek_id',
        'jawaban',
        'NomorRekening',
    ];
}
