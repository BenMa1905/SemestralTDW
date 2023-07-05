<?php

namespace App\Http\Controllers;

use App\Models\Bodega;
use Illuminate\Http\Request;

class BodegaController extends Controller
{
    public function index()
    {
        $bodega = Bodega::all();
        return response()->json($bodega, 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
            'ubicacion' => 'required|string|max:255',
        ]);

        $bodega = Bodega::create($request->all());

        return response()->json($bodega, 201);
    }

    public function show($id)
    {
        return response()->json(Bodega::findOrFail($id), 200);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
            'ubicacion' => 'required|string|max:255',
        ]);

        $bodega = Bodega::findOrFail($id);

        if ($request->has('nombre')) {
            $bodega->nombre = $request->nombre;
        }
        if ($request->has('ubicacion')) {
            $bodega->ubicacion = $request->ubicacion;
        }

        $bodega->save();

        return response()->json($bodega, 200);
    }

    public function destroy($id)
    {
        $bodega = Bodega::findOrFail($id);
        $bodega->delete();

        return response()->json([
            'message' => 'Bodega eliminada correctamente'
        ], 204);
    }
}
