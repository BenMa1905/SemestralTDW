<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Bodega extends Model
{
    use HasFactory;
    protected $table = 'bodega';
    protected $hidden = ['eliminado'];
    protected $fillable = ['nombre', 'ubicacion'];

    // Resto de las relaciones y métodos del modelo...
}
