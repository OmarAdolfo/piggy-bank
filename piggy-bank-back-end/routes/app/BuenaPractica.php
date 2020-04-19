<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BuenaPractica extends Model
{
    protected $table = 'buenas_practicas';

    public function user() {
        return $this->belongsTo('App\User', 'id');
    }
}
