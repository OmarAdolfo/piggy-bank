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
Route::post('/api/get-token-email', 'AuthController@getTokenByEmail');
Route::post('/api/reset-password', 'AuthController@resetPassword');

Route::group(['middleware' => ['jwt.verify']], function() {
    Route::get('user', 'AuthController@getAuthenticatedUser');
    
});

Route::resource('api/tipos-gastos', 'TipoGastoController');