<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Plantilla extends Model
{
    protected $table = 'plantillas';

    protected $fillable = ['pagos'];

    public function user() {
        return $this->belongsTo('App\User', 'id');
    }

    public function pagos() {
        return $this->hasMany('App\Pago');
    }

     public function ingresos() {
        return $this->hasMany('App\Ingreso');
    }

}
