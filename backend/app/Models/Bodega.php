<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bodega extends Model
{
    protected $table = 'bodega';
    protected $fillable = ['nombre', 'ubicacion'];

    // Resto de las relaciones y métodos del modelo...
}
