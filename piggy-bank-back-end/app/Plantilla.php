<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Plantilla extends Model
{
    protected $table = 'plantillas';

    public function user() {
        return $this->belongsTo('App\User', 'id');
    }

}
