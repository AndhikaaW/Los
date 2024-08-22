<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LimaC extends Model
{
    use HasFactory;
    protected $table = 'limacs';
    public $timestamps = false;
    protected $fillable = [
        'char',
        'capacity',
        'capital',
        'collateral',
        'cond',
    ];
}
