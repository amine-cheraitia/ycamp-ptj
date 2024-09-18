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

        $fields = $query->paginate(8);

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
            return response()->json(['error' => "Type de terrain de sport non spécifié."], 400);
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
        } else {
            return response()->json(['error' => "la localisation non spécifié."], 400);
        }

        $fields = $query->paginate(8);

        return response()->json($fields);
    }

    public function getFieldListWithFilter(Request $request)
    {
        $typeSportsFieldId = $request->type_sports_field_id;
        $regionId = $request->region_id;
        $departmentId = $request->department_id;
        $cityId = $request->city_id;

        //
        /*$lighting = $request->has('lighting') ? $request->lighting : null;
        $transportAcces = $request->has('transport_acces') ? $request->transport_acces : null;
        $disabledAcces = $request->has('disabled_acces') ? $request->disabled_acces : null;
        $sanitary = $request->has('sanitary') ? $request->sanitary : null;
        $shower = $request->has('shower') ? $request->shower : null;*/
        $lighting = $request->has('lighting') ? (int) filter_var($request->lighting, FILTER_VALIDATE_BOOLEAN) : null;
        $transportAcces = $request->has('transport_acces') ? (int) filter_var($request->transport_acces, FILTER_VALIDATE_BOOLEAN) : null;
        $disabledAcces = $request->has('disabled_acces') ? (int) filter_var($request->disabled_acces, FILTER_VALIDATE_BOOLEAN) : null;
        $sanitary = $request->has('sanitary') ? (int) filter_var($request->sanitary, FILTER_VALIDATE_BOOLEAN) : null;
        $shower = $request->has('shower') ? (int) filter_var($request->shower, FILTER_VALIDATE_BOOLEAN) : null;

        $query = Field::query();

        if ($typeSportsFieldId) {
            $query->where('type_sports_field_id', $typeSportsFieldId);
        } else {
            return response()->json(['error' => "Type de terrain de sport non spécifié."], 400);
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
        } else {
            return response()->json(['error' => "la localisation non spécifié."], 400);
        }

        //return response()->json(["lighting" => $lighting,]);
        if ($lighting === null && $transportAcces === null && $disabledAcces === null && $sanitary === null && $shower === null) {
            $fields = $query->paginate(8);
            return response()->json(["end" => "end", "lol" => $fields]);
        }
        if ($lighting !== null) {
            $query->where('lighting', $lighting);
/*             return response()->json([
                'okk' => 'ok',
                "result" => $query->paginate(8)
            ]); */
        }
        if ($transportAcces !== null) {
            $query->where('transport_acces', $transportAcces);
            /* return response()->json(["aze" => "random"]); */
        }
        if ($disabledAcces !== null) {
            $query->where('disabled_acces', $disabledAcces);
        }
        if ($sanitary !== null) {
            $query->where('sanitary', $sanitary);
        }
        if ($shower !== null) {
            $query->where('shower', $shower);
        }

        // Vérification si aucune des conditions booléennes n'est spécifiée
        if ($lighting === null && $transportAcces === null && $disabledAcces === null && $sanitary === null && $shower === null) {
            return response()->json(['error' => "Aucun filtre booléen spécifié."], 400);
        }

        $fields = $query->paginate(8);

        return response()->json($fields);
    }
}
