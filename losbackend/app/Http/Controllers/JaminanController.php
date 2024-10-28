<?php

namespace App\Http\Controllers;

use App\Models\Jaminan;
use App\Models\RefHakMilik;
use App\Models\RefHubPemilik;
use App\Models\RefJenisAgunan;
use App\Models\RefJenisPengikatan;
use App\Models\RefTipe;
use Illuminate\Http\Request;

class JaminanController extends Controller
{
    public function tambahjenisagunan(Request $request)
    {
        $jenisAgunan = new RefJenisAgunan;
        $kodeTerakhir = RefJenisAgunan::max('Kode');
        $nomorBaru = $kodeTerakhir ? (int)substr($kodeTerakhir, 2) + 1 : 1;
        $jenisAgunan->Kode = sprintf('AG%07d', $nomorBaru);
        $jenisAgunan->Keterangan = $request->input('Keterangan');
        $jenisAgunan->save();
        
        return response()->json($jenisAgunan);
    }
    public function getjenisagunan()
    {
        $jenisAgunan = RefJenisAgunan::all();
        return response()->json($jenisAgunan);
    }
    public function updateJenisAgunan(Request $request, string $id)
    {
        $jenisAgunan = RefJenisAgunan::where('Kode', $id)->firstOrFail();
        $jenisAgunan->update($request->all());
        return response()->json($jenisAgunan);
    }
    public function deleteJenisAgunan($id)
    {
        $jenisAgunan = RefJenisAgunan::where('Kode', $id)->first();
        if (!$jenisAgunan) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }
        $jenisAgunan->delete();
        return response()->json(['message' => 'Data berhasil dihapus']);
    }

    // public function getalljaminan()
    // {
    //     $jaminan = Jaminan::with(['RefJenisAgunan'])->get();
    //     return response()->json($jaminan);
    // }
    public function jaminan(Request $request)
    {
        $data = $request->json()->all();
        
        $jaminanData = [];
        foreach ($data as $item) {
            $mainForm = $item['mainForm'];
            $specificForm = $item['specificForm'];
            
            $jaminan = new Jaminan;
            $jaminan->no_pengajuan = $mainForm['no_pengajuan'];
            $jaminan->jenisAgunan = $mainForm['jenisAgunan'];
            $jaminan->namaPemilikJaminan = $mainForm['namaPemilikJaminan'];
            $jaminan->tanggalPembuatan = $mainForm['tanggalPembuatan'];
            $jaminan->nilaiTransaksi = $mainForm['nilaiYangDiagunkan'];
            $jaminan->nilaiPasar = $mainForm['nilaiPasar'];
            
            $jaminan->jenis = $specificForm['jenis'];
            $jaminan->noRekening = $specificForm['noRekening'];
            $jaminan->noBilyet = $specificForm['noBilyet'];
            $jaminan->nominal = $specificForm['nominal'];
            $jaminan->atasNama = $specificForm['atasNama'];
            $jaminan->alamat = $specificForm['alamat'];
            $jaminan->keterangan = $specificForm['keterangan'];
            
            $jaminan->save();
            $jaminanData[] = $jaminan;
        }
        
        return response()->json($jaminanData);
    }
    
    public function getJaminanByNoPengajuan(string $no_pengajuan)
    {
        $jaminan = Jaminan::with(['RefJenisAgunan'])->where('no_pengajuan', $no_pengajuan)->get();
        return response()->json($jaminan);
    }
    
    public function update(Request $request)
    {
        $data = $request->json()->all();
        
        if (empty($data)) {
            return response()->json(['error' => 'Data tidak boleh kosong'], 400);
        }

        $jaminanData = [];
        
        foreach ($data as $item) {
            $jaminan = Jaminan::find($item['id']);
            
            if ($jaminan) {
                $jaminan->no_pengajuan = $item['no_pengajuan'];
                $jaminan->jenisAgunan = $item['jenisAgunan'];
                $jaminan->namaPemilikJaminan = $item['namaPemilikJaminan'];
                $jaminan->tanggalPembuatan = $item['tanggalPembuatan'];
                $jaminan->nilaiTransaksi = $item['nilaiTransaksi'];
                $jaminan->nilaiPasar = $item['nilaiPasar'];
                
                $jaminan->jenis = $item['jenis'];
                $jaminan->noRekening = $item['noRekening'];
                $jaminan->noBilyet = $item['noBilyet'];
                $jaminan->nominal = $item['nominal'];
                $jaminan->atasNama = $item['atasNama'];
                $jaminan->alamat = $item['alamat'];
                $jaminan->keterangan = $item['keterangan'];
                
                $jaminan->save();
                
              
                $jaminan->load('RefJenisAgunan');
                $jaminanData[] = $jaminan;
            }
        }
        
        return response()->json($jaminanData);
    }
}
