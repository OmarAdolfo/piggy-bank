<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBuenasPracticasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('buenas_practicas', function (Blueprint $table) {
            $table->increments('id_buena_practica');
            $table->string('palabras_clave');
            $table->integer('porcentaje');
            $table->integer('id')->unsigned();
            $table->foreign('id')->references('id')->on('usuarios');    
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('buenas_practicas');
    }
}
