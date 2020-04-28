<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\User;
use App\PasswordReset;

use Validator;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendMail;

class AuthController extends Controller
{
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [ 
            'nombre' => 'required', 
            'apellidos' => 'required',
            'password' => 'required',  
            'email' => 'required|email'
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 500);
        }
        $postArray = $request->all(); 
        $user_bd = User::where('email', '=', $postArray['email'])->first();
        if (is_null($user_bd)) {
            $postArray['password'] = Hash::make($postArray['password']); 
            $postArray['rol'] = 'USER';
            User::create($postArray);
            return response()->json('Se ha registrado correctamente el usuario', 200); 
        } else {
            return response()->json('Usuario duplicado', 500);
        }
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json('Credenciales inválidas', 401);
            }
        } catch (JWTException $e) {
            return response()->json('El token no se ha podio crear', 500);
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

    public function getTokenByEmail(Request $request)
    {
        $user = User::where('email', '=', $request['email'])->first();
        if (!is_null($user)) {
            $tokenData = PasswordReset::where('email', '=', $request['email'])->first();
            if (is_null($tokenData)) {
                $tokenData = PasswordReset::create(
                    [
                        'email' => $request->email,
                        'token' => Str::random(5),
                        'created_at' => Carbon::now()
                    ]
                );
            } else {
                $tokenData['token'] = Str::random(5);
                $tokenData['created_at'] = Carbon::now();
                $tokenData->save();
            }
            Mail::to($request['email'])->send(new SendMail($tokenData->token));
            return response()->json('Se ha enviado el correo', 200);
        } else {
            return response()->json('Usuario con este correo no existe', 500);
        }
    }

    public function resetPassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 500);
        }

        $tokenData = PasswordReset::where('token', '=', $request['token'])->first();
        if (!$tokenData) { 
            return response()->json('El token es inválido', 500);
        }

        $user = User::where('email', '=', $tokenData->email)->first();
        if (!$user) {
            return response()->json('El usuario no existe', 500);
        }

        $user->password = \Hash::make($request->password);
        $user->save();

        PasswordReset::where('email', $user->email)->delete();
        return response()->json('Se ha reseteado la contraseña', 200);
    }
    
}
