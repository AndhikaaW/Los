<?php

namespace App\Http\Controllers;

use App\Models\AspekForm;
use App\Models\OutAspekForm;
use Illuminate\Http\Request;

class AspekFormController extends Controller
{

    public function getTitleAspek()
    {
        $aspek = AspekForm::all();
        return response()->json($aspek);
    }

    // public function getAllAspek()
    // {
    //     // Perform the left join
    //     $results = AspekForm::leftJoin('trx_aspek_form', 'aspek_form.id', '=', 'trx_aspek_form.aspek_id')
    //         ->select('aspek_form.*', 'trx_aspek_form.jawaban')
    //         ->get();
    //     return $results;
    // }
    public function getAllAspek()
    {
        $aspek = OutAspekForm::leftJoin('aspek_form', 'trx_aspek_form.aspek_id', '=', 'aspek_form.id')
            ->select('aspek_form.*', 'trx_aspek_form.*')
            ->get();
        return response()->json($aspek);
    }
    public function addAspek(Request $request)
    {
        $formAspekData = $request->all();
        $nomorRekening = $request->input('NomorRekening');
        foreach ($formAspekData as $key => $value) {
            if ($key === 'risiko' || $key === 'mitigasi' || $key === 'NomorRekening') {
                continue;
            }else {
                $aspek = AspekForm::firstOrCreate([
                    'title_aspek' => $key,
                ]);
                OutAspekForm::create([
                    'aspek_id' => $aspek->id,
                    'jawaban' => $value,
                    'NomorRekening' => $nomorRekening
                ]);
            }
        }
        return response()->json($formAspekData);
    }
}
