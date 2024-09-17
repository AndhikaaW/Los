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

Route::post('/finansial', [FinansialController::class, 'finansial']);
Route::get('/getallfinansial', [FinansialController::class, 'getAllFinansial']);
Route::get('/getfinansialbyid/{id}', [FinansialController::class, 'getFinansialById']);
Route::put('/updatefinansialbyid/{id}', [FinansialController::class, 'update']);
Route::delete('/deletefinansialbyid/{id}', [FinansialController::class, 'destroy']);

Route::get('/gettitleaspek', [AspekFormController::class, 'getTitleAspek']);
Route::post('/aspek', [AspekFormController::class, 'addAspek']);
Route::get('/getallaspek', [AspekFormController::class, 'getAllAspek']);
Route::get('/getaspekbyid', [AspekFormController::class, 'getAspekById']);

Route::get('/getjenisagunan', [JaminanController::class, 'getjenisagunan']);
Route::post('/jaminan', [JaminanController::class, 'jaminan']);
Route::get('/getalljaminan', [JaminanController::class, 'getalljaminan']);
Route::get('/getjaminanbyid/{id}', [JaminanController::class, 'getJaminanById']);
Route::put('/updatejaminanbyid/{id}', [JaminanController::class, 'update']);
Route::delete('/deletejaminanbyid/{id}', [JaminanController::class, 'destroy']);

Route::get('/getgolongankredit', [PengajuanKreditController::class, 'getGolonganKredit']);

Route::post('/limac', [LimaC_Controller::class, 'limac']);
Route::get('/getalllimac', [LimaC_Controller::class, 'getAllLimaC']);
Route::get('/getlimacbyid/{id}', [LimaC_Controller::class, 'getLimaCById']);
Route::put('/updatelimacbyid/{id}', [LimaC_Controller::class, 'update']);
Route::delete('/deletelimacbyid/{id}', [LimaC_Controller::class, 'destroy']);

Route::post('/pemohon', [PemohonController::class, 'pemohon']);
Route::get('/getallpemohon', [PemohonController::class, 'index']);
Route::get('/pemohon/{cif}', [PemohonController::class, 'show']);
Route::get('/getprodukbycif/{cif}', [PemohonController::class, 'getProdukByCif']);
Route::get('/getsektorekonomi', [PemohonController::class, 'getSektorEkonomi']);
Route::get('/getpemohonbyid/{id}', [PemohonController::class, 'getPemohonById']);
Route::put('/updatepemohonbyid/{id}', [PemohonController::class, 'update']);
Route::delete('/deletepemohonbyid/{id}', [PemohonController::class, 'destroy']);

Route::get('/getSurvey', [SurveyController::class, 'getSurvey']);
Route::post('/addSurvey', [SurveyController::class, 'addSurvey']);
Route::get('/getallsurvey', [SurveyController::class, 'getAllSurvey']);

Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);

Route::get('/user/{userId}/sidebars', [UserController::class, 'getUserWithSidebars']);
Route::get('/getallusersidebar', [UserController::class, 'getAllUsers']);
Route::post('/sidebars/update-status', [UserController::class, 'updateSidebarStatus']);
Route::put('/sync-user-sidebars', [UserController::class, 'syncUserSidebars']);

Route::get('/getregisternasabah', [RegisterNasabahController::class, 'index']);

Route::post('/produk', [ProdukController::class, 'produk']);
Route::get('/getallproduk', [ProdukController::class, 'index']);
Route::get('/getsifatkredit', [ProdukController::class, 'getSifatKredit']);
Route::get('/getprodukbyid/{id}', [ProdukController::class, 'getProdukById']);
Route::put('/updatepengajuanbyid/{id}', [ProdukController::class, 'update']);
Route::delete('/deleteprodukbyid/{id}', [ProdukController::class, 'destroy']);




// Route::post('/users/{userId}/sidebars/delete', [UserController::class, 'deleteSidebar']);
// Route::get('/allusersidebarsgrouped', [UserController::class, 'getAllUserSidebarsByUserId']);
// Route::delete('/api/user/sidebar/{sidebar_id}', [UserController::class, 'deleteUserSidebar']);


