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
        $nomorBaru = $kodeTerakhir ? (int)substr($kodeTerakhir, 1) + 1 : 1;
        $jenisAgunan->Kode = sprintf('A%07d', $nomorBaru);
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
    public function tambahhakmilik(Request $request)
    {
        $hakMilik = new RefHakMilik;
        $kodeTerakhir = RefHakMilik::max('Kode');
        $nomorBaru = $kodeTerakhir ? (int)substr($kodeTerakhir, 1) + 1 : 1;
        $hakMilik->Kode = sprintf('H%07d', $nomorBaru);
        $hakMilik->Keterangan = $request->input('Keterangan');
        $hakMilik->save();
        
        return response()->json($hakMilik);
    }
    public function gethakmilik()
    {
        $hakmilik = RefHakMilik::all();
        return response()->json($hakmilik);
    }
    public function updateHakMilik(Request $request, string $id)
    {
        $hakMilik = RefHakMilik::where('Kode', $id)->firstOrFail();
        $hakMilik->update($request->all());
        return response()->json($hakMilik);
    }
    public function deleteHakMilik($id)
    {
        $hakMilik = RefHakMilik::where('Kode', $id)->first();
        if (!$hakMilik) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }
        $hakMilik->delete();
        return response()->json(['message' => 'Data berhasil dihapus']);
    }
    public function tambahTipe(Request $request)
    {
        $tipe = new RefTipe;
        $kodeTerakhir = RefTipe::max('Kode');
        $nomorBaru = $kodeTerakhir ? (int)substr($kodeTerakhir, 1) + 1 : 1;
        $tipe->Kode = sprintf('T%07d', $nomorBaru);
        $tipe->Keterangan = $request->input('Keterangan');
        $tipe->save();
        
        return response()->json($tipe);
    }
    public function getTipe()
    {
        $tipe = RefTipe::all();
        return response()->json($tipe);
    }
    public function updateTipe(Request $request, string $id)
    {
        $tipe = RefTipe::where('Kode', $id)->firstOrFail();
        $tipe->update($request->all());
        return response()->json($tipe);
    }
    public function deleteTipe($id)
    {
        $tipe = RefTipe::where('Kode', $id)->first();
        if (!$tipe) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }
        $tipe->delete();
        return response()->json(['message' => 'Data berhasil dihapus']);
    }
    public function tambahJenisPengikatan(Request $request)
    {
        $jenisPengikatan = new RefJenisPengikatan;
        $kodeTerakhir = RefJenisPengikatan::max('Kode');
        $nomorBaru = $kodeTerakhir ? (int)substr($kodeTerakhir, 1) + 1 : 1;
        $jenisPengikatan->Kode = sprintf('P%07d', $nomorBaru);
        $jenisPengikatan->Keterangan = $request->input('Keterangan');
        $jenisPengikatan->save();
        
        return response()->json($jenisPengikatan);
    }
    public function getJenisPengikatan()
    {
        $jenisPengikatan = RefJenisPengikatan::all();
        return response()->json($jenisPengikatan);
    }
    public function updateJenisPengikatan(Request $request, string $id)
    {
        $jenisPengikatan = RefJenisPengikatan::where('Kode', $id)->firstOrFail();
        $jenisPengikatan->update($request->all());
        return response()->json($jenisPengikatan);
    }
    public function deleteJenisPengikatan($id)
    {
        $jenisPengikatan = RefJenisPengikatan::where('Kode', $id)->first();
        if (!$jenisPengikatan) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }
        $jenisPengikatan->delete();
        return response()->json(['message' => 'Data berhasil dihapus']);
    }
    public function tambahHubunganPemilik(Request $request)
    {
        $hubunganPemilik = new RefHubPemilik;
        $kodeTerakhir = RefHubPemilik::max('Kode');
        $nomorBaru = $kodeTerakhir ? (int)substr($kodeTerakhir, 2) + 1 : 1;
        $hubunganPemilik->Kode = sprintf('HP%07d', $nomorBaru);
        $hubunganPemilik->Keterangan = $request->input('Keterangan');
        $hubunganPemilik->save();
        
        return response()->json($hubunganPemilik);
    }

    public function getHubunganPemilik()
    {
        $hubunganPemilik = RefHubPemilik::all();
        return response()->json($hubunganPemilik);
    }

    public function updateHubunganPemilik(Request $request, string $id)
    {
        $hubunganPemilik = RefHubPemilik::where('Kode', $id)->firstOrFail();
        $hubunganPemilik->update($request->all());
        return response()->json($hubunganPemilik);
    }

    public function deleteHubunganPemilik($id)
    {
        $hubunganPemilik = RefHubPemilik::where('Kode', $id)->first();
        if (!$hubunganPemilik) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }
        $hubunganPemilik->delete();
        return response()->json(['message' => 'Data berhasil dihapus']);
    }


    public function getalljaminan()
    {
        $jaminan = Jaminan::with(['RefJenisAgunan', 'RefHakMilik', 'RefTipe', 'RefJenisPengikatan', 'RefHubPemilik'])->get();
        return response()->json($jaminan);
    }
    public function jaminan(Request $request)
    {
        $jaminan = new Jaminan;
        $jaminan->no_pengajuan = $request->input('no_pengajuan');
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
    
    public function getJaminanByNoPengajuan(string $no_pengajuan)
    {
        $jaminan = Jaminan::with(['RefJenisAgunan', 'RefHakMilik', 'RefTipe', 'RefJenisPengikatan', 'RefHubPemilik'])->where('no_pengajuan', $no_pengajuan)->get();
        return response()->json($jaminan);
    }
    
    public function update(Request $request, string $no_pengajuan)
    {
        $jaminan = Jaminan::where('no_pengajuan', $no_pengajuan)->firstOrFail();

        $validatedData = $request->validate([
            'id' => 'required|numeric',
            'no_pengajuan' => 'required|string',
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
    public function destroy(string $no_pengajuan)
    {
        $jaminan = Jaminan::where('no_pengajuan', $no_pengajuan)->firstOrFail();
        $jaminan->delete();

        return response()->json(null, 204);
    }
    
}
