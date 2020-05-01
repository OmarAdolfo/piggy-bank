<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Gasto extends Model
{
    protected $table = 'gastos';

    protected $fillable = [
        'nombre', 'recordar', 'fecha_fin', 'flexible'
    ];

    public function user() {
        return $this->belongsTo('App\User', 'id');
    }

    public function tipoGasto() {
        return $this->belongsTo('App\TipoGasto', 'id_tipo_gasto');
    }

    public function pagos() {
        return $this->hasMany('App\Pago');
    }
}
