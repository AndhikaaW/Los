<?php

use App\Http\Controllers\AspekFormController;
use App\Http\Controllers\FinansialController;
use App\Http\Controllers\JaminanController;
use App\Http\Controllers\LimaC_Controller;
use App\Http\Controllers\Pemohon2Controller;
use App\Http\Controllers\PemohonController;
use App\Http\Controllers\PengajuanKreditController;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\RegisterNasabahController;
use App\Http\Controllers\SidebarController;
use App\Http\Controllers\SurveyController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//finansial
Route::post('/finansial', [FinansialController::class, 'finansial']); //tambah data
Route::get('/getallfinansial', [FinansialController::class, 'getAllFinansial']); //get all data
Route::get('/getfinansialbyid/{id}', [FinansialController::class, 'getFinansialById']); //gaguna
Route::put('/updatefinansialbyid/{id}', [FinansialController::class, 'update']); //update data
Route::delete('/deletefinansialbyid/{id}', [FinansialController::class, 'destroy']); //delete data
Route::get('/getfinansialbynomorrekening/{nomorRekening}', [FinansialController::class, 'getFinansialByNomorRekening']); //get data by nomor rekening

//aspek
Route::post('/tambahTitleAspek', [AspekFormController::class, 'tambahTitleAspek']); //tambah title aspek
Route::get('/gettitleaspek', [AspekFormController::class, 'getTitleAspek']); //get title aspek
Route::put('/updatetitleaspekbyid/{id}', [AspekFormController::class, 'updateTitleAspek']); //update title aspek
Route::delete('/deletetitleaspekbyid/{id}', [AspekFormController::class, 'deleteTitleAspek']); //delete title aspek

Route::post('/aspek', [AspekFormController::class, 'aspek']); //tambah data
Route::get('/getallaspek', [AspekFormController::class, 'getAllAspek']); //get all data
Route::get('/getaspekbynomorrekening/{nomorRekening}', [AspekFormController::class, 'getAspekByNomorRekening']); //get data by nomor rekening

//jaminan
Route::post('/tambahjenisagunan', [JaminanController::class, 'tambahjenisagunan']); //tambah jenis agunan
Route::delete('/deletejenisagunanbyid/{id}', [JaminanController::class, 'deleteJenisAgunan']); //delete jenis agunan
Route::get('/getjenisagunan', [JaminanController::class, 'getjenisagunan']); //get jenis agunan
Route::post('/tambahhakmilik', [JaminanController::class, 'tambahhakmilik']); //tambah hak milik
Route::get('/gethakmilik', [JaminanController::class, 'gethakmilik']); //get all hak milik
Route::delete('/deletehakmilikbyid/{id}', [JaminanController::class, 'deleteHakMilik']); //delete hak milik
Route::post('/tambahtipe', [JaminanController::class, 'tambahtipe']); //tambah tipe
Route::get('/gettipe', [JaminanController::class, 'gettipe']); //get all tipe
Route::delete('/deletetipebyid/{id}', [JaminanController::class, 'deleteTipe']); //delete tipe


Route::post('/jaminan', [JaminanController::class, 'jaminan']); //tambah data   
Route::get('/getalljaminan', [JaminanController::class, 'getalljaminan']); //get all data
Route::get('/getjaminanbyid/{id}', [JaminanController::class, 'getJaminanById']); //gaguna
Route::put('/updatejaminanbyid/{id}', [JaminanController::class, 'update']); //update data
Route::delete('/deletejaminanbyid/{id}', [JaminanController::class, 'destroy']); //delete data
Route::get('/getjaminanbynomorrekening/{nomorRekening}', [JaminanController::class, 'getJaminanByNomorRekening']); //get data by nomor rekening

//pengajuan kredit
Route::get('/getgolongankredit', [PengajuanKreditController::class, 'getGolonganKredit']); //get golongan kredit

//limac
Route::post('/limac', [LimaC_Controller::class, 'limac']); //tambah data
Route::get('/getalllimac', [LimaC_Controller::class, 'getAllLimaC']); //get all data
Route::get('/getlimacbyid/{id}', [LimaC_Controller::class, 'getLimaCById']); //gaguna
Route::get('/getlimacbynomorrekening/{nomorRekening}', [LimaC_Controller::class, 'getLimaCByNomorRekening']); //get data by nomor rekening
Route::put('/updatelimacbyid/{id}', [LimaC_Controller::class, 'update']); //update data
Route::delete('/deletelimacbyid/{id}', [LimaC_Controller::class, 'destroy']); //delete data

//pemohon
Route::post('/pemohon', [PemohonController::class, 'pemohon']); //tambah data
Route::get('/getallpemohon', [PemohonController::class, 'index']); //get all data
Route::get('/pemohon/{cif}', [PemohonController::class, 'show']); //get data by cif
Route::get('/getsektorekonomi', [PemohonController::class, 'getSektorEkonomi']); //get sektor ekonomi
Route::get('/getpemohonbyid/{id}', [PemohonController::class, 'getPemohonById']); //get data by id
Route::put('/updatepemohonbyid/{id}', [PemohonController::class, 'update']); //update data
Route::delete('/deletepemohonbyid/{Cif}', [PemohonController::class, 'destroy']); //delete data

//survey
Route::get('/getSurvey', [SurveyController::class, 'getSurvey']); //get data
Route::post('/addSurvey', [SurveyController::class, 'addSurvey']); //tambah data
Route::get('/getallsurvey', [SurveyController::class, 'getAllSurvey']); //get all data
Route::get('/getallsurveybynomorrekening/{nomorRekening}', [SurveyController::class, 'getAllSurveyByNomorRekening']); //get data by nomor rekening  

//user
Route::post('/register', [UserController::class, 'register']); //tambah data
Route::post('/login', [UserController::class, 'login']); //login

//sidebar
Route::get('/user/{userId}/sidebars', [UserController::class, 'getUserWithSidebars']); //get data with sidebar
Route::get('/getallusersidebar', [UserController::class, 'getAllUsers']); //get all data
Route::post('/sidebars/update-status', [UserController::class, 'updateSidebarStatus']); //update status
Route::put('/sync-user-sidebars', [UserController::class, 'syncUserSidebars']); //sync user sidebar

//register nasabah
Route::get('/getregisternasabah', [RegisterNasabahController::class, 'index']); //get register nasabah

//produk
Route::post('/produk', [ProdukController::class, 'produk']); //tambah data
Route::get('/getallproduk', [ProdukController::class, 'index']); //get all data
Route::get('/getsifatkredit', [ProdukController::class, 'getSifatKredit']); //get sifat kredit
Route::get('/getprodukbyid/{id}', [ProdukController::class, 'getProdukById']); //get data by id
Route::get('/getprodukbycif/{cif}', [ProdukController::class, 'getProdukByCif']); //get data by cif
Route::put('/updatepengajuanbyid/{id}', [ProdukController::class, 'update']); //update data
Route::delete('/deleteprodukbyid/{NomorRekening}', [ProdukController::class, 'destroy']); //delete data




// Route::post('/users/{userId}/sidebars/delete', [UserController::class, 'deleteSidebar']);
// Route::get('/allusersidebarsgrouped', [UserController::class, 'getAllUserSidebarsByUserId']);
// Route::delete('/api/user/sidebar/{sidebar_id}', [UserController::class, 'deleteUserSidebar']);


