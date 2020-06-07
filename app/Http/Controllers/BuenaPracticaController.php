<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\BuenaPractica;
use Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use JWTAuth;

class BuenaPracticaController extends Controller
{

    public function findAll() {
        $buenas_practicas = BuenaPractica::all();
        return response()->json(array(
            'data' => $buenas_practicas
        ), 200);
    }

    public function index(Request $request)
    {
        $orderBy = !is_null($request['orderBy']) ? $request['orderBy'] : 'asc';
        $sortable = !is_null($request['sortable']) ? $request['sortable'] : 'id';

        $buenas_practicas = new BuenaPractica;

        if ($request->has('palabraClave')) {
            $buenas_practicas = $buenas_practicas->where('palabra_clave', 'like', '%' . $request['palabraClave'] . '%');
        }

        if ($request->has('porcentaje')) {
            $buenas_practicas = $buenas_practicas->where('porcentaje', $request['porcentaje']);
        }

        $buenas_practicas = $buenas_practicas
                ->orderBy($sortable, $orderBy)
                ->paginate(10);

        return response()->json(array(
            'data' => $buenas_practicas
        ), 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'palabra_clave' => 'required', 
            'porcentaje' => 'required|min:1|max:100'
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()]);
        }
        $postArray = $request->all();
        $buenas_practicas_bd = BuenaPractica::where('palabra_clave', '=', $postArray['palabra_clave'])->first();
        if (is_null($buenas_practicas_bd)) {
            $buena_practica = new BuenaPractica();
            $buena_practica->palabra_clave = $postArray['palabra_clave'];
            $buena_practica->porcentaje = $postArray['porcentaje'];
            $buena_practica->id_usuario = JWTAuth::user()->id;
            $buena_practica->save();
            return response()->json([
                'message' => 'Se ha creado una nueva buena práctica',
                'data' => $buena_practica
            ], 200);
        } else {
            return response()->json([
                'message' => 'La buena práctica ya existe'
            ]);
        }
    }

    public function update($id, Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'palabra_clave' => 'required', 
            'porcentaje' => 'required|min:1|max:100'
        ]);
        if ($validator->fails()) { 
            return response()->json(['message' => $validator->errors()], 500);
        }
        $postArray = $request->all();
        $buena_practica_bd = BuenaPractica::where('id', '=', $id)->first();
        if (!is_null($buena_practica_bd)) {
            $buena_practica_bd_repeat = BuenaPractica::where('palabra_clave', '=', $postArray['palabra_clave'])->first();
            if (is_null($buena_practica_bd_repeat) || $buena_practica_bd_repeat->id == $buena_practica_bd->id ) {
                $buena_practica_bd->palabra_clave = $postArray['palabra_clave'];
                $buena_practica_bd->porcentaje = $postArray['porcentaje'];
                $buena_practica_bd->id_usuario = JWTAuth::user()->id;
                $buena_practica_bd->save();
                return response()->json(['message' => 'Se ha actualizado la buena práctica'], 200);
            } else {
                return response()->json([
                    'message' => 'La buena práctica no existe'
                ], 500);
            }
        } else {
            return response()->json([
                'message' => 'La buena práctica no existe'
            ], 500);
        }
    }

    public function destroy($id) {
        $buena_practica_bd = BuenaPractica::find($id);
        if (!is_null($buena_practica_bd)) {
            $buena_practica_bd->delete();
            return response()->json(['message' => 'Se ha eliminado la buena práctica'], 200);
        } else {
            return response()->json([
                'message' => 'La buena práctica no existe'
            ]);
        }
    }

    public function show($id) {
        $buena_practica = BuenaPractica::find($id);
        if (!is_null($buena_practica)) {
            return response()->json(array(
                'data' => $buena_practica
            ), 200);
        } else {
            return response()->json([
                'message' => 'La buena práctica no existe'
            ], 500);
        } 
    }
}
