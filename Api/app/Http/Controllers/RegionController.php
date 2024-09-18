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
        //$departments = Department::all();
        //$cities = City::all();
        //$adresses = Field::with('adresse.city.department.region')->paginate(50);
        $regions = Region::with('departments.cities')->get();
        //$regions = Region::all();
        /*return response()->json([
            'departments' => $departments,
            'cities' => $cities,
            'regions' => $regions
        ]);*/
        $formattedRegions = $regions->map(function ($region) {
            return [
                'region_id' => $region->id,
                'region_name' => $region->region_name,
                'departments' => $region->departments->map(function ($department) {
                    return [
                        'department_id' => $department->id,
                        'department_name' => $department->department_name,
                        'cities' => $department->cities->map(function ($city) {
                            return [
                                'city_id' => $city->id,
                                'city_name' => $city->city_name,
                                'zip_code' => $city->zip_code,
                            ];
                        }),
                    ];
                }),
            ];
        });
        return response()->json($formattedRegions);
    }
    // try location
    public function location(Request $request)
    {
        $query = $request->input('query');

        // Récupérer les départements dont le nom commence par les 3 lettres
        $departments = Department::where('department_name', 'like', $query . '%')->get();

        // Récupérer les régions dont le nom commence par les 3 lettres
        $regions = Region::where('region_name', 'like', $query . '%')->get();

        // Récupérer les villes dont le nom commence par les 3 lettres
        $cities = City::where('city_name', 'like', $query . '%')->get();

        return response()->json([
            'departments' => $departments,
            'regions' => $regions,
            'cities' => $cities,
        ]);
    }

    public function ville()
    {
        City::all();
        return response()->json([
            City::all()
        ]);
    }
    public function random()
    {
        $adresses = Field::with('adresse.city.department.region')->paginate(50);
        $regions = Region::with('departments')->get();

        return response()->json([
            'regions' => $regions,
            "adresses" => $adresses

        ]);
    }
}