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
        $kodeTerakhir = AspekForm::max('Kode');
        $nomorBaru = $kodeTerakhir ? (int)substr($kodeTerakhir, 1) + 1 : 1;
        $aspekForm->Kode = sprintf('A%02d', $nomorBaru);
        $aspekForm->Keterangan = $req->input('Keterangan');
        $aspekForm->save();
        return response()->json($aspekForm, 201);
    }
    public function getTitleAspek()
    {
        $aspek = AspekForm::all();
        return response()->json($aspek);
    }
    public function updateTitleAspek($Kode, Request $req)
    {
        $aspekForm = AspekForm::where('Kode', $Kode)->firstOrFail();
        if (!$aspekForm) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }
        $Keterangan = $req->input('Keterangan');
        if (empty($Keterangan)) {
            return response()->json(['message' => 'Judul aspek harus diisi'], 400);
        }
        $aspekForm->Keterangan = $Keterangan;
        $aspekForm->save();
        return response()->json($aspekForm);
    }
    public function deleteTitleAspek($Kode)
    {
        $aspekForm = AspekForm::where('Kode', $Kode)->firstOrFail();
        if (!$aspekForm) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }
        OutAspekForm::where('Kode', $Kode)->delete();
        $aspekForm->delete();
        return response()->json(['message' => 'Data berhasil dihapus']);
    }

    public function getAllAspek()
    {
        $aspek = OutAspekForm::leftJoin('aspek_form', 'trx_aspek_form.Kode', '=', 'aspek_form.Kode')
            ->select('aspek_form.*', 'trx_aspek_form.*')
            ->get();
        return response()->json($aspek);
    }

    public function getAspekByNomorRekening($nomorRekening)
    {
        $aspek = OutAspekForm::leftJoin('aspek_form', 'trx_aspek_form.Kode', '=', 'aspek_form.Kode')
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
                    'Keterangan' => $key,
                ]);
                OutAspekForm::create([
                    'Kode' => $aspek->Kode,
                    'jawaban' => $value,
                    'NomorRekening' => $nomorRekening
                ]);
            }
        }
        return response()->json($formAspekData);
    }
    public function destroy($NomorRekening)
    {
        $aspek = OutAspekForm::where('NomorRekening', $NomorRekening)->delete();
        return response()->json($aspek);
    }
}
