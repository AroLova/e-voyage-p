<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Blogs\BlogController;
use App\Http\Controllers\Blogs\PostController;
use App\Http\Controllers\Endroit\ProvinceController;
use App\Http\Controllers\Endroit\RegionController;
use App\Http\Controllers\Endroit\DistrictController;
use App\Http\Controllers\Endroit\CommuneController;
use App\Http\Controllers\Endroit\EndroitController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/auth/registre', [AuthController::class, "registre"]);
Route::post('/auth/login', [AuthController::class, "login"]);
Route::post('/auth/chekCredentials', [AuthController::class, "chekCredentials"]);

Route::apiResource('region', RegionController::class);
Route::apiResource('province', ProvinceController::class);
Route::apiResource('district', DistrictController::class);
Route::apiResource('commune', CommuneController::class);
Route::get('/endroit/commune', [EndroitController::class, 'commune']);
Route::get('/endroit/district', [EndroitController::class, 'district']);
Route::get('/endroit/region', [EndroitController::class, 'region']);
Route::get('/regions-by-province', [EndroitController::class, 'getRegionsByProvince']);
Route::get('/district-by-region', [EndroitController::class, 'getDistrictByRegion']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('auth/logout', [AuthController::class,"logout"]);
    Route::get('/posts', [PostController::class, 'index']);
    Route::post('/posts', [PostController::class, 'store']);
    Route::apiResource('blog', BlogController::class);
});


