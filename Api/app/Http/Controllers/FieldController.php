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
    //
    public function getFields(Request $request)
    {
        $typeSportsFieldId = $request->input('type_sports_field_id');
        $regionId = $request->input('region_id');
        $departmentId = $request->input('department_id');
        $cityId = $request->input('city_id');

        $query = Field::with('adresse.city.department.region');

        if ($typeSportsFieldId) {
            $query->where('type_sports_field_id', $typeSportsFieldId);
        }

        if ($cityId) {
            $query->whereHas('adresse.city', function ($q) use ($cityId) {
                $q->where('id', $cityId);
            });
        } elseif ($departmentId) {
            $query->whereHas('adresse.city.department', function ($q) use ($departmentId) {
                $q->where('id', $departmentId);
            });
        } elseif ($regionId) {
            $query->whereHas('adresse.city.department.region', function ($q) use ($regionId) {
                $q->where('id', $regionId);
            });
        }

        $fields = $query->get();

        return response()->json($fields);
    }

    //
    public function getFieldsByTypeAndLocation(Request $request)
    {
        // Récupérer les paramètres envoyés via le POST
        $typeSportsFieldId = $request->input('type_sports_field_id');
        $regionId = $request->input('region_id');
        $cityId = $request->input('city_id');
        $departmentId = $request->input('department_id');

        // Construire la requête de base
        $query = Field::with('address.city.department.region')
            ->where('type_sports_field_id', $typeSportsFieldId);

        // Filtrer par region_id, department_id, ou city_id si fourni
        if ($regionId) {
            // Filtrer par region
            $query->whereHas('address.city.department.region', function ($q) use ($regionId) {
                $q->where('id', $regionId);
            });
        } elseif ($departmentId) {
            // Filtrer par département
            $query->whereHas('address.city.department', function ($q) use ($departmentId) {
                $q->where('id', $departmentId);
            });
        } elseif ($cityId) {
            // Filtrer par ville
            $query->whereHas('address.city', function ($q) use ($cityId) {
                $q->where('id', $cityId);
            });
        }

        // Récupérer les résultats de la requête
        $fields = $query->get();

        // Retourner les résultats sous forme de JSON
        return response()->json($fields);
    }

    public function getFieldList(Request $request)
    {
        $typeSportsFieldId = $request->type_sports_field_id;
        $regionId = $request->region_id;
        $departmentId = $request->department_id;
        $cityId = $request->city_id;

        /*         return response()->json([
            "typeSportsFieldId" => $typeSportsFieldId,
            "regionId" => $regionId,
            "departmentId" => $departmentId,
            "cityId" => $cityId
        ]); */
        $query = Field::query();

        if ($typeSportsFieldId) {

            $query->where('type_sports_field_id', $typeSportsFieldId);
        } else {
            return response()->json(['random' => $request->type_sports_field_id]);
        }

        if ($regionId !== null) {
            $query->whereHas('adresse.city.department.region', function ($q) use ($regionId) {
                $q->where('id', $regionId);
            });
        } elseif ($departmentId !== null) {
            $query->whereHas('adresse.city.department', function ($q) use ($departmentId) {
                $q->where('id', $departmentId);
            });
        } elseif ($cityId !== null) {
            $query->whereHas('adresse.city', function ($q) use ($cityId) {
                $q->where('id', $cityId);
            });
        }

        $fields = $query->paginate(8);

        return response()->json($fields);
    }
}
