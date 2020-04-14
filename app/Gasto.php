<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Gasto extends Model
{
    protected $table = 'gastos';

    public function user() {
        return $this->belongsTo('App\User', 'id');
    }

    public function tipoGasto() {
        return $this->belongsTo('App\TipoGasto', 'id_tipo_gasto');
    }
}
