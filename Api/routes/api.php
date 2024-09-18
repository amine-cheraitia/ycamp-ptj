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
//Fournis l'ensembles des villes/departements/region
Route::get('/locations', [RegionController::class, 'locations']);

//Fournis l'ensembles des types de terrains

Route::get('/location', [RegionController::class, 'location']);
Route::get('/typesportsfield', [TypeSportsFieldController::class, 'index']);

//call first research
//Fournis l'ensembles des villes/departements/region
Route::get('/fieldslist', [FieldController::class, 'fieldslist']);

//Route::post("/getFields", [FieldController::class, 'getFields']);

//Route::post("/getfield", [FieldController::class, 'getFieldsByTypeAndLocation']);
//Fournis l'ensembles des terrains (type de terrain + Location)
Route::get('/fieldlists', [FieldController::class, 'getFieldList']);


//Fournis l'ensembles des terrains avec les filtres (type de terrain + Location)

//new route
Route::get('/getFieldListe', [FieldController::class, 'getFieldListe']);
//filter

Route::get('/fields', [FieldController::class, 'getFieldListWithFilter']);


Route::get('/field/{id}', [FieldController::class, 'getFieldDetail']);