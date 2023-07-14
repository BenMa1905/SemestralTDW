<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Bodega;
use App\Models\Bebida;

class RegistroFactory extends Factory
{

    public function definition()
    {
        $bodegasIds = Bodega::pluck('id')->toArray();
        $bodegaEnviaId = $this->faker->randomElement($bodegasIds);
        $bodegasRecibeIds = array_diff($bodegasIds, [$bodegaEnviaId]);
        $bodegaRecibeId = $this->faker->randomElement($bodegasRecibeIds);

        return [
            'bodega_envia_id' => $bodegaEnviaId,
            'bodega_recibe_id' => $bodegaRecibeId,
            'cantidad' => $this->faker->numberBetween(1, 100),
            'bebida_id' => Bebida::factory(),
        ];
    }

}