<?php

namespace App\Http\Middleware;

use Closure;
use JWTAuth;
use Exception;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;

class JwtMiddleware extends BaseMiddleware
{

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, ...$roles)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
        } catch (Exception $e) {
            return response()->json(['message' => 'Usuario no autenticado'], 401);
        }

        if ($user && in_array($user->rol, $roles)) {
            return $next($request);
        }
    
        return response()->json([
            'message' => 'No tienes permisos suficientes para acceder a este recurso',
            'success' => false
        ], 403);
    }

}