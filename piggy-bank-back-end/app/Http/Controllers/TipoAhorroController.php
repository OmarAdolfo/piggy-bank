<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TipoAhorro;
use Validator;

class TipoAhorroController extends Controller
{

    public function index(Request $request)
    {
        $orderBy = !is_null($request['orderBy']) ? $request['orderBy'] : 'asc';
        $sortable = !is_null($request['sortable']) ? $request['sortable'] : 'id';

        $tipos_ahorro = new TipoAhorro;

        if ($request->has('valor')) {
            $tipos_ahorro = $tipos_ahorro
                ->where('valor', $request['valor'])
                ->orWhere('valor', 'like', '%' . $request['valor'] . '%');
        }

        $tipos_ahorro = $tipos_ahorro
                ->orderBy($sortable, $orderBy)
                ->paginate(10);

        return response()->json(array(
            'tipos_ahorro' => $tipos_ahorro
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
        $tipos_ahorro_bd = TipoAhorro::where('valor', '=', $postArray['valor'])->first();
        if (is_null($tipos_ahorro_bd)) {
            $tipoAhorro = new TipoAhorro();
            $tipoAhorro->valor = $postArray['valor']; 
            $tipoAhorro->save();
            return response()->json([
                'message' => 'Se ha creado un nuevo tipo de ahorro',
                'data' => $tipoAhorro
            ], 200);
        } else {
            return response()->json([
                'error' => 'El tipo de ahorro ya existe'
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
        $tipo_ahorro_bd = TipoAhorro::where('id', '=', $id)->first();
        if (!is_null($tipo_ahorro_bd)) {
            $tipo_ahorro_bd_repeat = TipoAhorro::where('valor', '=', $postArray['valor'])->first();
            if (is_null($tipo_ahorro_bd_repeat)) {
                $tipo_ahorro_bd->valor = $postArray['valor']; 
                $tipo_ahorro_bd->save();
                return response()->json('Se ha actualiza el tipo de ahorro', 200);
            } else {
                return response()->json([
                    'error' => 'El tipo de ahorro ya existe'
                ]);
            }
        } else {
            return response()->json([
                'error' => 'El tipo de ahorro no existe'
            ]);
        }
    }

    public function destroy($id) {
        $tipo_ahorro_bd = TipoAhorro::find($id);
        if (!is_null($tipo_ahorro_bd)) {
            $tipo_ahorro_bd->delete();
            return response()->json('Se ha eliminado el tipo de ahorro', 200);
        } else {
            return response()->json([
                'error' => 'El tipo de ahorro no existe'
            ]);
        }
    }
}
