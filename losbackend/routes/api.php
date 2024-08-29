<?php

use App\Http\Controllers\AspekFormController;
use App\Http\Controllers\FinansialController;
use App\Http\Controllers\LimaC_Controller;
use App\Http\Controllers\Pemohon2Controller;
use App\Http\Controllers\PemohonController;
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

Route::post('/aspekform', [AspekFormController::class, 'aspekform']);

Route::post('/limac', [LimaC_Controller::class, 'limac']);

Route::post('/pemohon', [PemohonController::class, 'pemohon']);
Route::get('/getpemohon', [Pemohon2Controller::class, 'index']);

Route::get('/getSurvey', [SurveyController::class, 'getsurvey']);

Route::get('/getsidebar', [SidebarController::class, 'getsidebar']);

Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);

Route::get('/user/{userId}/sidebars', [UserController::class, 'getUserWithSidebars']);
Route::get('/getallusersidebar', [UserController::class, 'getAllUsers']);
Route::post('/sidebars/update-status', [UserController::class, 'updateSidebarStatus']);
Route::put('/sync-user-sidebars', [UserController::class, 'syncUserSidebars']);


// Route::post('/users/{userId}/sidebars/delete', [UserController::class, 'deleteSidebar']);
// Route::get('/allusersidebarsgrouped', [UserController::class, 'getAllUserSidebarsByUserId']);
// Route::delete('/api/user/sidebar/{sidebar_id}', [UserController::class, 'deleteUserSidebar']);


