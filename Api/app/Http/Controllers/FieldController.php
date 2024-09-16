<?php

namespace App\Http\Controllers;

use App\Models\Field;
use Illuminate\Http\Request;

class FieldController extends Controller
{
    public function fieldslist(Request $request)
    {
        $query = Field::query();


        if ($request->has('region_id')) {
            $query->whereHas('adresse.city.department.region', function ($q) use ($request) {
                $q->where('id', $request->region_id);
            });
        }

        if ($request->has('department_id')) {
            $query->whereHas('adresse.city.department', function ($q) use ($request) {
                $q->where('id', $request->department_id);
            });
        }

        if ($request->has('city_id')) {
            $query->whereHas('adresse.city', function ($q) use ($request) {
                $q->where('id', $request->city_id);
            });
        }

        if ($request->has('type_sports_field_id')) {
            $query->where('type_sports_field_id', $request->type_sports_field_id);
        }

        $fields = $query->paginate(50);

        return response()->json($fields);
    }
}