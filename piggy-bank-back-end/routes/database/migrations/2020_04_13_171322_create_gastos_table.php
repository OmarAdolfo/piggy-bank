<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGastosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gastos', function (Blueprint $table) {
            $table->increments('id_gasto');
            $table->string('nombre');
            $table->date('fecha_fin');
            $table->integer('id')->unsigned();
            $table->foreign('id')->references('id')->on('usuarios');   
            $table->integer('id_tipo_gasto')->unsigned();
            $table->foreign('id_tipo_gasto')->references('id_tipo_gasto')->on('tipos_gastos');  
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
        Schema::dropIfExists('gastos');
    }
}
