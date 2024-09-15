<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Field;
use App\Models\Region;
use App\Models\Adresse;
use App\Models\Department;
use Illuminate\Http\Request;

class RegionController extends Controller
{
    public function locations()
    {
        //$regions = Region::all();
        $departments = Department::all();
        $cities = City::all();
        $adresses = Field::with('adresse.city.department.region')->paginate(50);
        $regions = Region::with('departments')->get();

        return response()->json([
            'regions' => $regions,
            'adresses' => $adresses,
            'cities' => $cities,
            'departments' => $departments
        ]);
    }

    public function FunctionName()
    {
        $adresses = Field::with('adresse.city.department.region')->paginate(50);
        $regions = Region::with('departments')->get();

        return response()->json([
            'regions' => $regions,
            "adresses" => $adresses

        ]);
    }
}
