<?php

namespace App\Http\Controllers\Endroit;

use App\Models\District;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DistrictController extends Controller
{
    // Afficher tous les districts
    public function index()
    {
        $districts = District::all();
        return response()->json($districts);
    }

    // Afficher un district spécifique
    public function show($id)
    {
        $district = District::find($id);

        if (!$district) {
            return response()->json(['message' => 'District non trouvé'], 404);
        }

        return response()->json($district);
    }

    // Créer un nouveau district
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'id_region' => 'required|exists:regions,id',
        ]);

        $district = District::create($request->all());

        return response()->json($district, 201);
    }

    // Mettre à jour un district existant
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'id_region' => 'sometimes|required|exists:regions,id',
        ]);

        $district = District::find($id);

        if (!$district) {
            return response()->json(['message' => 'District non trouvé'], 404);
        }

        $district->update($request->all());

        return response()->json($district);
    }

    // Supprimer un district
    public function destroy($id)
    {
        $district = District::find($id);

        if (!$district) {
            return response()->json(['message' => 'District non trouvé'], 404);
        }

        $district->delete();

        return response()->json(['message' => 'District supprimé avec succès']);
    }
}
