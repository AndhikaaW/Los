<?php

namespace App\Http\Controllers;

use App\Models\Finansial;
use Illuminate\Http\Request;

class FinansialController extends Controller
{
    function finansial(Request $req)
    {
        $financial = new Finansial;
        $financial->oms_ramai = $req->input('oms_ramai');
        $financial->oms_normal = $req->input('oms_normal');
        $financial->oms_sepi = $req->input('oms_sepi');
        $financial->hrg_pokok_jual = $req->input('hrg_pokok_jual');
        $financial->btk_tdklangsung = $req->input('btk_tdklangsung');
        $financial->ohc = $req->input('ohc');
        $financial->b_usahalainnya = $req->input('b_usahalainnya');
        $financial->b_rumahtangga = $req->input('b_rumahtangga');
        $financial->b_sekolah = $req->input('b_sekolah');
        $financial->b_pln_pdam = $req->input('b_pln_pdam');
        $financial->b_transport_komunikasi = $req->input('b_transport_komunikasi');
        $financial->b_lain_lain = $req->input('b_lain_lain');
        $financial->p_lainnya = $req->input('p_lainnya');
        $financial->b_Lainnya = $req->input('b_Lainnya');
        $financial->bukti_pendapatan = $req->input('bukti_pendapatan');
        $financial->bukti_biaya = $req->input('bukti_biaya');
        $financial->bank_nonbank = $req->input('bank_nonbank');
        $financial->koperasi = $req->input('koperasi');
        $financial->lainLain = $req->input('lainLain');
        $financial->angsuran_baru = $req->input('angsuran_baru');
        $financial->kas = $req->input('kas');
        $financial->bank = $req->input('bank');
        $financial->piutang = $req->input('piutang');
        $financial->persediaan_barang = $req->input('persediaan_barang');
        $financial->atv_lancar_lainnya = $req->input('atv_lancar_lainnya');
        $financial->sub_atv_lancar = $req->input('sub_atv_lancar');
        $financial->tanah_bangunan = $req->input('tanah_bangunan');
        $financial->peralatan_usaha = $req->input('peralatan_usaha');
        $financial->kendaraan = $req->input('kendaraan');
        $financial->atv_tetap_lainnya = $req->input('atv_tetap_lainnya');
        $financial->sub_atv_tetap = $req->input('sub_atv_tetap');
        $financial->jumlah_atv = $req->input('jumlah_atv');
        $financial->tot_bdp_jangka_pendek = $req->input('tot_bdp_jangka_pendek');
        $financial->idr_jangka_pendek = $req->input('idr_jangka_pendek');
        $financial->jangka_pendek = $req->input('jangka_pendek');
        $financial->tot_bdp_jangka_panjang = $req->input('tot_bdp_jangka_panjang');
        $financial->idr_jangka_panjang = $req->input('idr_jangka_panjang');
        $financial->jangka_panjang = $req->input('jangka_panjang');
        $financial->sub_jumlah_hutang = $req->input('sub_jumlah_hutang');
        $financial->modal_sendiri = $req->input('modal_sendiri');
        $financial->laba = $req->input('laba');
        $financial->sub_jumlah_modal = $req->input('sub_jumlah_modal');
        $financial->jumlah_passiva = $req->input('jumlah_passiva');
        $financial->save();
        return $financial;
    }
}
