<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\MetaAhorro;
use Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use JWTAuth;
use App\Pago;

class MetaAhorroController extends Controller
{

    public function index(Request $request)
    {
        $orderBy = !is_null($request['orderBy']) ? $request['orderBy'] : 'asc';
        $sortable = !is_null($request['sortable']) ? $request['sortable'] : 'id';

        $metas_ahorros = new MetaAhorro;

        if ($request->has('anno')) {
            $metas_ahorros = $metas_ahorros
                ->where('anno', $request['anno'])
                ->orWhere('anno', 'like', '%' . $request['anno'] . '%');
        }

        $metas_ahorros = $metas_ahorros
                ->orderBy($sortable, $orderBy)
                ->paginate(10);

        return response()->json(array(
            'data' => $metas_ahorros
        ), 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'anno' => 'required', 
            'cantidad' => 'required'
        ]);
        if ($validator->fails()) { 
            return response()->json(['message' => 'Validaciones erróneas'], 500);
        }
        $postArray = $request->all();
        $metas_ahorro_bd = MetaAhorro::where('anno', '=', $postArray['anno'])->first();
        if (is_null($metas_ahorro_bd)) {
            $meta_ahorro = new MetaAhorro();
            $meta_ahorro->anno = $postArray['anno']; 
            $meta_ahorro->cantidad = $postArray['cantidad'];
            $meta_ahorro->id_usuario = JWTAuth::user()->id; 
            $meta_ahorro->save();
            return response()->json([
                'message' => 'Se ha creado una nueva meta de ahorro',
                'data' => $meta_ahorro
            ], 200);
        } else {
            return response()->json([
                'message' => 'La meta de ahorro con ese año ya existe'
            ], 500);
        }
    }

    public function destroy($id) {
        $meta_ahorro_bd = MetaAhorro::find($id);
        if (!is_null($meta_ahorro_bd)) {
            $meta_ahorro_bd->delete();
            return response()->json('Se ha eliminado la meta de ahorro', 200);
        } else {
            return response()->json([
                'error' => 'La meta de ahorro no existe'
            ]);
        }
    }

    public function update($id, Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'anno' => 'required', 
            'cantidad' => 'required'
        ]);
        if ($validator->fails()) { 
            return response()->json(['message' => 'Validaciones erróneas'], 500);
        }
        $postArray = $request->all();
        $meta_ahorro_bd = MetaAhorro::where('id', '=', $id)->first();
        if (!is_null($meta_ahorro_bd)) {
            $meta_ahorro_bd_repeat = MetaAhorro::where('anno', '=', $postArray['anno'])->first();
            if (is_null($meta_ahorro_bd_repeat) || $meta_ahorro_bd_repeat->id == $meta_ahorro_bd->id ) {
                $meta_ahorro_bd->cantidad = $postArray['cantidad'];
                $meta_ahorro_bd->anno = $postArray['anno'];
                $meta_ahorro_bd->save();
                return response()->json('Se ha actualizado la meta de ahorro', 200);
            } else {
                return response()->json([
                    'error' => 'La meta de ahorro con ese año ya existe'
                ], 500);
            }
        } else {
            return response()->json([
                'error' => 'La meta de ahorro no existe'
            ], 500);
        }
    }

    public function show($id) {
        $meta_ahorro = MetaAhorro::find($id);
        return response()->json(array(
            'data' => $meta_ahorro
        ), 200);
    }

}
