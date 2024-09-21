<?php

namespace App\Http\Controllers;

use App\Models\Jaminan;
use App\Models\RefHakMilik;
use App\Models\RefJenisAgunan;
use App\Models\RefTipe;
use Illuminate\Http\Request;

class JaminanController extends Controller
{
    public function tambahjenisagunan(Request $request)
    {
        $jenisAgunan = new RefJenisAgunan;
        $kodeTerakhir = RefJenisAgunan::max('Kode');
        $nomorBaru = $kodeTerakhir ? (int)substr($kodeTerakhir, 1) + 1 : 1;
        $jenisAgunan->Kode = sprintf('A%02d', $nomorBaru);
        $jenisAgunan->Keterangan = $request->input('Keterangan');
        $jenisAgunan->save();
        
        return response()->json($jenisAgunan);
    }
    public function getjenisagunan()
    {
        $jenisAgunan = RefJenisAgunan::all();
        return response()->json($jenisAgunan);
    }
    public function deleteJenisAgunan($id)
    {
        $jenisAgunan = RefJenisAgunan::find($id);
        if (!$jenisAgunan) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }
        $jenisAgunan->delete();
        return response()->json(['message' => 'Data berhasil dihapus']);
    }
    public function tambahhakmilik(Request $request)
    {
        $hakMilik = new RefHakMilik;
        $kodeTerakhir = RefHakMilik::max('Kode');
        $nomorBaru = $kodeTerakhir ? (int)substr($kodeTerakhir, 1) + 1 : 1;
        $hakMilik->Kode = sprintf('H%02d', $nomorBaru);
        $hakMilik->Keterangan = $request->input('Keterangan');
        $hakMilik->save();
        
        return response()->json($hakMilik);
    }
    public function gethakmilik()
    {
        $hakmilik = RefHakMilik::all();
        return response()->json($hakmilik);
    }
    public function deleteHakMilik($id)
    {
        $hakMilik = RefHakMilik::find($id);
        if (!$hakMilik) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }
        $hakMilik->delete();
        return response()->json(['message' => 'Data berhasil dihapus']);
    }
    public function tambahtipe(Request $request)
    {
        $tipe = new RefTipe;
        $kodeTerakhir = RefTipe::max('Kode');
        $nomorBaru = $kodeTerakhir ? (int)substr($kodeTerakhir, 1) + 1 : 1;
        $tipe->Kode = sprintf('T%02d', $nomorBaru);
        $tipe->Keterangan = $request->input('Keterangan');
        $tipe->save();
        
        return response()->json($tipe);
    }
    public function gettipe()
    {
        $tipe = RefTipe::all();
        return response()->json($tipe);
    }
    public function deleteTipe($id)
    {
        $tipe = RefTipe::find($id);
        if (!$tipe) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }
        $tipe->delete();
        return response()->json(['message' => 'Data berhasil dihapus']);
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
    public function getJaminanByNomorRekening(string $nomorRekening)
    {
        $jaminan = Jaminan::where('NomorRekening', $nomorRekening)->get();
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
