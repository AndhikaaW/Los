<?php

namespace App\Http\Controllers;

use App\Models\AspekForm;
use App\Models\OutAspekForm;
use Illuminate\Http\Request;

class AspekFormController extends Controller
{
    function tambahTitleAspek(Request $req)
    {
        $aspekForm = new AspekForm;
        $aspekForm->title_aspek = $req->input('title_aspek');
        $aspekForm->save();
        return response()->json($aspekForm, 201);
    }
    public function getTitleAspek()
    {
        $aspek = AspekForm::all();
        return response()->json($aspek);
    }
    public function updateTitleAspek($id, Request $req)
    {
        $aspekForm = AspekForm::find($id);
        if (!$aspekForm) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }
        $titleAspek = $req->input('title_aspek');
        if (empty($titleAspek)) {
            return response()->json(['message' => 'Judul aspek harus diisi'], 400);
        }
        $aspekForm->title_aspek = $titleAspek;
        $aspekForm->save();
        return response()->json($aspekForm);
    }
    public function deleteTitleAspek($id)
    {
        $aspekForm = AspekForm::find($id);
        if (!$aspekForm) {
            return response()->json(['message' => 'Data not found'], 404);
        }
        $aspekForm->delete();
        return response()->json(['message' => 'Data deleted successfully']);
    }

    public function getAllAspek()
    {
        $aspek = OutAspekForm::leftJoin('aspek_form', 'trx_aspek_form.aspek_id', '=', 'aspek_form.id')
            ->select('aspek_form.*', 'trx_aspek_form.*')
            ->get();
        return response()->json($aspek);
    }

    public function getAspekByNomorRekening($nomorRekening)
    {
        $aspek = OutAspekForm::leftJoin('aspek_form', 'trx_aspek_form.aspek_id', '=', 'aspek_form.id')
            ->select('aspek_form.*', 'trx_aspek_form.*')
            ->where('trx_aspek_form.NomorRekening', $nomorRekening)
            ->get();
        return response()->json($aspek);
    }
    public function aspek(Request $request)
    {
        $formAspekData = $request->all();
        $nomorRekening = $request->input('NomorRekening');
        foreach ($formAspekData as $key => $value) {
            if ($key === 'risiko' || $key === 'mitigasi' || $key === 'NomorRekening') {
                continue;
            } else {
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
