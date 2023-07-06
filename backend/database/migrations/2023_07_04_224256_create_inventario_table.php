<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('inventario', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('bebida_id');
            $table->integer('cantidad');
            $table->unsignedInteger('bodega_id');
            $table->timestamps();

            $table->foreign('bebida_id')->references('id')->on('bebidas');
            $table->foreign('bodega_id')->references('id')->on('bodega');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inventario');
    }
};