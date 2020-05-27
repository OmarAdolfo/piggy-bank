<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Ingreso;
use App\Ganancia;
use Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use JWTAuth;

class ingresoController extends Controller
{

    public function show($id) {
        $ingreso = Ingreso::find($id);
        if (!is_null($ingreso)) {
            $ganancia = Ganancia::find($ingreso->ganancia_id);
            if ($ganancia->id_usuario === JWTAuth::user()->id) {
                return response()->json(array(
                    'data' => $ingreso
                ), 200);
            }
        }
        return response()->json([
            'message' => 'El ingreso no existe'
        ], 500);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'cantidad' => 'required', 
            'fecha' => 'required',
            'ganancia_id' => 'required'
        ]);
        if ($validator->fails()) { 
            return response()->json(['message' => 'Validaciones erróneas'], 500);
        }
        $postArray = $request->all();
        $ingreso = new Ingreso();
        $ingreso->cantidad = $postArray['cantidad']; 
        $ingreso->fecha = date('Y-m-d h:i:s', strtotime($postArray['fecha'])); 
        $ingreso->ganancia_id = $postArray['ganancia_id'];
        $ingreso->save();
        return response()->json([
            'message' => 'Se ha creado un nuevo ingreso',
            'data' => $ingreso
        ], 200);
    }

    public function update($id, Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'cantidad' => 'required', 
            'fecha' => 'required'
        ]);
        if ($validator->fails()) { 
            return response()->json(['message' => 'Validaciones erróneas'], 500);
        }
        $postArray = $request->all();
        $ingreso_bd = ingreso::where('id', '=', $id)->first();
        if (!is_null($ingreso_bd)) {
            $ingreso_bd->cantidad = $postArray['cantidad']; 
            $ingreso_bd->fecha = date('Y-m-d h:i:s', strtotime($postArray['fecha'])); 
            $ingreso_bd->save();
            return response()->json(['message' => 'Se ha actualizado el ingreso'], 200);
        } else {
            return response()->json([
                'message' => 'El ingreso no existe'
            ], 500);
        }
    }

    public function destroy($id) {
        $ingreso_bd = ingreso::find($id);
        if (!is_null($ingreso_bd)) {
            $ingreso_bd->delete();
            return response()->json(['message' => 'Se ha eliminado el ingreso'], 200);
        } else {
            return response()->json([
                'message' => 'El ingreso no existe'
            ]);
        }
    }
}
