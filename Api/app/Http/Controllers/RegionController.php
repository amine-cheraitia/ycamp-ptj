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
                'id' => $region->id,
                'region_name' => $region->region_name,
                'departments' => $region->departments->map(function ($department) {
                    return [
                        'id' => $department->id,
                        'department_name' => $department->department_name,
                        'cities' => $department->cities->map(function ($city) {
                            return [
                                'id' => $city->id,
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
