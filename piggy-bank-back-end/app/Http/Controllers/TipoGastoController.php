<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TipoGasto;
use Validator;

class TipoGastoController extends Controller
{

    public function findAll() {
        $tipos_gasto = TipoGasto::all();
        return response()->json(array(
            'tipos_gasto' => $tipos_gasto
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

        $tipos_gasto = $tipos_gasto
                ->orderBy($sortable, $orderBy)
                ->paginate(10);

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
            return response()->json([
                'message' => 'Se ha creado un nuevo tipo de gasto',
                'data' => $tipoGasto
            ], 200);
        } else {
            return response()->json([
                'error' => 'El tipo de gasto ya existe'
            ]);
        }
    }

}
