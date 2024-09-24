<?php

namespace App\Http\Controllers;

use App\Models\OutSurvey;
use App\Models\PilihanSurvey;
use App\Models\Survey;
use Illuminate\Http\Request;

class SurveyController extends Controller
{
    public function getSurvey()
    {
        $judulSurvey = Survey::with(["PilihanSurvey"])
        ->get();
        return response()->json($judulSurvey);
    }
    public function getAllSurvey()
    {
        $survey = OutSurvey::leftJoin('ref_survey', 'trx_survey.Kode', '=', 'ref_survey.Kode')
            ->select('ref_survey.*', 'trx_survey.*')
            ->get();
        return response()->json($survey);
    }
    public function getAllSurveyByNomorRekening($nomorRekening)
    {
        $survey = OutSurvey::where('NomorRekening', $nomorRekening)
            ->leftJoin('ref_survey', 'trx_survey.Kode', '=', 'ref_survey.Kode')
            ->select('ref_survey.*', 'trx_survey.*')
            ->get();
        return response()->json($survey);
    }
    public function addSurvey(Request $request)
    {
        $surveyData = $request->all();
        $nomorRekening = $request->input('NomorRekening');
        foreach ($surveyData as $key => $value) {
            if ($key === 'NomorRekening') {
                continue;
            }else {
                $aspek = Survey::firstOrCreate([
                    'Keterangan' => $key,
                ]);
                OutSurvey::create([
                    'Kode' => $aspek->Kode,
                    'Pilihan' => $value,
                    'NomorRekening' => $nomorRekening
                ]);
            }
        }
        return response()->json($surveyData);
    }
}
