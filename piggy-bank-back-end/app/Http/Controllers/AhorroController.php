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
        $ingresos = DB::table('ingresos')
        ->join('ganancias', 'ingresos.ganancia_id', '=', 'ganancias.id')
        ->join('usuarios', 'ganancias.id_usuario', '=', 'usuarios.id')
        ->where('usuarios.id', '=', JWTAuth::user()->id)
        ->sum('ingresos.cantidad');
        $pagos = DB::table('pagos')
        ->join('gastos', 'pagos.gasto_id', '=', 'gastos.id')
        ->join('usuarios', 'gastos.id_usuario', '=', 'usuarios.id')
        ->where('usuarios.id', '=', JWTAuth::user()->id)
        ->sum('pagos.cantidad');
        $cuenta = $ingresos - $pagos;
        return response()->json(array(
            'data' => round($cuenta, 2)
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

    public function savingsAndExpensesByYear() 
    {
        $pagosAmount = DB::table('pagos')
            ->select(DB::raw('YEAR(fecha) as anno'), DB::raw('sum(cantidad) as total'))
            ->join('gastos', 'pagos.gasto_id', '=', 'gastos.id')
            ->join('tipos_gastos', 'gastos.id_tipo_gasto', '=', 'tipos_gastos.id')
            ->join('usuarios', 'gastos.id_usuario', '=', 'usuarios.id')
            ->where('tipos_gastos.valor', '<>', 'Importantes')
            ->where('usuarios.id', '=', JWTAuth::user()->id)
            ->groupBy(DB::raw('YEAR(fecha)') )
            ->get();
        $ingresosAmount = DB::table('ingresos')
            ->select(DB::raw('YEAR(fecha) as anno'), DB::raw('sum(cantidad) as total'))
            ->join('ganancias', 'ingresos.ganancia_id', '=', 'ganancias.id')
            ->join('usuarios', 'ganancias.id_usuario', '=', 'usuarios.id')
            ->where('usuarios.id', '=', JWTAuth::user()->id)
            ->groupBy(DB::raw('YEAR(fecha)') )
            ->get();
        return response()->json(array(
            'pagos' => $pagosAmount,
            'ingresos' => $ingresosAmount
        ), 200);
    }

}
