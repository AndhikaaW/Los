<?php

namespace App\Http\Controllers;

use App\Models\GolonganKredit;
use Illuminate\Http\Request;

class PengajuanKreditController extends Controller
{
    public function getGolonganKredit()
    {
        $data = GolonganKredit::all();
        return response()->json($data);
    }
}
