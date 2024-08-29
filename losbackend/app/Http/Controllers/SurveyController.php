<?php

namespace App\Http\Controllers;

use App\Models\PilihanSurvey;
use App\Models\Survey;
use Illuminate\Http\Request;

class SurveyController extends Controller
{
    // public function getsurvey()
    // {
    //     $judulSurvey = Survey::all();
    //     return response()->json($judulSurvey);
    // }
    public function getsurvey()
    {
        $judulSurvey = Survey::with(["PilihanSurvey"])
        ->get();
        return response()->json($judulSurvey);
    }
    // public function getPilihanSurveyByJudul($id)
    // {
    //     $category = Survey::find($id);

    //     if (!$category) {
    //         return response()->json(['message' => 'Judul tidak ditemukan'], 404);
    //     }

    //     $pilihanSurvey = PilihanSurvey::where('survey_id', $id)->get();

    //     return response()->json(['pilihanSurvey' => $pilihanSurvey]);
    // }
}
