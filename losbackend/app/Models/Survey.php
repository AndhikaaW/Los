<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Survey extends Model
{
    use HasFactory;
    protected $table = 'survey';
    public $timestamps = false;
    protected $fillable = [
        'title',
    ];
    public function pilihanSurvey()
    {
        return $this->hasMany(PilihanSurvey::class, 'survey_id', 'id');
    }
}
