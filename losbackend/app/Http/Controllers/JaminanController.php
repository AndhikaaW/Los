<?php

namespace App\Http\Controllers;

use App\Models\Jaminan;
use App\Models\JenisAgunan;
use Illuminate\Http\Request;

class JaminanController extends Controller
{
    public function getjenisagunan()
    {
        $jaminan = JenisAgunan::all();
        return response()->json($jaminan);
    }
    public function getalljaminan()
    {
        $jaminan = Jaminan::all();
        return response()->json($jaminan);
    }
    public function jaminan(Request $request)
    {
        $jaminan = new Jaminan;
        $jaminan->NomorRekening = $request->input('NomorRekening');
        $jaminan->jenisAgunan = $request->input('jenisAgunan');
        $jaminan->merek = $request->input('merek');
        $jaminan->buktiHakMilik = $request->input('buktiHakMilik');
        $jaminan->namaPemilikJaminan = $request->input('namaPemilikJaminan');
        $jaminan->lokasiAgunan = $request->input('lokasiAgunan');
        $jaminan->nilaiTransaksi = $request->input('nilaiTransaksi');
        $jaminan->jenisPengikatan = $request->input('jenisPengikatan');
        $jaminan->tipe = $request->input('tipe');
        $jaminan->tahunPembuatan = $request->input('tahunPembuatan');
        $jaminan->noAgunan = $request->input('noAgunan');
        $jaminan->hubunganDenganPemilik = $request->input('hubunganDenganPemilik');
        $jaminan->informasiTambahan = $request->input('informasiTambahan');
        $jaminan->asuransi = $request->input('asuransi');
        $jaminan->save();
        return response()->json($jaminan);
    }
    public function getJaminanById(string $id)
    {
        $jaminan = Jaminan::findOrFail($id);
        return response()->json($jaminan);
    }
    
    public function update(Request $request, string $id)
    {
        $jaminan = Jaminan::findOrFail($id);

        $validatedData = $request->validate([
            'id' => 'required|numeric',
            'NomorRekening' => 'required|string',
            'jenisAgunan' => 'required|string',
            'merek' => 'required|string',
            'buktiHakMilik' => 'required|string',
            'namaPemilikJaminan' => 'required|string',
            'lokasiAgunan' => 'required|string',
            'nilaiTransaksi' => 'required|string',
            'jenisPengikatan' => 'required|string',
            'tipe' => 'required|string',
            'tahunPembuatan' => 'required|date',
            'noAgunan' => 'required|string',
            'hubunganDenganPemilik' => 'required|string',
            'informasiTambahan' => 'required|string',
            'asuransi' => 'required|string',
        ]);

        $jaminan->update($validatedData);

        return response()->json($jaminan);
    }
    public function destroy(string $id)
    {
        $jaminan = Jaminan::findOrFail($id);
        $jaminan->delete();

        return response()->json(null, 204);
    }
    
}
