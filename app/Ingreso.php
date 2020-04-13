<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ingreso extends Model
{
    protected $table = 'ingresos';

    public function user() {
        return $this->belongsTo('App\User', 'id_usuario');
    }
}
