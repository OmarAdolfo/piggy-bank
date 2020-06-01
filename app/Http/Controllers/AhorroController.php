<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use JWTAuth;
use App\Gasto;
use DB;
use Carbon\Carbon;

class AhorroController extends Controller
{

    public function cuentaAhorro() 
    {
        $start = new Carbon('last day of last month');
        $ingresosNoMensuales = DB::table('ingresos')
        ->join('ganancias', 'ingresos.ganancia_id', '=', 'ganancias.id')
        ->join('usuarios', 'ganancias.id_usuario', '=', 'usuarios.id')
        ->join('tipos_ganancias', 'ganancias.id_tipo_ganancia', '=', 'tipos_ganancias.id')
        ->where('usuarios.id', '=', JWTAuth::user()->id)
        ->where('tipos_ganancias.valor', 'NOT LIKE', '%' . 'Mensuales' . '%')
        ->sum('ingresos.cantidad');
        $pagosNoMensuales = DB::table('pagos')
        ->join('gastos', 'pagos.gasto_id', '=', 'gastos.id')
        ->join('usuarios', 'gastos.id_usuario', '=', 'usuarios.id')
        ->join('tipos_gastos', 'gastos.id_tipo_gasto', '=', 'tipos_gastos.id')
        ->where('usuarios.id', '=', JWTAuth::user()->id)
        ->where('tipos_gastos.valor', 'NOT LIKE', '%' . 'Mensuales' . '%')
        ->sum('pagos.cantidad');
        $ingresosMensuales = DB::table('ingresos')
        ->join('ganancias', 'ingresos.ganancia_id', '=', 'ganancias.id')
        ->join('usuarios', 'ganancias.id_usuario', '=', 'usuarios.id')
        ->join('tipos_ganancias', 'ganancias.id_tipo_ganancia', '=', 'tipos_ganancias.id')
        ->where('usuarios.id', '=', JWTAuth::user()->id)
        ->where('tipos_ganancias.valor', 'like', '%' . 'Mensuales' . '%')
        ->where('ingresos.fecha', '<=', $start)
        ->sum('ingresos.cantidad');
        $pagosMensuales = DB::table('pagos')
        ->join('gastos', 'pagos.gasto_id', '=', 'gastos.id')
        ->join('usuarios', 'gastos.id_usuario', '=', 'usuarios.id')
        ->join('tipos_gastos', 'gastos.id_tipo_gasto', '=', 'tipos_gastos.id')
        ->where('tipos_gastos.valor', 'like', '%' . 'Mensuales' . '%')
        ->where('usuarios.id', '=', JWTAuth::user()->id)
        ->where('pagos.fecha', '<=', $start)
        ->sum('pagos.cantidad');
        $ingresos = $ingresosNoMensuales + $ingresosMensuales;
        $pagos = $pagosNoMensuales + $pagosMensuales;
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
        ->where('gastos.id_usuario', '=', JWTAuth::user()->id)
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
        $start = new Carbon('last day of last month');
        $pagosAmount = DB::table('pagos')
            ->select(DB::raw('YEAR(fecha) as anno'), DB::raw('sum(cantidad) as total'))
            ->join('gastos', 'pagos.gasto_id', '=', 'gastos.id')
            ->join('tipos_gastos', 'gastos.id_tipo_gasto', '=', 'tipos_gastos.id')
            ->join('usuarios', 'gastos.id_usuario', '=', 'usuarios.id')
            ->where('tipos_gastos.valor', '<>', 'Importantes')
            ->where('usuarios.id', '=', JWTAuth::user()->id)
            ->where('pagos.fecha', '<=', $start)
            ->groupBy(DB::raw('YEAR(fecha)') )
            ->get();
        $ingresosAmount = DB::table('ingresos')
            ->select(DB::raw('YEAR(fecha) as anno'), DB::raw('sum(cantidad) as total'))
            ->join('ganancias', 'ingresos.ganancia_id', '=', 'ganancias.id')
            ->join('usuarios', 'ganancias.id_usuario', '=', 'usuarios.id')
            ->where('usuarios.id', '=', JWTAuth::user()->id)
            ->where('ingresos.fecha', '<=', $start)
            ->groupBy(DB::raw('YEAR(fecha)') )
            ->get();

        foreach ($pagosAmount as &$pago) {
            $pago->total = round($pago->total, 2);
        }
        foreach ($ingresosAmount as &$ingreso) {
            $ingreso->total = round($ingreso->total, 2);
        }
        return response()->json(array(
            'pagos' => $pagosAmount,
            'ingresos' => $ingresosAmount
        ), 200);
    }

}
