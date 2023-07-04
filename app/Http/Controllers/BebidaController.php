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
    public function index()
    {
        $bebidas = Bebida::all();
        return view('bebidas.index', compact('bebidas'));
    }

    public function create()
    {
        return view('bebidas.create');
    }

    public function store(Request $request)
    {
        Bebida::create($request->all());
        return redirect()->route('bebidas.index');
    }

    public function edit(Bebida $bebida)
    {
        return view('bebidas.edit', compact('bebida'));
    }

    public function update(Request $request, Bebida $bebida)
    {
        $bebida->update($request->all());
        return redirect()->route('bebidas.index');
    }

    public function destroy(Bebida $bebida)
    {
        $bebida->delete();
        return redirect()->route('bebidas.index');
    }
}
