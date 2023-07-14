<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Bodega;
use App\Models\Bebida;

class InventarioFactory extends Factory
{

    public function definition()
    {
        return [
            'bodega_id' => $this->faker->randomElement(Bodega::pluck('id')),
            'bebida_id' => $this->faker->randomElement(Bebida::pluck('id')),
            'cantidad' => $this->faker->numberBetween(10, 500),
        ];
    }
}

