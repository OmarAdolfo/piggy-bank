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
});

Route::group(['middleware' => 'jwt.verify:USER'], function() {
    Route::resource('api/gastos', 'GastoController');
    Route::resource('api/pagos', 'PagoController');
});

Route::group(['middleware' => 'jwt.verify:ADMIN'], function() {
    Route::resource('api/tipos-gastos', 'TipoGastoController');
    Route::resource('api/tipos-ahorros', 'TipoAhorroController');
    Route::resource('api/usuarios', 'UserController');
    Route::resource('api/buenas-practicas', 'BuenaPracticaController');
});