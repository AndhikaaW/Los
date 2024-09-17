<?php

namespace App\Http\Controllers;

use App\Models\LimaC;
use Illuminate\Http\Request;

class LimaC_Controller extends Controller
{
    function limac(Request $req)
    {
        $limac = new LimaC;
        $limac->NomorRekening = $req->input('NomorRekening');
        $limac->characters = $req->input('characters');
        $limac->capacity = $req->input('capacity');
        $limac->capital = $req->input('capital');
        $limac->collateral = $req->input('collateral');
        $limac->conditions = $req->input('conditions');
        $limac->save();
        return $limac;
    }
    public function getAllLimaC()
    {
        $limac = LimaC::all();
        return response()->json($limac);
    }
    public function getLimaCById(string $id)
    {
        $limaC = LimaC::findOrFail($id);
        return response()->json($limaC);
    }
    
    public function update(Request $request, string $id)
    {
        $limaC = LimaC::findOrFail($id);

        $validatedData = $request->validate([
            'NomorRekening' => 'required|string',
            'characters' => 'required|string',
            'capacity' => 'required|string',
            'capital' => 'required|string',
            'collateral' => 'required|string',
            'conditions' => 'required|string',
        ]);

        $limaC->update($validatedData);

        return response()->json($limaC);
    }

    public function destroy(string $id)
    {
        $limaC = LimaC::findOrFail($id);
        $limaC->delete();

        return response()->json(null, 204);
    }
}
