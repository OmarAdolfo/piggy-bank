<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;

use Validator;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class UserController extends Controller
{
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [ 
            'nombre' => 'required', 
            'apellidos' => 'required',
            'password' => 'required',  
            'email' => 'required|email'
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()]);
        }
        $postArray = $request->all(); 
        $user_bd = User::where('email', '=', $postArray['email'])->first();
        if (is_null($user_bd)) {
            $postArray['password'] = Hash::make($postArray['password']); 
            $postArray['rol'] = 'USER';
            $user = User::create($postArray);
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

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'Credenciales inválidas'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'El token no se ha podio crear'], 500);
        }
        return response()->json(compact('token'), 200);
    }

    public function getAuthenticatedUser()
    {
        try {
            if (! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['token_expired'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['token_invalid'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['token_absent'], $e->getStatusCode());
        }
        return response()->json(compact('user'));
    }
    
}
