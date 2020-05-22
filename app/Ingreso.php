<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ingreso extends Model
{
    protected $table = 'ingresos';

    protected $fillable = [
        'ingreso'
    ];

    protected $with = ['ganancia_id'];

    public function ganancia_id() {
        return $this->belongsTo('App\Ganancia', 'ganancia_id');
    }
}
