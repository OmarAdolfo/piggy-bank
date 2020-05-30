<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use JWTAuth;
use App\Plantilla;
use DB;
use App\Pago;
use App\Ingreso;
use App\Gasto;
use Carbon\Carbon;

class EstadisticasController extends Controller
{

    public function getStats() 
    {
        $ingresos = DB::table('ingresos')
        ->join('ganancias', 'ingresos.ganancia_id', '=', 'ganancias.id')
        ->where('ganancias.id_usuario', '=', JWTAuth::user()->id)
        ->sum('ingresos.cantidad');

        $pagos = DB::table('pagos')
        ->join('gastos', 'pagos.gasto_id', '=', 'gastos.id')
        ->where('gastos.id_usuario', '=', JWTAuth::user()->id)
        ->sum('pagos.cantidad');

        $now = new Carbon();        
        $aYearAgo = $now->clone()->subYears(1);

        $curYear = date('Y');
        $pagosByYear = DB::table('pagos')
            ->select(DB::raw('MONTH(fecha) as mes'), DB::raw('sum(cantidad) as total'))
            ->join('gastos', 'pagos.gasto_id', '=', 'gastos.id')
            ->join('usuarios', 'gastos.id_usuario', '=', 'usuarios.id')
            ->whereYear('fecha', $curYear)
            ->where('usuarios.id', '=', JWTAuth::user()->id)
            ->groupBy(DB::raw('MONTH(fecha)') )
            ->get();

        $ingresosByYear = DB::table('ingresos')
            ->select(DB::raw('MONTH(fecha) as mes'), DB::raw('sum(cantidad) as total'))
            ->join('ganancias', 'ingresos.ganancia_id', '=', 'ganancias.id')
            ->join('usuarios', 'ganancias.id_usuario', '=', 'usuarios.id')
            ->whereYear('fecha', $curYear)
            ->where('usuarios.id', '=', JWTAuth::user()->id)
            ->groupBy(DB::raw('MONTH(fecha)') )
            ->get();

        $gastos = DB::table('pagos')
            ->select(DB::raw('gastos.nombre as nombre'), DB::raw('sum(cantidad) as total'))
            ->join('gastos', 'pagos.gasto_id', '=', 'gastos.id')
            ->join('usuarios', 'gastos.id_usuario', '=', 'usuarios.id')
            ->where('usuarios.id', '=', JWTAuth::user()->id)
            ->groupBy(DB::raw('nombre'))
            ->orderByRaw('sum(cantidad) DESC')
            ->take(7)
            ->get();

        foreach ($pagosByYear as &$pagomes) {
            $pagomes->total = round($pagomes->total, 2);
        }

        foreach ($ingresosByYear as &$ingresomes) {
            $ingresomes->total = round($ingresomes->total, 2);
        }

        foreach ($gastos as &$gasto) {
            $gasto->total = round($gasto->total, 2);
        }

        return response()->json(array(
            'pagos' => round($pagos, 2),
            'ingresos' => round($ingresos, 2),
            'pagosmes' => $pagosByYear,
            'ingresosmes' => $ingresosByYear,
            'gastos' => $gastos
        ), 200);
    }

}
