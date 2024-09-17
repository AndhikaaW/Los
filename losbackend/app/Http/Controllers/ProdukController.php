<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use App\Models\SifatKredit;
use Illuminate\Http\Request;

class ProdukController extends Controller
{
    public function index()
    {
        $produk = Produk::all();
        return response()->json($produk);
    }
    function produk(Request $req)
    {
        $produk = new Produk;
        $produk->Cif = $req->input('Cif');
        $produk->pengajuan = $req->input('pengajuan');
        $produk->bidang_usaha = $req->input('bidang_usaha');
        $produk->NomorRekening = $req->input('NomorRekening');
        $produk->tanggal_aplikasi = $req->input('tanggal_aplikasi');
        $produk->tanggal_permohonan = $req->input('tanggal_permohonan');
        $produk->plafon_kredit = $req->input('plafon_kredit');
        $produk->suku_bunga = $req->input('suku_bunga');
        $produk->jangka_waktu = $req->input('jangka_waktu');
        $produk->sifat_kredit = $req->input('sifat_kredit');
        $produk->jenis_permohonan = $req->input('jenis_permohonan');
        $produk->jenis_angsuran = $req->input('jenis_angsuran');
        $produk->no_aplikasi_sebelumnya = $req->input('no_aplikasi_sebelumnya');
        $produk->tujuan_penggunaan = $req->input('tujuan_penggunaan');
        $produk->detail_tujuan_penggunaan = $req->input('detail_tujuan_penggunaan');
        $produk->save();
        return $produk;
    }
    public function getSifatKredit()
    {
        $data = SifatKredit::all();
        return response()->json($data);
    }
    public function getProdukById(string $id)
    {
        $produk = Produk::findOrFail($id);
        return response()->json($produk);
    }

    public function update(Request $request, string $id)
    {
        $produk = Produk::findOrFail($id);

        $validatedData = $request->validate([
            'Cif' => 'required|numeric',
            'pengajuan' => 'required|string',
            'bidang_usaha' => 'required|string',
            'NomorRekening' => 'required|string',
            'plafon_kredit' => 'required|numeric',
            'tanggal_aplikasi' => 'required|string',
            'suku_bunga' => 'required|numeric',
            'tanggal_permohonan' => 'required|string',
            'jangka_waktu' => 'required|numeric',
            'sifat_kredit' => 'required|string',
            'jenis_permohonan' => 'required|string',
            'jenis_angsuran' => 'required|string',
            'no_aplikasi_sebelumnya' => 'required|string',
            'tujuan_penggunaan' => 'required|string',
            'detail_tujuan_penggunaan' => 'required|string',
        ]);

        $produk->update($validatedData);

        return response()->json($produk);
    }
    public function destroy(string $id)
    {
        $produk = Produk::findOrFail($id);
        $produk->delete();

        return response()->json(null, 204);
    }
}
