<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TipoGanancia;
use Validator;
use JWTAuth;

class TipoGananciaController extends Controller
{
    public function findAll() {
        $tipos_ganancia = TipoGanancia::all();
        return response()->json(array(
            'data' => $tipos_ganancia
        ), 200);
    }
    
    public function index(Request $request)
    {
        $orderBy = !is_null($request['orderBy']) ? $request['orderBy'] : 'asc';
        $sortable = !is_null($request['sortable']) ? $request['sortable'] : 'id';

        $tipos_ganancia = new TipoGanancia;

        if ($request->has('valor')) {
            $tipos_ganancia = $tipos_ganancia
                ->where('valor', $request['valor'])
                ->orWhere('valor', 'like', '%' . $request['valor'] . '%');
        }

        if ($request->has('descripcion')) {
            $tipos_ganancia = $tipos_ganancia
                ->where('descripcion', $request['descripcion'])
                ->orWhere('descripcion', 'like', '%' . $request['descripcion'] . '%');
        }

        $tipos_ganancia = $tipos_ganancia
                ->orderBy($sortable, $orderBy)
                ->paginate(10);

        return response()->json(array(
            'data' => $tipos_ganancia
        ), 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'valor' => 'required',
        ]);
        if ($validator->fails()) { 
            return response()->json(['message '=> $validator->errors()], 500);
        }
        $postArray = $request->all();
        $tipos_ganancia_bd = TipoGanancia::where('valor', '=', $postArray['valor'])->first();
        if (is_null($tipos_ganancia_bd)) {
            $tipoGanancia = new TipoGanancia();
            $tipoGanancia->valor = $postArray['valor']; 
            $tipoGanancia->descripcion = $postArray['descripcion']; 
            $tipoGanancia->id_usuario = JWTAuth::user()->id;
            $tipoGanancia->save();
            return response()->json([
                'message' => 'Se ha creado un nuevo tipo de ganancia',
                'data' => $tipoGanancia
            ], 200);
        } else {
            return response()->json([
                'error' => 'El tipo de ganancia ya existe'
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
        $tipo_ganancia_bd = TipoGanancia::where('id', '=', $id)->first();
        if (!is_null($tipo_ganancia_bd)) {
            $tipo_ganancia_bd_repeat = TipoGanancia::where('valor', '=', $postArray['valor'])->first();
            if (is_null($tipo_ganancia_bd_repeat) || $tipo_ganancia_bd_repeat->id == $tipo_ganancia_bd->id ) {
                $tipo_ganancia_bd->valor = $postArray['valor']; 
                $tipo_ganancia_bd->descripcion = $postArray['descripcion']; 
                $tipo_ganancia_bd->save();
                return response()->json('Se ha actualizado el tipo de ganancia', 200);
            } else {
                return response()->json([
                    'message' => 'El tipo de ganancia con ese valor ya existe'
                ], 500);
            }
        } else {
            return response()->json([
                'message' => 'El tipo de ganancia no existe'
            ], 500);
        }
    }

    public function destroy($id) {
        $tipo_ganancia = TipoGanancia::find($id);
        if (!is_null($tipo_ganancia)) {
            $tipo_ganancia->delete();
            return response()->json(['message' => 'Se ha eliminado el tipo de ganancia'], 200);
        } else {
            return response()->json([
                'message' => 'El tipo de ganancia no existe'
            ], 500);
        }
    }

    public function show($id) {
        $tipo_ganancia = TipoGanancia::find($id);
        if (!is_null($tipo_ganancia) && $tipo_ganancia->id_usuario === JWTAuth::user()->id) {
            return response()->json(array(
                'data' => $tipo_ganancia
            ), 200);
        } else {
            return response()->json([
                'message' => 'El tipo de ganancia no existe'
            ], 500);
        }
    }

}
