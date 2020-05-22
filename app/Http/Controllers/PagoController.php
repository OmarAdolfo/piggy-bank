<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pago;
use Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use JWTAuth;

class PagoController extends Controller
{

    public function show($id) {
        $pago = Pago::find($id);
        if (!is_null($pago) && $pago->id_usuario === JWTAuth::user()->id) {
            return response()->json(array(
                'data' => $pago
            ), 200);
        } else {
            return response()->json([
                'message' => 'El pago no existe'
            ], 500);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'cantidad' => 'required', 
            'fecha' => 'required',
            'gasto_id' => 'required'
        ]);
        if ($validator->fails()) { 
            return response()->json(['message' => 'Validaciones erróneas'], 500);
        }
        $postArray = $request->all();
        $pago = new Pago();
        $pago->cantidad = $postArray['cantidad']; 
        $pago->fecha = date('Y-m-d h:i:s', strtotime($postArray['fecha'])); 
        $pago->gasto_id = $postArray['gasto_id'];
        if ($request->has('pagado')) {
            $pago->pagado = $postArray['pagado'];
        } else {
            $pago->pagado = 1; 
        }
        $pago->save();
        return response()->json([
            'message' => 'Se ha creado un nuevo pago',
            'data' => $pago
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
        $pago_bd = Pago::where('id', '=', $id)->first();
        if (!is_null($pago_bd)) {
            $pago_bd->cantidad = $postArray['cantidad']; 
            $pago_bd->fecha = date('Y-m-d h:i:s', strtotime($postArray['fecha'])); 
            $pago_bd->save();
            return response()->json(['message' => 'Se ha actualizado el pago'], 200);
        } else {
            return response()->json([
                'message' => 'El pago no existe'
            ], 500);
        }
    }

    public function destroy($id) {
        $pago_bd = Pago::find($id);
        if (!is_null($pago_bd)) {
            $pago_bd->delete();
            return response()->json(['message' => 'Se ha eliminado el pago'], 200);
        } else {
            return response()->json([
                'message' => 'El pago no existe'
            ]);
        }
    }
}
