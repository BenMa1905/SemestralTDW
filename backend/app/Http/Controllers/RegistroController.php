<?php

namespace App\Http\Controllers;

use App\Models\Registro;
use Illuminate\Http\Request;

class RegistroController extends Controller
{
    public function index()
    {
        $registro = Registro::all();
        return response()->json($registro, 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'bodega_envia_id' => 'required|exists:bodega,id',
            'bodega_recibe_id' => 'required|exists:bodega,id',
            'cantidad' => 'required|integer',
            'bebida_id' => 'required|exists:bebidas,id',
        ]);

        if ($request->bodega_envia_id == $request->bodega_recibe_id) {
            return response()->json([
                'message' => 'La bodega que envía no puede ser la misma que recibe'
            ], 400);
        }

        $registro = Registro::create($request->all());

        return response()->json($registro, 201);
    }

    public function show($id)
    {
        return response()->json(Registro::findOrFail($id), 200);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'bodega_envia_id' => 'required|exists:bodega,id',
            'bodega_recibe_id' => 'required|exists:bodega,id',
            'cantidad' => 'required|integer',
            'bebida_id' => 'required|exists:bebidas,id',
        ]);

        if ($request->bodega_envia_id == $request->bodega_recibe_id) {
            return response()->json([
                'message' => 'La bodega que envía no puede ser la misma que recibe'
            ], 400);
        }

        $registro = Registro::findOrFail($id);

        if ($request->has('bodega_envia_id')) {
            $registro->bodega_envia_id = $request->bodega_envia_id;
        }
        if ($request->has('bodega_recibe_id')) {
            $registro->bodega_recibe_id = $request->bodega_recibe_id;
        }
        if ($request->has('cantidad')) {
            $registro->cantidad = $request->cantidad;
        }
        if ($request->has('bebida_id')) {
            $registro->bebida_id = $request->bebida_id;
        }

        $registro->save();

        return response()->json($registro, 200);
    }

    public function destroy($id)
    {
        $registro = Registro::findOrFail($id);
        $registro->delete();

        return response()->json([
            'message' => 'Registro eliminado correctamente'
        ], 204);
    }
}
