<?php

namespace App\Http\Controllers;

use App\Models\AspekForm;
use Illuminate\Http\Request;

class AspekFormController extends Controller
{
    // function aspekform(Request $req)
    // {
    //     $aspek = new AspekForm;
    //     $aspek->aspek_hukum = $req->input('aspek_hukum');
    //     $aspek->aspek_organisasi = $req->input('aspek_organisasi');
    //     $aspek->aspek_pasar = $req->input('aspek_pasar');
    //     $aspek->aspek_jaminan = $req->input('aspek_jaminan');
    //     $aspek->aspek_keuangan = $req->input('aspek_keuangan');
    //     $aspek->aspek_teknis = $req->input('aspek_teknis');
    //     $aspek->aspek_amdal = $req->input('aspek_amdal');
    //     $aspek->risiko = $req->input('risiko');
    //     $aspek->mitigasi = $req->input('mitigasi');
    //     $aspek->save();
    //     return $aspek;
    // }

    public function gettitleaspek()
    {
        $aspek = AspekForm::all();
        return response()->json($aspek);
    }

}
