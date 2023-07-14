<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Inventario extends Model
{
    use HasFactory;
    protected $table = 'inventario';
    protected $fillable = ['bodega_id', 'bebida_id', 'cantidad'];

    public function bodega()
    {
        return $this->belongsTo(Bodega::class, 'bodega_id');
    }

    public function bebida()
    {
        return $this->belongsTo(Bebida::class, 'bebida_id');
    }
    // Resto de las relaciones y métodos del modelo...
}
