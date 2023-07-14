<?php

namespace App\Http\Controllers;

use App\Models\Bebida;
use Illuminate\Http\Request;

class BebidaController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
            'sabor' => 'required|string|max:255',
            'presentacion' => 'required|string|max:255',
        ]);

        $bebida = new Bebida();
        $bebida->nombre = $request->nombre;
        $bebida->sabor = $request->sabor;
        $bebida->presentacion = $request->presentacion;
        $bebida->save();

        return response()->json($bebida, 201);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nombre' => 'string|max:255',
            'sabor' => 'string|max:255',
            'presentacion' => 'string|max:255',
        ]);

        $bebida = Bebida::findOrFail($id);

        if ($request->has('nombre')) {
            $bebida->nombre = $request->nombre;
        }

        if ($request->has('sabor')) {
            $bebida->sabor = $request->sabor;
        }

        if ($request->has('presentacion')) {
            $bebida->presentacion = $request->presentacion;
        }

        $bebida->save();
        return response()->json($bebida, 200);
    }

    public function destroy($id)
    {
        $bebida = Bebida::findOrFail($id);
        $bebida->eliminado = true;
        $bebida->nombre = $bebida->nombre . ' (ELIMINADO)';
        $bebida->save();
        return response()->json([
            'message' => 'Bebida eliminada correctamente'
        ], 204);
    }

    public function findOne($id)
    {
        $bebida = Bebida::findOrFail($id);
        return response()->json($bebida, 200);
    }

    public function findAll()
    {
        $bebidas = Bebida::where('eliminado', false)->get();
        return response()->json($bebidas, 200);
    }
}
