<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TipoGanancia;
use Validator;

class TipoGananciaController extends Controller
{
    public function findAll() {
        $tipos_ganancia = TipoGanancia::all();
        return response()->json(array(
            'tipos_ganancia' => $tipos_ganancia
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

        $tipos_ganancia = $tipos_ganancia
                ->orderBy($sortable, $orderBy)
                ->paginate(10);

        return response()->json(array(
            'tipos_ganancia' => $tipos_ganancia
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
        $tipos_ganancia_bd = TipoGanancia::where('valor', '=', $postArray['valor'])->first();
        if (is_null($tipos_ganancia_bd)) {
            $tipoGanancia = new TipoGanancia();
            $tipoGanancia->valor = $postArray['valor']; 
            $tipoGanancia->save();
            return response()->json([
                'message' => 'Se ha creado un nuevo tipo de ganancia',
                'data' => $tipoGanancia
            ], 200);
        } else {
            return response()->json([
                'error' => 'El tipo de ganancia ya existe'
            ]);
        }
    }

}
