<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ganancia extends Model
{
    protected $table = 'ganancias';

    protected $fillable = [
        'nombre'
    ];

    public function user() {
        return $this->belongsTo('App\User', 'id');
    }

    public function tipoGanancia() {
        return $this->belongsTo('App\TipoGanancia', 'id_tipo_ganancia');
    }
    
    public function ingresos() {
        return $this->hasMany('App\Ingreso');
    }

}
