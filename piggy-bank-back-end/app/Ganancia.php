<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ganancia extends Model
{
    protected $table = 'ganancias';

    protected $fillable = [
        'nombre'
    ];

    protected $with = ['id_tipo_ganancia'];

    public function user() {
        return $this->belongsTo('App\User', 'id');
    }

    public function id_tipo_ganancia() {
        return $this->belongsTo('App\TipoGanancia', 'id_tipo_ganancia');
    }
    
    public function ingresos() {
        return $this->hasMany('App\Ingreso');
    }

}
