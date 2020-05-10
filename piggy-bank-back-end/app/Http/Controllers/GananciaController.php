<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Ganancia;
use Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use JWTAuth;
use DB;

class GananciaController extends Controller
{

    public function findAllProfits() {
        $ganancias = DB::table('ganancias')
        ->select('ganancias.*')
        ->join('tipos_ganancias', 'ganancias.id_tipo_ganancia', '=', 'tipos_ganancias.id')
        ->join('usuarios', 'ganancias.id_usuario', '=', 'usuarios.id')
        ->where('usuarios.id', '=', JWTAuth::user()->id)
        ->where('tipos_ganancias.valor', '=', 'Mensuales')
        ->get();
        return response()->json(array(
            'data' => $ganancias
        ), 200);
    }

    public function index(Request $request)
    {
        $orderBy = !is_null($request['orderBy']) ? $request['orderBy'] : 'asc';
        $sortable = !is_null($request['sortable']) ? $request['sortable'] : 'id';

        $ganancias = new Ganancia;

        if ($request->has('nombre')) {
            $ganancias = $ganancias
                ->where('nombre', $request['nombre'])
                ->orWhere('nombre', 'like', '%' . $request['nombre'] . '%');
        }

        if ($request->has('id_tipo_ganancia')) {
            $ganancias = $ganancias
                ->where('id_tipo_ganancia', $request['id_tipo_ganancia'])
                ->orWhere('id_tipo_ganancia', 'like', '%' . $request['id_tipo_ganancia'] . '%');
        }

        $ganancias = $ganancias
                ->orderBy($sortable, $orderBy)
                ->where('id_usuario', '=', JWTAuth::user()->id)
                ->paginate(10);

        return response()->json(array(
            'data' => $ganancias
        ), 200);
    }

    public function show($id) {
        $ganancia = Ganancia::find($id);
        return response()->json(array(
            'data' => $ganancia->load('ingresos')
        ), 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'nombre' => 'required', 
            'id_tipo_ganancia' => 'required'
        ]);
        if ($validator->fails()) { 
            return response()->json(['message' => 'Validaciones erróneas'], 500);
        }
        $postArray = $request->all();
        $ganancias_bd = Ganancia::where('nombre', '=', $postArray['nombre'])->where('id_usuario', '=', JWTAuth::user()->id)->first();
        if (is_null($ganancias_bd)) {
            $ganancia = new Ganancia();
            $ganancia->nombre = $postArray['nombre']; 
            $ganancia->id_tipo_ganancia = $postArray['id_tipo_ganancia']['id']; 
            $ganancia->id_usuario = JWTAuth::user()->id;
            $ganancia->save();
            return response()->json([
                'message' => 'Se ha creado una nueva ganancia',
                'data' => $ganancia
            ], 200);
        } else {
            return response()->json([
                'message' => 'La ganancia con ese nombre ya existe'
            ], 500);
        }
    }

    public function update($id, Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'nombre' => 'required', 
            'id_tipo_ganancia' => 'required'
        ]);
        if ($validator->fails()) { 
            return response()->json(['message' => 'Validaciones erróneas'], 500);
        }
        $postArray = $request->all();
        $ganancia_bd = Ganancia::where('id', '=', $id)->first();
        if (!is_null($ganancia_bd)) {
            $ganancia_bd_repeat = Ganancia::where('nombre', '=', $postArray['nombre'])->where('id_usuario', '=', JWTAuth::user()->id)->first();
            if (is_null($ganancia_bd_repeat) || $ganancia_bd_repeat->id == $ganancia_bd->id ) {
                $ganancia_bd->nombre = $postArray['nombre'];
                $ganancia_bd->id_tipo_ganancia = $postArray['id_tipo_ganancia']['id']; 
                $ganancia_bd->save();
                return response()->json(['message' => 'Se ha actualizado la ganancia'], 200);
            } else {
                return response()->json([
                    'error' => 'La ganancia ya existe'
                ], 500);
            }
        } else {
            return response()->json([
                'error' => 'La ganancia no existe'
            ], 500);
        }
    }

    public function destroy($id) {
        $ganancia_bd = Ganancia::find($id);
        if (!is_null($ganancia_bd)) {
            $ganancia_bd->delete();
            return response()->json('Se ha eliminado la ganancia', 200);
        } else {
            return response()->json([
                'error' => 'La ganancia no existe'
            ]);
        }
    }
}
