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
use DateTime;

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
            'porcentajePagados' => round($pagosNoPagados === 0 ? 0 : ($pagosNoPagados / $pagosTotales) * 100, 2)
        ), 200);
    }

    public function clone(Request $request) {
        $validator = Validator::make($request->all(), [ 
            'anno' => 'required', 
            'mes' => 'required',
            'newAnno' => 'required', 
            'newMes' => 'required', 
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()]);
        }
        $plantillas_bd = Plantilla::where('anno', '=', $request['newAnno'])->where('mes', '=', $request['newMes'])->where('id_usuario', '=', JWTAuth::user()->id)->first();
        if (is_null($plantillas_bd)) {
            $plantilla_copy = Plantilla::where('anno', '=', $request['anno'])->where('mes', '=', $request['mes'])->first();
            $new_plantilla = new Plantilla();
            $new_plantilla->anno = $request['newAnno'];
            $new_plantilla->mes = $request['newMes'];
            $new_plantilla->id_usuario = $plantilla_copy->id_usuario;
            $new_plantilla->save();

            foreach ($plantilla_copy->pagos as $pago){
                $newPago = $pago->replicate();
                $newPago->id = null;
                $newPago->plantilla_id = $new_plantilla->id;
                $newPago->fecha = new DateTime();
                $newPago->fecha->setDate($plantilla_bd->anno, $plantilla_bd->mes, 1);
                $new_plantilla->pagos()->save($newPago);
            }

            foreach ($plantilla_copy->ingresos as $ingreso){
                $newIngreso = $ingreso->replicate();
                $newIngreso->id = null;
                $newIngreso->plantilla_id = $new_plantilla->id;
                $newIngreso->fecha = new DateTime();
                $newIngreso->fecha->setDate($plantilla_bd->anno, $plantilla_bd->mes, 1);
                $new_plantilla->ingresos()->save($newIngreso);
            }

            $years = DB::table('plantillas')
            ->select('anno')
            ->distinct()
            ->where('id_usuario', '=', JWTAuth::user()->id)
            ->get();
            
            return response()->json([
                'message' => 'Se ha creado una nueva plantilla',
                'data' => $new_plantilla
            ], 200);
        } else {
            return response()->json([
                'message' => 'La plantilla ya existe'
            ], 500);
        }
    }

    public function index(Request $request)
    {
        $plantillas = Plantilla::where('id_usuario', '=', JWTAuth::user()->id)->get();
        $years = DB::table('plantillas')
            ->select('anno')
            ->distinct()
            ->where('id_usuario', '=', JWTAuth::user()->id)
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
        $plantillas_bd = Plantilla::where('anno', '=', $postArray['anno'])->where('mes', '=', $postArray['mes'])->where('id_usuario', '=', JWTAuth::user()->id)->first();
        if (is_null($plantillas_bd)) {
            $plantilla = new Plantilla();
            $plantilla->anno = $postArray['anno'];
            $plantilla->mes = $postArray['mes'];
            $plantilla->id_usuario = JWTAuth::user()->id;
            $plantilla->save();
            $years = DB::table('plantillas')
            ->select('anno')
            ->distinct()
            ->where('id_usuario', '=', JWTAuth::user()->id)
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
                $pagobd->fecha = new DateTime();
                $pagobd->fecha->setDate($plantilla_bd->anno, $plantilla_bd->mes, 1);
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
                $ingresobd->fecha = new DateTime();
                $ingresobd->fecha->setDate($plantilla_bd->anno, $plantilla_bd->mes, 1);
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
