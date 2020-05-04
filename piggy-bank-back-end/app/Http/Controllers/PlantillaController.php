<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use JWTAuth;
use App\Plantilla;
use DB;

class PlantillaController extends Controller
{

    public function index(Request $request)
    {
        $plantillas = Plantilla::all();
        $years = DB::table('plantillas')
            ->select('anno')
            ->distinct()
            ->get();

        return response()->json(array(
            'data' => $plantillas,
            'years' => $years
        ), 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [ 
            'anno' => 'required', 
            'mes' => 'required'
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()]);
        }
        $postArray = $request->all();
        $plantillas_bd = Plantilla::where('anno', '=', $postArray['anno'])->where('mes', '=', $postArray['mes'])->first();
        if (is_null($plantillas_bd)) {
            $plantilla = new Plantilla();
            $plantilla->anno = $postArray['anno'];
            $plantilla->mes = $postArray['mes'];
            $plantilla->id_usuario = JWTAuth::user()->id;
            $plantilla->save();
            $years = DB::table('plantillas')
            ->select('anno')
            ->distinct()
            ->get();
            return response()->json([
                'message' => 'Se ha creado una nueva plantilla',
                'data' => $plantilla,
                'years' => $years
            ], 200);
        } else {
            return response()->json([
                'message' => 'La plantilla ya existe'
            ], 500);
        }
    }

    public function destroy($id) {
        $plantilla_bd = Plantilla::find($id);
        if (!is_null($plantilla_bd)) {
            $plantilla_bd->delete();
            return response()->json(['message' => 'Se ha eliminado la plantilla'], 200);
        } else {
            return response()->json([
                'error' => 'La plantilla no existe'
            ]);
        }
    }

}
