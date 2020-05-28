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
use App\Gasto;
use Carbon\Carbon;

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
        ->join('tipos_gastos', 'gastos.id_tipo_gasto', '=', 'tipos_gastos.id')
        ->where('tipos_gastos.valor', 'like', '%' . 'Mensuales' . '%')
        ->where('gastos.id_usuario', '=', JWTAuth::user()->id)
        ->where('gastos.flexible', '!=', 1);;
        $pagosTotales = $pagosTotalesQuery->count();
        $pagosNoPagadosQuery = Pago::select('pagos.*')
        ->join('gastos', 'pagos.gasto_id', '=', 'gastos.id')
        ->join('tipos_gastos', 'gastos.id_tipo_gasto', '=', 'tipos_gastos.id')
        ->where('tipos_gastos.valor', 'like', '%' . 'Mensuales' . '%')
        ->where('gastos.id_usuario', '=', JWTAuth::user()->id)
        ->where('pagos.pagado', '=', 0)
        ->where('gastos.flexible', '!=', 1);
        $pagosPagadosQuery = Pago::select('pagos.*')
        ->join('gastos', 'pagos.gasto_id', '=', 'gastos.id')
        ->join('tipos_gastos', 'gastos.id_tipo_gasto', '=', 'tipos_gastos.id')
        ->where('tipos_gastos.valor', 'like', '%' . 'Mensuales' . '%')
        ->where('gastos.id_usuario', '=', JWTAuth::user()->id)
        ->where('pagos.pagado', '=', 1)
        ->where('gastos.flexible', '!=', 1);;
        $pagosPagados = $pagosPagadosQuery->count();
        return response()->json(array(
            'cuentaGastos' => $ingresos - $pagos,
            'noPagados' => $pagosNoPagadosQuery->get(),
            'porcentajePagados' => round($pagosPagados === 0 ? 0 : ($pagosPagados / $pagosTotales) * 100, 2)
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
            return response()->json(['message' => $validator->errors()], 200);
        }
        $plantillas_bd = Plantilla::where('anno', '=', $request['newAnno'])->where('mes', '=', $request['newMes'])->where('id_usuario', '=', JWTAuth::user()->id)->first();
        if (is_null($plantillas_bd)) {
            $postArray = $request->all();
            $curMonth = date('m');
            if ($postArray['newAnno'] > 2020 || ($postArray['newAnno'] == 2020) && ($postArray['newMes'] - $curMonth) > 1) {
                return response()->json([
                    'message' => 'No es posible crear plantillas posteriores al mes siguiente'
                ], 500);
            }
            $plantilla_copy = Plantilla::where('anno', '=', $request['anno'])
            ->where('mes', '=', $request['mes'])
            ->where('id_usuario', '=', JWTAuth::user()->id)
            ->first();
            if (is_null($plantilla_copy)) {
                return response()->json([
                    'message' => 'La plantilla que debe ser copiada no existe'
                ], 500);
            } else {
                $new_plantilla = new Plantilla();
                $new_plantilla->anno = $request['newAnno'];
                $new_plantilla->mes = $request['newMes'];
                $new_plantilla->id_usuario = $plantilla_copy->id_usuario;
                $new_plantilla->save();

                $date = Carbon::createFromDate($request['newAnno'], $request['newMes'], 1);
    
                foreach ($plantilla_copy->pagos as $pago) {
                    $newPago = $pago->replicate();
                    $gasto = Gasto::find($pago->gasto_id);
                    if (is_null($gasto->fecha_fin) || $gasto->fecha_fin >= $date) {
                        $newPago->id = null;
                        $newPago->plantilla_id = $new_plantilla->id;
                        $newPago->fecha = new DateTime();
                        $newPago->fecha->setDate($new_plantilla->anno, $new_plantilla->mes, 1);
                        $new_plantilla->pagos()->save($newPago);
                    }
                }
    
                foreach ($plantilla_copy->ingresos as $ingreso){
                    $newIngreso = $ingreso->replicate();
                    $newIngreso->id = null;
                    $newIngreso->plantilla_id = $new_plantilla->id;
                    $newIngreso->fecha = new DateTime();
                    $newIngreso->fecha->setDate($new_plantilla->anno, $new_plantilla->mes, 1);
                    $new_plantilla->ingresos()->save($newIngreso);
                }

                $years = DB::table('plantillas')
                ->select('anno')
                ->distinct()
                ->where('id_usuario', '=', JWTAuth::user()->id)
                ->orderBy('anno', 'DESC')
                ->get();
                
                return response()->json([
                    'message' => 'Se ha creado una nueva plantilla',
                    'data' => $new_plantilla,
                    'years' => $years
                ], 200);
            }

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
            ->orderBy('anno', 'DESC')
            ->get();

        return response()->json(array(
            'data' => $plantillas,
            'years' => $years
        ), 200);
    }

    public function show($id) {
        $plantilla = Plantilla::find($id);
        if (!is_null($plantilla) && $plantilla->id_usuario === JWTAuth::user()->id) {
            return response()->json(array(
                'data' => $plantilla->load('pagos')->load('ingresos')
            ), 200);
        } else {
            return response()->json([
                'message' => 'La plantilla no existe'
            ], 500);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'anno' => 'required', 
            'mes' => 'required'
        ]);
        if ($validator->fails()) { 
            return response()->json(['message' => $validator->errors()], 500);
        }
        $postArray = $request->all();
        $curMonth = date('m');
        if ($postArray['anno'] > 2020 || ($postArray['anno'] == 2020) && ($postArray['mes'] - $curMonth) > 1) {
            return response()->json([
                'message' => 'No es posible crear plantillas posteriores al mes siguiente'
            ], 500);
        }
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
            ->orderBy('anno', 'DESC')
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
            $years = DB::table('plantillas')
            ->select('anno')
            ->distinct()
            ->where('id_usuario', '=', JWTAuth::user()->id)
            ->orderBy('anno', 'DESC')
            ->get();
            return response()->json([
                'message' => 'Se ha eliminado la plantilla',
                'years' => $years
            ], 200);
        } else {
            return response()->json([
                'message' => 'La plantilla no existe'
            ], 500);
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
                if ($pago['pagado'] === true || $pago['pagado'] === 1) {
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

            return response()->json(['message' => 'Se ha actualizado la plantilla'], 200);
        } else {
            return response()->json([
                'message' => 'La plantilla no existe'
            ], 500);
        }
    }

}
