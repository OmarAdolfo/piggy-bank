<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendMailNewUser;

class UserController extends Controller
{

    public function index(Request $request)
    {
        $orderBy = !is_null($request['orderBy']) ? $request['orderBy'] : 'asc';
        $sortable = !is_null($request['sortable']) ? $request['sortable'] : 'id';

        $users = new User;

        if ($request->has('nombre')) {
            $users = $users
                ->where('nombre', $request['nombre'])
                ->orWhere('nombre', 'like', '%' . $request['nombre'] . '%');
        }

        if ($request->has('apellidos')) {
            $users = $users
                ->where('apellidos', $request['apellidos'])
                ->orWhere('apellidos', 'like', '%' . $request['apellidos'] . '%');
        }

        if ($request->has('email')) {
            $users = $users
                ->where('email', $request['email'])
                ->orWhere('email', 'like', '%' . $request['email'] . '%');
        }

        if ($request->has('rol')) {
            $users = $users
                ->where('rol', $request['rol'])
                ->orWhere('rol', 'like', '%' . $request['rol'] . '%');
        }

        $users = $users
                ->orderBy($sortable, $orderBy)
                ->paginate(10);

        return response()->json(array(
            'data' => $users
        ), 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'nombre' => 'required', 
            'apellidos' => 'required',
            'rol' => 'required',
            'email' => 'required|email'
        ]);
        if ($validator->fails()) { 
            return response()->json(['message'=>$validator->errors()], 500);
        }
        $postArray = $request->all();
        $users_bd = User::where('email', '=', $postArray['email'])->first();
        if (is_null($users_bd)) {
            $user = new User();
            $user->nombre = $postArray['nombre']; 
            $user->apellidos = $postArray['apellidos']; 
            $user->email = $postArray['email']; 
            $user->rol = $postArray['rol'];
            $password = Str::random(10);
            $user->password = Hash::make($password); 
            $user->save();
            Mail::to($request['email'])->send(new SendMailNewUser($password));
            return response()->json([
                'message' => 'Se ha creado un nuevo usuario',
                'data' => $user
            ], 200);
        } else {
            return response()->json([
                'message' => 'El usuario ya existe'
            ], 500);
        }
    }

    public function update($id, Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'nombre' => 'required', 
            'apellidos' => 'required',
            'rol' => 'required',
            'email' => 'required|email'
        ]);
        if ($validator->fails()) { 
            return response()->json(['message'=>$validator->errors()], 500);
        }
        $postArray = $request->all();
        $user_bd = User::where('id', '=', $id)->first();
        if (!is_null($user_bd)) {
            $user_bd_repeat = User::where('email', '=', $postArray['email'])->first();
            if (is_null($user_bd_repeat) || $user_bd_repeat->id == $user_bd->id ) {
                $user_bd->nombre = $postArray['nombre']; 
                $user_bd->apellidos = $postArray['apellidos']; 
                $user_bd->email = $postArray['email']; 
                $user_bd->rol = $postArray['rol'];
                $user_bd->save();
                return response()->json('Se ha actualizado el usuario', 200);
            } else {
                return response()->json([
                    'message' => 'El usuario con ese email ya existe'
                ], 500);
            }
        } else {
            return response()->json([
                'message' => 'El usuario no existe'
            ], 500);
        }
    }

    public function destroy($id) {
        $user_bd = User::find($id);
        if (!is_null($user_bd)) {
            $user_bd->delete();
            return response()->json('Se ha eliminado el usuario', 200);
        } else {
            return response()->json([
                'message' => 'El usuario no existe'
            ], 500);
        }
    }

    public function show($id) {
        $user = User::find($id);
        return response()->json(array(
            'data' => $user
        ), 200);
    }
}
