<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use JWTAuth;
use App\Gasto;
use DB;

class AhorroController extends Controller
{

    public function cuentaAhorro() 
    {
        $pagos = DB::table('pagos')
        ->join('gastos', 'pagos.gasto_id', '=', 'gastos.id')
        ->join('usuarios', 'gastos.id_usuario', '=', 'usuarios.id')
        ->where('usuarios.id', '=', JWTAuth::user()->id)
        ->sum('pagos.cantidad');
        $cuenta = - $pagos;
        return response()->json(array(
            'data' => $cuenta
        ), 200);
    }

    public function recordatoriosAnuales() 
    {
        $curYear = date('Y');
        $curMonth = date('m');
        $pagos = DB::table('pagos')
        ->join('gastos', 'pagos.gasto_id', '=', 'gastos.id')
        ->join('tipos_gastos', 'gastos.id_tipo_gasto', '=', 'tipos_gastos.id')
        ->where('tipos_gastos.valor', '=', 'Anuales')
        ->whereYear('fecha', $curYear - 1)
        ->whereMonth('fecha', $curMonth)
        ->orWhere('fecha', $curMonth + 1)
        ->get();
        return response()->json(array(
            'data' => $pagos
        ), 200);
    }

}
