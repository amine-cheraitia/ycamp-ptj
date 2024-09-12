<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//Route::get('/fieldsearch/{sporttype?}/{loc?}/{trpacc?}/{handiacc?}/{sanit?}/{shower?}', [FieldsController::class, 'search']);
/*Route::get('fields', function ($id) {

});*/