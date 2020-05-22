<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pago extends Model
{
    protected $table = 'pagos';

    protected $with = ['gasto_id', 'plantilla_id'];

    public function gasto_id() {
        return $this->belongsTo('App\Gasto', 'gasto_id');
    }

    public function plantilla_id() {
        return $this->belongsTo('App\Plantilla', 'plantilla_id');
    }

}
