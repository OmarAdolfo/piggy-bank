<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/api/register', 'AuthController@register');
Route::post('/api/login', 'AuthController@login');
Route::get('/api/get-token-email', 'AuthController@getTokenByEmail');
Route::post('/api/reset-password', 'AuthController@resetPassword');

Route::group(['middleware' => 'jwt.verify:ADMIN,USER'], function() {
    Route::get('/api/user', 'AuthController@getAuthenticatedUser');
    Route::get('api/tipos-gastos/all', 'TipoGastoController@findAll');
    Route::get('api/tipos-ganancias/all', 'TipoGananciaController@findAll');
});

Route::group(['middleware' => 'jwt.verify:USER'], function() {
    Route::resource('api/gastos', 'GastoController');
    Route::resource('api/pagos', 'PagoController');
    Route::resource('api/meta-ahorros', 'MetaAhorroController');
    Route::resource('api/ganancias', 'GananciaController');
    Route::resource('api/ingresos', 'IngresoController');
    Route::get('api/ahorros-anuales', 'AhorrosAnualesController@savingsAndExpensesByYear');
    Route::get('api/ahorros/cuenta-ahorro', 'AhorroController@cuentaAhorro');
    Route::get('api/ahorros/recordatorios-anuales', 'AhorroController@recordatoriosAnuales');
    Route::resource('api/plantillas', 'PlantillaController');
});

Route::group(['middleware' => 'jwt.verify:ADMIN'], function() {
    Route::resource('api/tipos-gastos', 'TipoGastoController');
    Route::resource('api/tipos-ganancias', 'TipoGananciaController');
    Route::resource('api/usuarios', 'UserController');
    Route::resource('api/buenas-practicas', 'BuenaPracticaController');
});