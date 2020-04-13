<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Usuario;

use Validator;

class UsuarioController extends Controller
{
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [ 
            'nombre' => 'required', 
            'apellidos' => 'required',
            'contraseña' => 'required',  
            'email' => 'required|email'
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()]);
        }
        $postArray = $request->all(); 
        $user_bd = Usuario::where('email', '=', $postArray['email'])->first();
        if (is_null($user_bd)) {
            $postArray['contraseña'] = bcrypt($postArray['contraseña']); 
            $postArray['rol'] = 'USER';
            $user = Usuario::create($postArray);
            return response()->json([
                'status' => 'success',
                'data' => $user,
            ]); 
        } else {
            return response()->json([
                'error'=>'Usuario duplicado'
            ]);
        }
    }

}
