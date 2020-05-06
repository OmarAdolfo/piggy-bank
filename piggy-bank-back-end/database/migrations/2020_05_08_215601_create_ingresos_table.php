<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIngresosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ingresos', function (Blueprint $table) {
            $table->increments('id');
            $table->double('cantidad', 8, 2);
            $table->date('fecha')->nullable();
            $table->integer('ganancia_id')->unsigned();
            $table->foreign('ganancia_id')->references('id')->on('ganancias');  
            $table->integer('plantilla_id')->unsigned();
            $table->foreign('plantilla_id')->references('id')->on('plantillas');  
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
        Schema::dropIfExists('ingresos');
    }
}
