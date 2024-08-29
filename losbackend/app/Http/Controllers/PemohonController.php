<?php

namespace App\Http\Controllers;

use App\Models\Pemohon;
use Illuminate\Http\Request;

class PemohonController extends Controller
{
    function pemohon(Request $req)
    {
        $pemohon = new Pemohon;
        $pemohon->produk = $req->input('produk');
        $pemohon->bidang_usaha = $req->input('bidang_usaha');
        $pemohon->nomor_aplikasi = $req->input('nomor_aplikasi');
        $pemohon->tanggal_aplikasi = $req->input('tanggal_aplikasi');
        $pemohon->tanggal_permohonan = $req->input('tanggal_permohonan');
        $pemohon->plafon_kredit = $req->input('plafon_kredit');
        $pemohon->suku_bunga = $req->input('suku_bunga');
        $pemohon->jangka_waktu = $req->input('jangka_waktu');
        $pemohon->sifat_kredit = $req->input('sifat_kredit');
        $pemohon->jenis_permohonan = $req->input('jenis_permohonan');
        $pemohon->jenis_angsuran = $req->input('jenis_angsuran');
        $pemohon->no_aplikasi_sebelumnya = $req->input('no_aplikasi_sebelumnya');
        $pemohon->tujuan_penggunaan = $req->input('tujuan_penggunaan');
        $pemohon->detail_tujuan_penggunaan = $req->input('detail_tujuan_penggunaan');
        $pemohon->cif = $req->input('cif');
        $pemohon->tempat_lahir = $req->input('tempat_lahir');
        $pemohon->jenis_kelamin = $req->input('jenis_kelamin');
        $pemohon->status_perkawinan = $req->input('status_perkawinan');
        $pemohon->no_ktp = $req->input('no_ktp');
        $pemohon->profesi_sampingan = $req->input('profesi_sampingan');
        $pemohon->nama_lengkap = $req->input('nama_lengkap');
        $pemohon->tanggal_lahir = $req->input('tanggal_lahir');
        $pemohon->nama_ibu_kandung = $req->input('nama_ibu_kandung');
        $pemohon->jumlah_tanggungan = $req->input('jumlah_tanggungan');
        $pemohon->ktp_berlaku = $req->input('ktp_berlaku');
        $pemohon->no_hp = $req->input('no_hp');
        $pemohon->alamat = $req->input('alamat');
        $pemohon->kode_pos = $req->input('kode_pos');
        $pemohon->provinsi = $req->input('provinsi');
        $pemohon->kecamatan = $req->input('kecamatan');
        $pemohon->telepon = $req->input('telepon');
        $pemohon->status_tempat_tinggal = $req->input('status_tempat_tinggal');
        $pemohon->kota = $req->input('kota');
        $pemohon->kelurahan = $req->input('kelurahan');
        $pemohon->fax = $req->input('fax');
        $pemohon->lama_tinggal = $req->input('lama_tinggal');
        $pemohon->nama_usaha = $req->input('nama_usaha');
        $pemohon->tanggal_mulai_usaha = $req->input('tanggal_mulai_usaha');
        $pemohon->status_tempat_usaha = $req->input('status_tempat_usaha');
        $pemohon->surat_keterangan_usaha = $req->input('surat_keterangan_usaha');
        $pemohon->sektor_ekonomi = $req->input('sektor_ekonomi');
        $pemohon->jumlah_karyawan = $req->input('jumlah_karyawan');
        $pemohon->jarak_lokasi_usaha = $req->input('jarak_lokasi_usaha');
        $pemohon->masa_laku = $req->input('masa_laku');
        $pemohon->alamat_usaha = $req->input('alamat_usaha');
        $pemohon->kode_pos_usaha = $req->input('kode_pos_usaha');
        $pemohon->provinsi_usaha = $req->input('provinsi_usaha');
        $pemohon->kecamatan_usaha = $req->input('kecamatan_usaha');
        $pemohon->kota_usaha = $req->input('kota_usaha');
        $pemohon->kelurahan_usaha = $req->input('kelurahan_usaha');
        $pemohon->save();
        return $pemohon;
    }
}