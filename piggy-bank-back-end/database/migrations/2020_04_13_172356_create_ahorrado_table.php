<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAhorradoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ahorrado', function (Blueprint $table) {
            $table->increments('id_ahorrado');
            $table->double('cantidad', 8, 2);
            $table->date('fecha');
            $table->integer('id_ahorro')->unsigned();
            $table->foreign('id_ahorro')->references('id_ahorro')->on('ahorros');  
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
        Schema::dropIfExists('ahorrado');
    }
}
