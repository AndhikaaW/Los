<?php

use App\Http\Controllers\AspekFormController;
use App\Http\Controllers\FinansialController;
use App\Http\Controllers\LimaC_Controller;
use App\Http\Controllers\PemohonController;
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
Route::post('/aspekform', [AspekFormController::class, 'aspekform']);
Route::post('/limac', [LimaC_Controller::class, 'limac']);
Route::post('/pemohon', [PemohonController::class, 'pemohon']);
