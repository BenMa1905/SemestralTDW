<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BebidaController;
use App\Http\Controllers\BodegaController;
use App\Http\Controllers\RegistroController;
use App\Http\Controllers\InventarioController;
use App\Http\Controllers\FunctionController;

Route::middleware('api')->group(function () {
    Route::get('bebidas', [BebidaController::class, 'findAll']);
    Route::post('bebidas', [BebidaController::class, 'create']);
    Route::get('bebidas/{id}', [BebidaController::class, 'findOne']);
    Route::put('bebidas/{id}', [BebidaController::class, 'update']);
    Route::delete('bebidas/{id}', [BebidaController::class, 'destroy']);


    Route::get('bodega', [BodegaController::class, 'index']);
    Route::post('bodega', [BodegaController::class, 'store']);
    Route::get('bodega/{id}', [BodegaController::class, 'show']);
    Route::put('bodega/{id}', [BodegaController::class, 'update']);
    Route::delete('bodega/{id}', [BodegaController::class, 'destroy']);

    Route::get('registros', [RegistroController::class, 'index']);
    Route::post('registros', [RegistroController::class, 'store']);
    Route::get('registros/{id}', [RegistroController::class, 'show']);
    Route::put('registros/{id}', [RegistroController::class, 'update']);
    Route::delete('registros/{id}', [RegistroController::class, 'destroy']);

    Route::get('inventarios', [InventarioController::class, 'index']);
    Route::post('inventarios', [InventarioController::class, 'store']);
    Route::get('inventarios/{id}', [InventarioController::class, 'show']);
    Route::put('inventarios/{id}', [InventarioController::class, 'update']);
    Route::delete('inventarios/{id}', [InventarioController::class, 'destroy']);

    Route::get('function/total-inventario/{id}', [FunctionController::class, 'obtenerTotalInventario']);
    Route::get('function/total-inventario-producto/{id}', [FunctionController::class, 'obtenerTotalInventarioProducto']);
    Route::get('function/bebidas-almacen/{id}', [FunctionController::class, 'obtenerBebidasEnAlmacen']);
    Route::get('function/informacion-almacenes', [FunctionController::class, 'informacionAlmacenes']);
    Route::get('function/almacenes-por-bebida/{id}', [FunctionController::class, 'obtenerAlmacenesPorBebida']);
    Route::get('function/historial-por-bodega/{id}', [FunctionController::class, 'obtenerHistorialPorBodega']);
    Route::get('function/historial-entre-almacenes/{idBodegaEnvia}/{idBodegaRecibe}', [FunctionController::class, 'obtenerHistorialEntreAlmacenes']);


});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});