<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bebida extends Model
{
    protected $fillable = ['nombre', 'sabor', 'presentacion'];

    // Resto de las relaciones y métodos del modelo...
}
