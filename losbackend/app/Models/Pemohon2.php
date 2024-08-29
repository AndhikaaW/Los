<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pemohon2 extends Model
{
    use HasFactory;
    // use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table = "pemohon2";
    protected $fillable = ['id', 'cif', 'nama_lengkap', 'tempat_lahir'];
    public $timestamps = false;
}
