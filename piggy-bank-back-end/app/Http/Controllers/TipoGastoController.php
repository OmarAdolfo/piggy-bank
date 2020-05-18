<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TipoGasto;
use Validator;
use JWTAuth;

class TipoGastoController extends Controller
{

    public function findAll() {
        $tipos_gasto = TipoGasto::all();
        return response()->json(array(
            'data' => $tipos_gasto
        ), 200);
    }
    
    public function index(Request $request)
    {
        $orderBy = !is_null($request['orderBy']) ? $request['orderBy'] : 'asc';
        $sortable = !is_null($request['sortable']) ? $request['sortable'] : 'id';

        $tipos_gasto = new TipoGasto;

        if ($request->has('valor')) {
            $tipos_gasto = $tipos_gasto
                ->where('valor', $request['valor'])
                ->orWhere('valor', 'like', '%' . $request['valor'] . '%');
        }

        if ($request->has('descripcion')) {
            $tipos_gasto = $tipos_gasto
                ->where('descripcion', $request['descripcion'])
                ->orWhere('descripcion', 'like', '%' . $request['descripcion'] . '%');
        }

        $tipos_gasto = $tipos_gasto
                ->orderBy($sortable, $orderBy)
                ->paginate(10);

        return response()->json(array(
            'data' => $tipos_gasto
        ), 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'valor' => 'required',
            'descripcion' => 'required',
        ]);
        if ($validator->fails()) { 
            return response()->json(['message' => $validator->errors()], 500);
        }
        $postArray = $request->all();
        $tipo_gasto_bd = TipoGasto::where('valor', '=', $postArray['valor'])->first();
        if (is_null($tipo_gasto_bd)) {
            $tipoGasto = new TipoGasto();
            $tipoGasto->valor = $postArray['valor']; 
            $tipoGasto->descripcion = $postArray['descripcion']; 
            $tipoGasto->id_usuario = JWTAuth::user()->id;
            $tipoGasto->save();
            return response()->json([
                'message' => 'Se ha creado un nuevo tipo de gasto',
                'data' => $tipoGasto
            ], 200);
        } else {
            return response()->json([
                'message' => 'El tipo de gasto ya existe'
            ], 500);
        }
    }

    public function update($id, Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'valor' => 'required',
            'descripcion' => 'required',
        ]);
        if ($validator->fails()) { 
            return response()->json(['message' => $validator->errors()], 500);
        }
        $postArray = $request->all();
        $tipo_gasto_bd = TipoGasto::where('id', '=', $id)->first();
        if (!is_null($tipo_gasto_bd)) {
            $tipo_gasto_bd_repeat = TipoGasto::where('valor', '=', $postArray['valor'])->first();
            if (is_null($tipo_gasto_bd_repeat) || $tipo_gasto_bd_repeat->id == $tipo_gasto_bd->id ) {
                $tipo_gasto_bd->valor = $postArray['valor']; 
                $tipo_gasto_bd->descripcion = $postArray['descripcion']; 
                $tipo_gasto_bd->save();
                return response()->json(['message' => 'Se ha actualizado el tipo de gasto'], 200);
            } else {
                return response()->json([
                    'message' => 'El tipo de gasto con ese valor ya existe'
                ], 500);
            }
        } else {
            return response()->json([
                'message' => 'El tipo de gasto no existe'
            ], 500);
        }
    }

    public function destroy($id) {
        $tipo_gasto = TipoGasto::find($id);
        if (!is_null($tipo_gasto)) {
            $tipo_gasto->delete();
            return response()->json(['message' => 'Se ha eliminado el tipo de gasto'], 200);
        } else {
            return response()->json([
                'message' => 'El tipo de gasto no existe'
            ], 500);
        }
    }

    public function show($id) {
        $tipo_gasto = TipoGasto::find($id);
        if (!is_null($tipo_gasto)) {
            return response()->json(array(
                'data' => $tipo_gasto
            ), 200);
        } else {
            return response()->json([
                'message' => 'El tipo de gasto no existe'
            ], 500);
        }
    }

}
