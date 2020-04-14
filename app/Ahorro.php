<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ahorro extends Model
{
    protected $table = 'ahorros';

    public function user() {
        return $this->belongsTo('App\User', 'id');
    }

    public function tipoGasto() {
        return $this->belongsTo('App\TipoAhorro', 'id_tipo_ahorro');
    }
}
