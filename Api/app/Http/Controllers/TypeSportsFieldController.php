<?php

namespace App\Http\Controllers;

use App\Models\TypeSportsField;
use Illuminate\Http\Request;

class TypeSportsFieldController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $typeSportsFields = TypeSportsField::all();
        $formattedTypeSportsFields = $typeSportsFields->map(function ($typeSportsField) {
            return [
                'type_sports_field_id' => $typeSportsField->id,
                'type_of_sport_field' => $typeSportsField->type_of_sport_field,
            ];
        });

        return response()->json($formattedTypeSportsFields);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(TypeSportsField $typeSportsField)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TypeSportsField $typeSportsField)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TypeSportsField $typeSportsField)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TypeSportsField $typeSportsField)
    {
        //
    }
}
