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
        $produk->produk = $req->input('produk');
        $produk->bidang_usaha = $req->input('bidang_usaha');
        $produk->nomor_aplikasi = $req->input('nomor_aplikasi');
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
}
