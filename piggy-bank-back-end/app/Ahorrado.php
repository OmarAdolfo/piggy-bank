<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ahorrado extends Model
{
    protected $table = 'ahorrado';

    public function user() {
        return $this->belongsTo('App\Ahorro', 'id_tipo_ahorro');
    }
}
