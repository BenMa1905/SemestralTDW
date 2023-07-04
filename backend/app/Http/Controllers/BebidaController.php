<?php

namespace App\Http\Controllers;

use App\Models\Bebida;
use Illuminate\Http\Request;

class BebidaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    

    

    public function create(Request $request)
    {
        $bebida = new Bebida();
        $bebida->nombre = $request->nombre;
        $bebida->sabor = $request->sabor;
        $bebida->presentaciones = $request->presentacion;
        $bebida->save();
        
        return response()->json($bebida,201);
    }

    
    public function update(Request $request, $id)
    {
        $bebida = Bebida::findOrFail($id);        
        
        if($request->has('nombre')){
            $bebida->nombre = $request->nombre;
        }

        if($request->has('sabor')){
            $bebida->sabor = $request->sabor;
        }

        if($request->has('presentacion')){
            $bebida->presentacion = $request->presentacion;
        }

        $bebida->save();
        return response()->json($bebida,200);
    }

    public function destroy($id)
    {
        $bebida = Bebida::findOrFail($id);
        $bebida->delete();
        return response()->json([
            'message' => 'Bebida eliminada correctamente'
        ],204);
    }

    public function findOne($id)
    {
        $bebida = Bebida::findOrFail($id);
        return response()->json($bebida,200);
    }

    public function findAll()
    {
        $bebidas = Bebida::all();
        return response()->json($bebidas,200);
    }



}
