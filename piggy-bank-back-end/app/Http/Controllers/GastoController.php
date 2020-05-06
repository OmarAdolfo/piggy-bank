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
                ->paginate(10);

        return response()->json(array(
            'data' => $gastos->load('idTipoGasto')
        ), 200);
    }

    public function show($id) {
        $gasto = Gasto::find($id);
        return response()->json(array(
            'data' => $gasto->load('idTipoGasto')->load('pagos')
        ), 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'nombre' => 'required', 
            'tipo_gasto' => 'required',
            'flexible' => 'required',
            'recordar' => 'required'
        ]);
        if ($validator->fails()) { 
            return response()->json(['message' => 'Validaciones erróneas'], 500);
        }
        $postArray = $request->all();
        $gastos_bd = Gasto::where('nombre', '=', $postArray['nombre'])->first();
        if (is_null($gastos_bd)) {
            $gasto = new Gasto();
            $gasto->nombre = $postArray['nombre']; 
            $gasto->id_tipo_gasto = $postArray['tipo_gasto']['id']; 
            $gasto->id_usuario = JWTAuth::user()->id; 
            $gasto->flexible = $postArray['flexible']; 
            $gasto->recordar = $postArray['recordar']; 
            if ($request->has('fecha_fin')) {
                $gasto->fecha_fin = $postArray['fecha_fin']; 
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
            'tipo_gasto' => 'required',
            'flexible' => 'required',
            'recordar' => 'required'
        ]);
        if ($validator->fails()) { 
            return response()->json(['message' => 'Validaciones erróneas'], 500);
        }
        $postArray = $request->all();
        $gasto_bd = Gasto::where('id', '=', $id)->first();
        if (!is_null($gasto_bd)) {
            $gasto_bd_repeat = Gasto::where('nombre', '=', $postArray['nombre'])->first();
            if (is_null($gasto_bd_repeat) || $gasto_bd_repeat->id == $gasto_bd->id ) {
                $gasto_bd->nombre = $postArray['nombre'];
                $gasto_bd->id_tipo_gasto = $postArray['tipo_gasto']['id']; 
                $gasto_bd->flexible = $postArray['flexible']; 
                $gasto_bd->recordar = $postArray['recordar']; 
                $gasto_bd->save();
                return response()->json('Se ha actualizado el gasto', 200);
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
            return response()->json('Se ha eliminado el gasto', 200);
        } else {
            return response()->json([
                'error' => 'El gasto no existe'
            ]);
        }
    }
}
