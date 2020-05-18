<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Gasto;
use Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use JWTAuth;
use DB;

class GastoController extends Controller
{

    public function findAllPrimaryMonthlyExpenses() {
        $gastos_primarios = Gasto::select('gastos.*')
        ->join('tipos_gastos', 'gastos.id_tipo_gasto', '=', 'tipos_gastos.id')
        ->join('usuarios', 'gastos.id_usuario', '=', 'usuarios.id')
        ->where('usuarios.id', '=', JWTAuth::user()->id)
        ->where('tipos_gastos.valor', '=', 'Mensuales Primarios')
        ->where(static function ($query) {
            $now = date('Y-m-d');
            $query->where('gastos.fecha_fin', '>=', $now)
            ->orWhere('gastos.fecha_fin', '=', null);
        })
        ->get();
        return response()->json(array(
            'data' => $gastos_primarios
        ), 200);
    }

    public function findAllSecondaryMonthlyExpenses() {
        $gastos_secundarios = Gasto::select('gastos.*')
        ->join('tipos_gastos', 'gastos.id_tipo_gasto', '=', 'tipos_gastos.id')
        ->join('usuarios', 'gastos.id_usuario', '=', 'usuarios.id')
        ->where('usuarios.id', '=', JWTAuth::user()->id)
        ->where('tipos_gastos.valor', '=', 'Mensuales Secundarios')
        ->where(static function ($query) {
            $now = date('Y-m-d');
            $query->where('gastos.fecha_fin', '>=', $now)
            ->orWhere('gastos.fecha_fin', '=', null);
        })
        ->get();
        return response()->json(array(
            'data' => $gastos_secundarios
        ), 200);
    }

    public function index(Request $request)
    {
        $orderBy = !is_null($request['orderBy']) ? $request['orderBy'] : 'asc';
        $sortable = !is_null($request['sortable']) ? $request['sortable'] : 'id';

        $gastos = new Gasto;

        if ($request->has('nombre')) {
            $gastos = $gastos
                ->where('nombre', $request['nombre'])
                ->orWhere('nombre', 'like', '%' . $request['nombre'] . '%');
        }

        if ($request->has('tipo_gasto')) {
            $gastos = $gastos
                ->where('id_tipo_gasto', $request['tipo_gasto'])
                ->orWhere('id_tipo_gasto', 'like', '%' . $request['tipo_gasto'] . '%');
        }

        $gastos = $gastos
                ->orderBy($sortable, $orderBy)
                ->where('id_usuario', '=', JWTAuth::user()->id)
                ->with('id_tipo_gasto')
                ->paginate(10);

        return response()->json(array(
            'data' => $gastos
        ), 200);
    }

    public function show($id) {
        $gasto = Gasto::find($id);
        if (!is_null($gasto)) {
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
        $gastos_bd = Gasto::where('nombre', '=', $postArray['nombre'])->where('id_usuario', '=', JWTAuth::user()->id)->first();
        if (is_null($gastos_bd)) {
            $gasto = new Gasto();
            $gasto->nombre = $postArray['nombre']; 
            $gasto->id_tipo_gasto = $postArray['id_tipo_gasto']['id']; 
            $gasto->id_usuario = JWTAuth::user()->id; 
            if ($request->has('fechaFin')) {
                $gasto->fecha_fin = date('Y-m-d h:i:s', strtotime($postArray['fechaFin']));
            }
            if ($request->has('flexible')) {
                $gasto->flexible = $postArray['flexible']; 
            } else {
                $gasto->flexible = 0; 
            }
            $gasto->save();
            return response()->json([
                'message' => 'Se ha creado un nuevo gasto',
                'data' => $gasto
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
            $gasto_bd_repeat = Gasto::where('nombre', '=', $postArray['nombre'])->where('id_usuario', '=', JWTAuth::user()->id)->first();
            if (is_null($gasto_bd_repeat) || $gasto_bd_repeat->id == $gasto_bd->id ) {
                $gasto_bd->nombre = $postArray['nombre'];
                $gasto_bd->id_tipo_gasto = $postArray['id_tipo_gasto']['id']; 
                if ($request->has('fechaFin')) {
                    $gasto_bd->fecha_fin = date('Y-m-d h:i:s', strtotime($postArray['fechaFin']));
                }
                if ($request->has('flexible')) {
                    $gasto_bd->flexible = $postArray['flexible']; 
                } else {
                    $gasto_bd->flexible = false; 
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
