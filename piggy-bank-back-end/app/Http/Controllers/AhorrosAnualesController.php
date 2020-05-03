<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\MetaAhorro;
use Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use JWTAuth;
use App\Pago;
use DB;

class AhorrosAnualesController extends Controller
{

    public function savingsAndExpensesByYear() 
    {
        $pagosAmount = DB::table('pagos')
            ->select(DB::raw('YEAR(fecha) as anno'), DB::raw('sum(cantidad) as total'))
            ->join('gastos', 'pagos.gasto_id', '=', 'gastos.id')
            ->join('tipos_gastos', 'gastos.id_tipo_gasto', '=', 'tipos_gastos.id')
            ->where('tipos_gastos.valor', '<>', 'Importantes')
            ->groupBy(DB::raw('YEAR(fecha)') )
            ->get();
        return response()->json(array(
            'pagos' => $pagosAmount
        ), 200);
    }

}
