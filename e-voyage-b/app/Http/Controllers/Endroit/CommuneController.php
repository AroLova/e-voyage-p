<?php

namespace App\Http\Controllers\Endroit;

use App\Models\Commune;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CommuneController extends Controller
{
    // Affiche la liste des communes
    public function index()
    {
        $communes = Commune::all();
        return response()->json($communes);
    }

    // Stocke une nouvelle commune dans la base de données
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'id_district' => 'required|exists:districts,id',
        ]);

        $commune = Commune::create($request->all());
        return response()->json($commune, 201);
    }

    // Affiche une commune spécifique
    public function show(Commune $commune)
    {
        return response()->json($commune);
    }

    // Met à jour une commune existante
    public function update(Request $request, Commune $commune)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'id_district' => 'required|exists:districts,id',
        ]);

        $commune->update($request->all());
        return response()->json($commune);
    }

    // Supprime une commune
    public function destroy(Commune $commune)
    {
        $commune->delete();
        return response()->json(null, 204);
    }
}
