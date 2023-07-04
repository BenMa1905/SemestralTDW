<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bebida extends Model
{
    use HasFactory;

    protected $table = 'bebidas';

    protected $primaryKey = 'id';

    public $timestamps = true;

    protected $fillable = [
        'nombre', 
        'sabor',
        'presentaciones'
    ];
}
