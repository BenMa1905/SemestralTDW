<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bebida extends Model
{
    use HasFactory;
    protected $table = 'bebidas';
    protected $hidden = ['eliminado'];
    protected $fillable = ['nombre', 'sabor', 'presentacion'];

    // Resto de las relaciones y métodos del modelo...
}
