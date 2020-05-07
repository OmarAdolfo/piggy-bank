<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BuenaPractica extends Model
{
    protected $table = 'buenas_practicas';

    protected $with = ['id_usuario'];

    public function id_usuario() {
        return $this->belongsTo('App\User', 'id_usuario');
    }
}
