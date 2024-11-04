<?php

namespace App\Http\Controllers\Endroit;

use App\Models\Province;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProvinceController extends Controller
{
    // Afficher toutes les provinces (Read - GET)
    public function index()
    {
        $provinces = Province::all();
        return response()->json($provinces);
    }

    // Créer une nouvelle province (Create - POST)
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|unique:provinces,nom|max:255',
        ]);

        $province = Province::create($validatedData);

        return response()->json($province, 201);
    }

    // Afficher une province spécifique (Read - GET)
    public function show($id)
    {
        $province = Province::findOrFail($id);
        return response()->json($province);
    }

    // Mettre à jour une province (Update - PUT/PATCH)
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|unique:provinces,nom|max:255',
        ]);

        $province = Province::findOrFail($id);
        $province->update($validatedData);

        return response()->json($province);
    }

    // Supprimer une province (Delete - DELETE)
    public function destroy($id)
    {
        $province = Province::findOrFail($id);
        $province->delete();

        return response()->json(null, 204);
    }
}
