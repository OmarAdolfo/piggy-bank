<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TipoGasto;
use Validator;

class TipoGastoController extends Controller
{

    public function index(Request $request)
    {
        $tipos_gasto = TipoGasto::paginate(10);
        return response()->json(array(
            'tipos_gasto' => $tipos_gasto
        ), 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'valor' => 'required',
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()]);
        }
        $postArray = $request->all();
        $tipo_gasto_bd = TipoGasto::where('valor', '=', $postArray['valor'])->first();
        if (is_null($tipo_gasto_bd)) {
            $tipoGasto = new TipoGasto();
            $tipoGasto->valor = $postArray['valor']; 
            $tipoGasto->save();
            return response()->json('Se ha creado un nuevo tipo de gasto', 200);
        } else {
            return response()->json([
                'error' => 'El tipo de gasto ya existe'
            ]);
        }
    }

    public function update($id, Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'valor' => 'required',
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()]);
        }
        $postArray = $request->all();
        $tipo_gasto_bd = TipoGasto::where('id', '=', $id)->first();
        if (!is_null($tipo_gasto_bd)) {
            $tipo_gasto_bd_repeat = TipoGasto::where('valor', '=', $postArray['valor'])->first();
            if (is_null($tipo_gasto_bd_repeat)) {
                $tipo_gasto_bd->valor = $postArray['valor']; 
                $tipo_gasto_bd->save();
                return response()->json('Se ha actualiza el tipo de gasto', 200);
            } else {
                return response()->json([
                    'error' => 'El tipo de gasto ya existe'
                ]);
            }
        } else {
            return response()->json([
                'error' => 'El tipo de gasto no existe'
            ]);
        }
    }

    public function destroy($id) {
        $tipo_gasto_bd = TipoGasto::find($id);
        if (!is_null($tipo_gasto_bd)) {
            $tipo_gasto_bd->delete();
            return response()->json('Se ha eliminado el tipo de gasto', 200);
        } else {
            return response()->json([
                'error' => 'El tipo de gasto no existe'
            ]);
        }
    }
}
