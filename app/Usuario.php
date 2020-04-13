<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table = 'usuarios';
    protected $fillable = ['id_usuario', 'nombre', 'apellidos', 'email', 'contraseña', 'rol'];
}
