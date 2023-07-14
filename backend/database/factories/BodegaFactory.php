<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BodegaFactory extends Factory
{

    public function definition()
    {
        return [
            'nombre' => $this->faker->randomElement([
                'Almacén Santa Rita',
                'Bodega Concha y Toro',
                'Almacén Undurraga',
                'Bodega Cousiño Macul',
                'Almacén San Pedro',
                'Bodega Montes',
                'Almacén Errázuriz',
                'Bodega Santa Carolina',
                'Almacén Emiliana',
                'Bodega Casa Silva',
                'Almacén Lapostolle',
                'Bodega De Martino',
                'Almacén Ventisquero',
                'Bodega Morandé',
                'Almacén Odfjell',
                'Bodega Veramonte',
                'Almacén Garcés Silva',
                'Bodega Leyda'
            ]),
            'ubicacion' => $this->faker->randomElement([
                'Concepción',
                'Talcahuano',
                'Chillán',
                'Los Ángeles',
                'Coronel',
                'Tomé',
                'Penco',
                'Hualpén',
                'San Pedro de la Paz',
                'Yumbel',
                'Laja',
                'Santa Bárbara',
                'Lebu',
                'Cañete',
                'Cabrero',
                'Nacimiento',
                'Curanilahue',
                'Quirihue',
                'Bulnes'
            ]),
        ];
    }
}