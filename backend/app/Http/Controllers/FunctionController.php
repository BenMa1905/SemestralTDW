<?php

namespace App\Http\Controllers;

use App\Models\Inventario;
use App\Models\Bodega;
use App\Models\Registro;
use App\Models\Bebida;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;


class FunctionController extends Controller
{
    public function obtenerTotalInventario($id)
    {
        $totalInventario = Inventario::where('bodega_id', $id)->sum('cantidad');

        return response()->json(['cantidad' => $totalInventario]);
    }

    public function obtenerTotalInventarioProducto($id)
    {
        $totalInventario = Inventario::where('bebida_id', $id)->sum('cantidad');

        return response()->json(['cantidad' => $totalInventario]);
    }

    public function obtenerBebidasEnAlmacen($id)
    {
        $bebidas = Inventario::where('bodega_id', $id)
            ->with('bebida')
            ->get(['bebida_id', 'cantidad']);

        $bebidasEnAlmacen = $bebidas->map(function ($item) {
            return [
                'nombre' => $item->bebida->nombre,
                'sabor' => $item->bebida->sabor,
                'presentacion' => $item->bebida->presentacion,
                'cantidad' => $item->cantidad,
            ];
        });

        return response()->json($bebidasEnAlmacen);
    }

    public function informacionAlmacenes()
    {
        $almacenes = Bodega::all();

        $informacion = $almacenes->map(function ($almacen) {
            $totalInventario = $this->obtenerTotalInventario($almacen->id)->original['cantidad'];
            $bebidasEnAlmacen = $this->obtenerBebidasEnAlmacen($almacen->id)->original;

            return [
                'id' => $almacen->id,
                'nombre' => $almacen->nombre,
                'ubicacion' => $almacen->ubicacion,
                'total_inventario' => $totalInventario,
                'bebidas' => $bebidasEnAlmacen,
            ];
        });

        return response()->json($informacion);
    }

    public function obtenerAlmacenesPorBebida($id)
    {
        $almacenes = Bodega::join('inventario', 'bodega.id', '=', 'inventario.bodega_id')
            ->join('bebidas', 'inventario.bebida_id', '=', 'bebidas.id')
            ->where('bebidas.id', $id)
            ->get(['bodega.id', 'bodega.nombre', 'bodega.ubicacion', 'bebidas.nombre as nombre_bebida', 'bebidas.sabor', 'bebidas.presentacion', 'inventario.cantidad']);

        $resultado = $almacenes->map(function ($almacen) {
            return [
                'id' => $almacen->id,
                'nombre' => $almacen->nombre,
                'ubicacion' => $almacen->ubicacion,
                'bebida' => [
                    'nombre' => $almacen->nombre_bebida,
                    'sabor' => $almacen->sabor,
                    'presentacion' => $almacen->presentacion,
                ],
                'cantidad' => $almacen->cantidad,
            ];
        });

        return response()->json($resultado);
    }


    public function obtenerHistorialPorBodega($id)
    {
        $registros = Registro::where('bodega_envia_id', $id)
            ->orWhere('bodega_recibe_id', $id)
            ->with(['bodegaEnvia:id,nombre,ubicacion', 'bodegaRecibe:id,nombre,ubicacion', 'bebida'])
            ->get();

        $historial = $registros->map(function ($registro) use ($id) {
            $idAlmacenEnvia = $registro->bodegaEnvia->id;
            $nombreAlmacenEnvia = $registro->bodegaEnvia->nombre;
            $ubicacionAlmacenEnvia = $registro->bodegaEnvia->ubicacion;
            $idAlmacenRecibe = $registro->bodegaRecibe->id;
            $nombreAlmacenRecibe = $registro->bodegaRecibe->nombre;
            $ubicacionAlmacenRecibe = $registro->bodegaRecibe->ubicacion;

            if ($registro->bodega_envia_id == $id) {
                return [
                    'id' => $registro->id,
                    'almacen_envia' => [
                        'id' => $idAlmacenEnvia,
                        'nombre' => $nombreAlmacenEnvia,
                        'ubicacion' => $ubicacionAlmacenEnvia,
                    ],
                    'almacen_recibe' => [
                        'id' => $idAlmacenRecibe,
                        'nombre' => $nombreAlmacenRecibe,
                        'ubicacion' => $ubicacionAlmacenRecibe,
                    ],
                    'bebida' => [
                        'id' => $registro->bebida->id,
                        'nombre' => $registro->bebida->nombre,
                        'sabor' => $registro->bebida->sabor,
                        'presentacion' => $registro->bebida->presentacion,
                    ],
                    'cantidad' => $registro->cantidad,
                ];
            } else {
                return [
                    'id' => $registro->id,
                    'almacen_envia' => [
                        'id' => $idAlmacenRecibe,
                        'nombre' => $nombreAlmacenRecibe,
                        'ubicacion' => $ubicacionAlmacenRecibe,
                    ],
                    'almacen_recibe' => [
                        'id' => $idAlmacenEnvia,
                        'nombre' => $nombreAlmacenEnvia,
                        'ubicacion' => $ubicacionAlmacenEnvia,
                    ],
                    'bebida' => [
                        'id' => $registro->bebida->id,
                        'nombre' => $registro->bebida->nombre,
                        'sabor' => $registro->bebida->sabor,
                        'presentacion' => $registro->bebida->presentacion,
                    ],
                    'cantidad' => $registro->cantidad,
                ];
            }
        });

        return response()->json($historial);
    }



    public function obtenerHistorialEntreAlmacenes($idBodegaEnvia, $idBodegaRecibe)
    {
        $registros = Registro::where(function ($query) use ($idBodegaEnvia, $idBodegaRecibe) {
            $query->where('bodega_envia_id', $idBodegaEnvia)
                ->where('bodega_recibe_id', $idBodegaRecibe);
        })->orWhere(function ($query) use ($idBodegaEnvia, $idBodegaRecibe) {
            $query->where('bodega_envia_id', $idBodegaRecibe)
                ->where('bodega_recibe_id', $idBodegaEnvia);
        })
            ->with(['bodegaEnvia:id,nombre,ubicacion', 'bodegaRecibe:id,nombre,ubicacion', 'bebida'])
            ->get();

        $historial = $registros->map(function ($registro) {
            $idAlmacenEnvia = $registro->bodegaEnvia->id;
            $nombreAlmacenEnvia = $registro->bodegaEnvia->nombre;
            $ubicacionAlmacenEnvia = $registro->bodegaEnvia->ubicacion;
            $idAlmacenRecibe = $registro->bodegaRecibe->id;
            $nombreAlmacenRecibe = $registro->bodegaRecibe->nombre;
            $ubicacionAlmacenRecibe = $registro->bodegaRecibe->ubicacion;

            return [
                'id' => $registro->id,
                'almacen_envia' => [
                    'id' => $idAlmacenEnvia,
                    'nombre' => $nombreAlmacenEnvia,
                    'ubicacion' => $ubicacionAlmacenEnvia,
                ],
                'almacen_recibe' => [
                    'id' => $idAlmacenRecibe,
                    'nombre' => $nombreAlmacenRecibe,
                    'ubicacion' => $ubicacionAlmacenRecibe,
                ],
                'bebida' => [
                    'id' => $registro->bebida->id,
                    'nombre' => $registro->bebida->nombre,
                    'sabor' => $registro->bebida->sabor,
                    'presentacion' => $registro->bebida->presentacion,
                ],
                'cantidad' => $registro->cantidad,
            ];
        });

        return response()->json($historial);
    }



}