<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Bebida;
use App\Models\Bodega;
use App\Models\Inventario;
use App\Models\Registro;


class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // Llama a los seeders/factories correspondientes
        Bebida::factory(10)->create();
        Bodega::factory(10)->create();
        Inventario::factory(10)->create();
        Registro::factory(10)->create();
    }
}
