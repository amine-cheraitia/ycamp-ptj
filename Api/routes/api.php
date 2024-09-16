<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FieldController;
use App\Http\Controllers\RegionController;
use App\Http\Controllers\TypeSportsFieldController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//call at bgng
Route::get('/locations', [RegionController::class, 'locations']);
Route::get('/typesportsfield', [TypeSportsFieldController::class, 'index']);

//call first research
Route::post('/fieldslist', [FieldController::class, 'fieldslist']);

Route::post("/getFields", [FieldController::class, 'getFields']);

Route::post("/getfield", [FieldController::class, 'getFieldsByTypeAndLocation']);
