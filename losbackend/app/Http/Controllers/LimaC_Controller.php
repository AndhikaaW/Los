<?php

namespace App\Http\Controllers;

use App\Models\LimaC;
use Illuminate\Http\Request;

class LimaC_Controller extends Controller
{
    function limac(Request $req)
    {
        $limac = new LimaC;
        $limac->characters = $req->input('characters');
        $limac->capacity = $req->input('capacity');
        $limac->capital = $req->input('capital');
        $limac->collateral = $req->input('collateral');
        $limac->conditions = $req->input('conditions');
        $limac->save();
        return $limac;
    }
}
