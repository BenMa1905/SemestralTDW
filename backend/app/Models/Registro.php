<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Registro extends Model
{

    protected $table = 'registro';
    protected $fillable = ['bodega_envia_id', 'bodega_recibe_id', 'cantidad', 'bebida_id'];

    public function bodegaEnvia()
    {
        return $this->belongsTo(Bodega::class, 'bodega_envia_id');
    }

    public function bodegaRecibe()
    {
        return $this->belongsTo(Bodega::class, 'bodega_recibe_id');
    }

    public function bebida()
    {
        return $this->belongsTo(Bebida::class);
    }

    // Resto de los métodos del modelo...
}

