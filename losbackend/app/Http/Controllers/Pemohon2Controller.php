<?php

namespace App\Http\Controllers;

use App\Models\Pemohon2;
use Illuminate\Http\Request;

class Pemohon2Controller extends Controller
{
    public function index()
    {
        $pemohon = Pemohon2::all();
        return response()->json($pemohon);
    }
}
