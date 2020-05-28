<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Gasto;
use App\Plantilla;
use Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use JWTAuth;
use DB;
use Carbon\Carbon;

class GastoController extends Controller
{

    public function findAllPrimaryMonthlyExpenses($id) {
        $plantilla = Plantilla::find($id);
        if (!is_null($plantilla) && $plantilla->id_usuario === JWTAuth::user()->id) {
            $gastos_primarios = Gasto::select('gastos.*')
            ->join('tipos_gastos', 'gastos.id_tipo_gasto', '=', 'tipos_gastos.id')
            ->join('usuarios', 'gastos.id_usuario', '=', 'usuarios.id')
            ->where('usuarios.id', '=', JWTAuth::user()->id)
            ->where('tipos_gastos.valor', '=', 'Mensuales Primarios')
            ->where(static function ($query) use ($plantilla) {
                $date = Carbon::createFromDate($plantilla->year, $plantilla->month, 1);
                $query->where('gastos.fecha_fin', '>=', $date)
                ->orWhere('gastos.fecha_fin', '=', null);
            })
            ->get();
            return response()->json(array(
                'data' => $gastos_primarios
            ), 200);
        } else {
            return response()->json([
                'message' => 'La plantilla no existe'
            ], 500);
        }
    }

    public function findAllSecondaryMonthlyExpenses($id) {
        $plantilla = Plantilla::find($id);
        if (!is_null($plantilla) && $plantilla->id_usuario === JWTAuth::user()->id) {
            $gastos_secundarios = Gasto::select('gastos.*')
            ->join('tipos_gastos', 'gastos.id_tipo_gasto', '=', 'tipos_gastos.id')
            ->join('usuarios', 'gastos.id_usuario', '=', 'usuarios.id')
            ->where('usuarios.id', '=', JWTAuth::user()->id)
            ->where('tipos_gastos.valor', '=', 'Mensuales Secundarios')
            ->where(static function ($query) use ($plantilla) {
                $date = Carbon::createFromDate($plantilla->year, $plantilla->month, 1);
                $query->where('gastos.fecha_fin', '>=', $date)
                ->orWhere('gastos.fecha_fin', '=', null);
            })
            ->get();
            return response()->json(array(
                'data' => $gastos_secundarios
            ), 200);
        } else {
            return response()->json([
                'message' => 'La plantilla no existe'
            ], 500);
        }
    }

    public function index(Request $request)
    {
        $orderBy = !is_null($request['orderBy']) ? $request['orderBy'] : 'asc';
        $sortable = !is_null($request['sortable']) ? $request['sortable'] : 'id';

        $gastos = new Gasto;

        if ($request->has('nombre')) {
            $gastos = $gastos
                ->where('id_usuario', '=', JWTAuth::user()->id)
                ->where('nombre', $request['nombre'])
                ->orWhere('nombre', 'like', '%' . $request['nombre'] . '%');
        }

        if ($request->has('tipo_gasto')) {
            $gastos = $gastos
                ->where('id_usuario', '=', JWTAuth::user()->id)
                ->where('id_tipo_gasto', $request['tipo_gasto'])
                ->orWhere('id_tipo_gasto', 'like', '%' . $request['tipo_gasto'] . '%');
        }

        $gastos = $gastos
                ->orderBy($sortable, $orderBy)
                ->where('id_usuario', '=', JWTAuth::user()->id)
                ->paginate(10);

        return response()->json(array(
            'data' => $gastos
        ), 200);
    }

    public function show($id) {
        $gasto = Gasto::find($id);
        if (!is_null($gasto) && $gasto->id_usuario === JWTAuth::user()->id) {
            return response()->json(array(
                'data' => $gasto->load('pagos')
            ), 200);
        } else {
            return response()->json([
                'message' => 'El gasto no existe'
            ], 500);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'nombre' => 'required', 
            'id_tipo_gasto' => 'required',
        ]);
        if ($validator->fails()) { 
            return response()->json(['message' => 'Validaciones erróneas'], 500);
        }
        $postArray = $request->all();
        $gastos_bd = Gasto::where('nombre', '=', $postArray['nombre'])
            ->where('id_tipo_gasto', '=', $postArray['id_tipo_gasto']['id'])
            ->where('id_usuario', '=', JWTAuth::user()->id)
            ->first();
        if (is_null($gastos_bd)) {
            $gasto = new Gasto();
            $gasto->nombre = $postArray['nombre']; 
            $gasto->id_tipo_gasto = $postArray['id_tipo_gasto']['id']; 
            $gasto->id_usuario = JWTAuth::user()->id; 
            if (!is_null($postArray['fecha_fin'])) {
                $gasto->fecha_fin = date('Y-m-d h:i:s', strtotime($postArray['fecha_fin']));
            } else {
                $gasto->fecha_fin = null;
            }
            if ($request->has('flexible')) {
                $gasto->flexible = $postArray['flexible']; 
            } else {
                $gasto->flexible = 0; 
            }
            $gasto->save();
            return response()->json([
                'message' => 'Se ha creado un nuevo gasto',
                'data' => $gasto->load('id_tipo_gasto')
            ], 200);
        } else {
            return response()->json([
                'message' => 'El gasto con ese nombre ya existe'
            ], 500);
        }
    }

    public function update($id, Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'nombre' => 'required', 
            'id_tipo_gasto' => 'required',
        ]);
        if ($validator->fails()) { 
            return response()->json(['message' => 'Validaciones erróneas'], 500);
        }
        $postArray = $request->all();
        $gasto_bd = Gasto::where('id', '=', $id)->first();
        if (!is_null($gasto_bd)) {
            $gasto_bd_repeat = Gasto::where('nombre', '=', $postArray['nombre'])
            ->where('id_usuario', '=', JWTAuth::user()->id)
            ->where('id_tipo_gasto', '=', $postArray['id_tipo_gasto']['id'])
            ->first();
            if (is_null($gasto_bd_repeat) || $gasto_bd_repeat->id == $gasto_bd->id ) {
                $gasto_bd->nombre = $postArray['nombre'];
                $gasto_bd->id_tipo_gasto = $postArray['id_tipo_gasto']['id']; 
                if (!is_null($postArray['fecha_fin'])) {
                    $gasto_bd->fecha_fin = date('Y-m-d h:i:s', strtotime($postArray['fecha_fin']));
                } else {
                    $gasto_bd->fecha_fin = null;
                }
                if ($request->has('flexible')) {
                    $gasto_bd->flexible = $postArray['flexible']; 
                } else {
                    $gasto_bd->flexible = 0; 
                }
                $gasto_bd->save();
                return response()->json([
                    'message' => 'Se ha actualizado el gasto',
                    'data' => $gasto_bd
                ], 200);
            } else {
                return response()->json([
                    'error' => 'El gasto ya existe'
                ], 500);
            }
        } else {
            return response()->json([
                'error' => 'El gasto no existe'
            ], 500);
        }
    }

    public function destroy($id) {
        $gasto_bd = Gasto::find($id);
        if (!is_null($gasto_bd)) {
            $gasto_bd->delete();
            return response()->json(['message' => 'Se ha eliminado el gasto'], 200);
        } else {
            return response()->json([
                'error' => 'El gasto no existe'
            ], 500);
        }
    }
}
