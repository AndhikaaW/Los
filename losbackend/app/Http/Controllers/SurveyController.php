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
        $survey = OutSurvey::leftJoin('survey', 'trx_survey.SurveyId', '=', 'survey.id')
            ->select('survey.*', 'trx_survey.*')
            ->get();
        return response()->json($survey);
    }
    public function getAllSurveyByNomorRekening($nomorRekening)
    {
        $survey = OutSurvey::where('NomorRekening', $nomorRekening)
            ->leftJoin('survey', 'trx_survey.SurveyId', '=', 'survey.id')
            ->select('survey.*', 'trx_survey.*')
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
                    'title' => $key,
                ]);
                OutSurvey::create([
                    'SurveyId' => $aspek->id,
                    'Pilihan' => $value,
                    'NomorRekening' => $nomorRekening
                ]);
            }
        }
        return response()->json($surveyData);
    }
}
