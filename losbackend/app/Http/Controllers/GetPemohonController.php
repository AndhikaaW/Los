<?php

// namespace App\Controllers;

// use App\Models\PemohonModel;
// use App\Models\RegisterNasabahModel;

// class PemohonController extends BaseController
// {
//     protected $pemohonModel;
//     protected $registerNasabahModel;

//     public function __construct()
//     {
//         $this->pemohonModel = new PemohonModel();
//         $this->registerNasabahModel = new RegisterNasabahModel();
//     }

//     public function getPemohonData($cif)
//     {
//         // Ambil data pemohon
//         $pemohonData = $this->pemohonModel->where('cif', $cif)->first();

//         if (!$pemohonData) {
//             return $this->response->setJSON([
//                 'status' => 'error',
//                 'message' => 'Data pemohon tidak ditemukan'
//             ])->setStatusCode(404);
//         }

//         // Ambil data register nasabah
//         $registerNasabahData = $this->registerNasabahModel->where('CabangEntry', $cif)->first();

//         // Gabungkan data
//         $result = [
//             'pemohon' => $pemohonData,
//             'register_nasabah' => $registerNasabahData
//         ];

//         return $this->response->setJSON([
//             'status' => 'success',
//             'data' => $result
//         ]);
//     }
// }