<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MetaAhorro extends Model
{
    protected $table = 'metas_ahorros';

    public function user() {
        return $this->belongsTo('App\User', 'id');
    }
}
