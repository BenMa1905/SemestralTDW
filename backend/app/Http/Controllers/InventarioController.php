<?php

namespace App\Http\Controllers;

use App\Models\Inventario;
use Illuminate\Http\Request;

class InventarioController extends Controller
{
    public function index()
    {
        $inventario = Inventario::all();
        return response()->json($inventario, 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'bebida_id' => 'required|exists:bebidas,id',
            'cantidad' => 'required|integer|min:1',
            'bodega_id' => 'required|exists:bodega,id',
        ]);

        $inventario = Inventario::where('bebida_id', $request->bebida_id)
            ->where('bodega_id', $request->bodega_id)
            ->first();

        if ($inventario) {
            $inventario->cantidad += $request->cantidad;
            $inventario->save();

            return response()->json($inventario, 200);
        }

        $inventario = Inventario::create($request->all());

        return response()->json($inventario, 201);
    }


    public function show($id)
    {
        return response()->json(Inventario::findOrFail($id), 200);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'bebida_id' => 'required|exists:bebidas,id',
            'cantidad' => 'required|integer|min:1',
            'bodega_id' => 'required|exists:bodega,id',
        ]);

        $inventario = Inventario::findOrFail($id);

        if ($request->has('bebida_id')) {
            $inventario->bebida_id = $request->bebida_id;
        }
        if ($request->has('cantidad')) {
            $inventario->cantidad = $request->cantidad;
        }
        if ($request->has('bodega_id')) {
            $inventario->bodega_id = $request->bodega_id;
        }

        $inventario->save();

        return response()->json($inventario, 200);
    }

    public function destroy($id)
    {
        $inventario = Inventario::findOrFail($id);
        $inventario->delete();

        return response()->json([
            'message' => 'Inventario eliminado correctamente'
        ], 204);
    }
}