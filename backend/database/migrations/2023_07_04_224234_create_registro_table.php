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
        Schema::create('registro', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('bodega_envia_id');
            $table->unsignedInteger('bodega_recibe_id');
            $table->integer('cantidad');
            $table->unsignedInteger('bebida_id');
            $table->timestamps();

            $table->foreign('bodega_envia_id')->references('id')->on('bodega');
            $table->foreign('bodega_recibe_id')->references('id')->on('bodega');
            $table->foreign('bebida_id')->references('id')->on('bebidas');
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registro');
    }
};