<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BebidaController;
use App\Http\Controllers\BodegaController;
use App\Http\Controllers\RegistroController;
use App\Http\Controllers\InventarioController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::resource('bebidas', BebidaController::class);
Route::resource('bodega', BodegaController::class);
Route::resource('registros', RegistroController::class);
Route::resource('inventarios', InventarioController::class);
