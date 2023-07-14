<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BebidaFactory extends Factory
{
    public function definition()
    {
        return [
            'nombre' => $this->faker->randomElement([
                'Coca Cola',
                'Pepsi',
                'Fanta',
                'Sprite',
                '7up',
                'Canada Dry',
                'Ginger Ale',
                'Crush',
                'Inca Cola'
            ]),
            'sabor' => $this->faker->randomElement([
                'Cola',
                'Naranja',
                'Ginger Ale',
                'Uva',
                'Piña',
                'Manzana',
                'Tamarindo',
                'Guayaba',
                'Cola Zero',
                'Naranja Zero',
                'Ginger Ale Zero',
                'Uva Zero',
                'Piña Zero',
                'Manzana Zero',
                'Tamarindo Zero',
                'Guayaba Zero',
            ]),
            'presentacion' => $this->faker->randomElement([
                '1.5 lt',
                '2.0 lt',
                '355 ml',
                '600 ml',
                '2.5 lt',
                '3.0 lt',
                '500 ml',
                '1.0 lt',
                '750 ml',
                '330 ml',
                '1.25 lt',
                '16 oz (473 ml)',
                '8 oz (237 ml)',
                '200 ml',
                '24 oz (710 ml)'
            ]),
        ];
    }
}