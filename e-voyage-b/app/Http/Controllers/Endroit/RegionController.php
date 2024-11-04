<?php

namespace App\Http\Controllers\Endroit;

use App\Models\Region;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
class RegionController extends Controller
{
    // Afficher toutes les régions
    public function index()
    {
        $regions = Region::all();
        return response()->json($regions);
    }

    // Afficher une région spécifique
    public function show($id)
    {
        $region = Region::find($id);

        if (!$region) {
            return response()->json(['message' => 'Région non trouvée'], 404);
        }

        return response()->json($region);
    }

    // Créer une nouvelle région
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'id_province' => 'required|exists:provinces,id',
        ]);

        $region = Region::create($request->all());

        return response()->json($region, 201);
    }

    // Mettre à jour une région existante
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'id_province' => 'sometimes|required|exists:provinces,id',
        ]);

        $region = Region::find($id);

        if (!$region) {
            return response()->json(['message' => 'Région non trouvée'], 404);
        }

        $region->update($request->all());

        return response()->json($region);
    }

    // Supprimer une région
    public function destroy($id)
    {
        $region = Region::find($id);

        if (!$region) {
            return response()->json(['message' => 'Région non trouvée'], 404);
        }

        $region->delete();

        return response()->json(['message' => 'Région supprimée avec succès']);
    }
}
