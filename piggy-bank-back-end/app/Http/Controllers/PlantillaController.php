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

class PlantillaController extends Controller
{

    public function getTemplateMonthActual() 
    {
        $curYear = date('Y');
        $curMonth = date('m');
        $ingresos = DB::table('plantillas')
        ->join('ingresos', 'ingresos.plantilla_id', '=', 'plantillas.id')
        ->where('plantillas.id_usuario', '=', JWTAuth::user()->id)
        ->where('plantillas.anno', '=', $curYear)
        ->where('plantillas.mes', '=', $curMonth)
        ->sum('ingresos.cantidad');
        $pagos = DB::table('plantillas')
        ->join('pagos', 'pagos.plantilla_id', '=', 'plantillas.id')
        ->where('plantillas.id_usuario', '=', JWTAuth::user()->id)
        ->where('plantillas.anno', '=', $curYear)
        ->where('plantillas.mes', '=', $curMonth)
        ->sum('pagos.cantidad');
        $pagosTotalesQuery = Pago::select('pagos.*')
        ->join('gastos', 'pagos.gasto_id', '=', 'gastos.id')
        ->where('gastos.id_usuario', '=', JWTAuth::user()->id);
        $pagosTotales = $pagosTotalesQuery->count();
        $pagosNoPagadosQuery = Pago::select('pagos.*')
        ->join('gastos', 'pagos.gasto_id', '=', 'gastos.id')
        ->where('gastos.id_usuario', '=', JWTAuth::user()->id)
        ->where('pagos.pagado', '=', 0);
        $pagosNoPagados = $pagosNoPagadosQuery->count();
        return response()->json(array(
            'cuentaGastos' => $ingresos - $pagos,
            'noPagados' => $pagosNoPagadosQuery->get(),
            'porcentajePagados' => $pagosNoPagados === 0 ? 0 : ($pagosNoPagados / $pagosTotales) * 100
        ), 200);
    }

    public function index(Request $request)
    {
        $plantillas = Plantilla::all();
        $years = DB::table('plantillas')
            ->select('anno')
            ->distinct()
            ->orderBy('anno', 'ASC')
            ->get();

        return response()->json(array(
            'data' => $plantillas,
            'years' => $years
        ), 200);
    }

    public function show($id) {
        $plantilla = Plantilla::find($id);
        return response()->json(array(
            'data' => $plantilla->load('pagos')->load('ingresos')
        ), 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'anno' => 'required', 
            'mes' => 'required'
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()]);
        }
        $postArray = $request->all();
        $plantillas_bd = Plantilla::where('anno', '=', $postArray['anno'])->where('mes', '=', $postArray['mes'])->first();
        if (is_null($plantillas_bd)) {
            $plantilla = new Plantilla();
            $plantilla->anno = $postArray['anno'];
            $plantilla->mes = $postArray['mes'];
            $plantilla->id_usuario = JWTAuth::user()->id;
            $plantilla->save();
            $years = DB::table('plantillas')
            ->select('anno')
            ->distinct()
            ->get();
            return response()->json([
                'message' => 'Se ha creado una nueva plantilla',
                'data' => $plantilla,
                'years' => $years
            ], 200);
        } else {
            return response()->json([
                'message' => 'La plantilla ya existe'
            ], 500);
        }
    }

    public function destroy($id) {
        $plantilla_bd = Plantilla::find($id);
        if (!is_null($plantilla_bd)) {
            $plantilla_bd->delete();
            return response()->json(['message' => 'Se ha eliminado la plantilla'], 200);
        } else {
            return response()->json([
                'error' => 'La plantilla no existe'
            ]);
        }
    }

    public function update($id, Request $request)
    {
        $plantilla_bd = Plantilla::where('id', '=', $id)->first();
        if (!is_null($plantilla_bd)) {

            Pago::where('plantilla_id', $plantilla_bd->id)->delete();
            foreach ($request->pagos as $pago) {
                $pagobd = new Pago();
                $pagobd->cantidad = $pago['cantidad'];
                $pagobd->gasto_id = $pago['gasto_id']['id'];
                if ($pago['pagado'] === true) {
                    $pagobd->pagado = 1;
                } else {
                    $pagobd->pagado = 0;
                }
                $plantilla_bd->pagos()->save($pagobd); 
            }

            Ingreso::where('plantilla_id', $plantilla_bd->id)->delete();
            foreach ($request->ingresos as $ingreso) {
                $ingresobd = new Ingreso();
                $ingresobd->cantidad = $ingreso['cantidad'];
                $ingresobd->ganancia_id = $ingreso['ganancia_id']['id'];
                $plantilla_bd->ingresos()->save($ingresobd);       
            }

            return response()->json('Se ha actualizado la plantilla', 200);
        } else {
            return response()->json([
                'error' => 'La plantilla no existe'
            ], 500);
        }
    }

}
