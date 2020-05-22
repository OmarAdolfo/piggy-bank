<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cobro extends Model
{
    protected $table = 'cobros';

    public function user() {
        return $this->belongsTo('App\Gasto', 'id_gasto');
    }
}
