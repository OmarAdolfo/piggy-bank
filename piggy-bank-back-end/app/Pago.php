<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pago extends Model
{
    protected $table = 'pagos';

    public function user() {
        return $this->belongsTo('App\Gasto', 'id_gasto');
    }
}
