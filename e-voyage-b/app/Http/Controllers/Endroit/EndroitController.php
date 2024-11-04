<?php

namespace App\Http\Controllers\Endroit;

use App\Models\Commune;
use App\Models\District;
use App\Models\Province;
use App\Models\Region; // Ajout de l'import pour le modèle Region
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EndroitController extends Controller
{
    // Méthode pour récupérer les communes avec leurs relations
    // public function commune(Request $request): JsonResponse
    // {
    //     // Récupérer le nom de la commune à partir des paramètres de la requête
    //     $communeName = $request->input('name');

    //     // Vous pouvez définir les critères de filtrage selon votre besoin
    //     $filters = $request->all(); // Récupérer tous les filtres du corps de la requête

    //     $locations = Commune::with(['district.region.province'])
    //         ->when($communeName, function ($query) use ($communeName) {
    //             return $query->where('name', 'LIKE', '%' . $communeName . '%'); // Filtrer par nom de la commune si présent
    //         })
    //         ->when(isset($filters['district_id']), function ($query) use ($filters) {
    //             return $query->where('id_district', $filters['district_id']); // Filtrer par ID du district si présent
    //         })
    //         ->when(isset($filters['region_id']), function ($query) use ($filters) {
    //             return $query->whereHas('district.region', function ($q) use ($filters) {
    //                 $q->where('id', $filters['region_id']); // Filtrer par ID de la région si présent
    //             });
    //         })
    //         ->get()
    //         ->map(function ($commune) {
    //             return [
    //                 'commune_name' => $commune->name,
    //                 'district_name' => $commune->district->name ?? null, // Utiliser null si le district est absent
    //                 'region_name' => $commune->district->region->name ?? null, // Utiliser null si la région est absente
    //                 'province_name' => $commune->district->region->province->name ?? null, // Utiliser null si la province est absente
    //             ];
    //         });

    //     return response()->json($locations);
    // }

    public function commune(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required|string',
        ]);
        $communeName = $request->input('name');
        $filters = $request->all();

        $locations = Commune::with(['district.region.province'])
            ->when($communeName, function ($query) use ($communeName) {
                return $query->where('name', $communeName);
            })
            ->when(isset($filters['district_id']), function ($query) use ($filters) {
                return $query->where('id_district', $filters['district_id']);
            })
            ->when(isset($filters['region_id']), function ($query) use ($filters) {
                return $query->whereHas('district.region', function ($q) use ($filters) {
                    $q->where('id', $filters['region_id']);
                });
            })
            ->get()
            ->map(function ($commune) {
                return [
                    'commune_name' => $commune->name,
                    'district_name' => $commune->district->name ?? null,
                    'region_name' => $commune->district->region->name ?? null,
                    'province_name' => $commune->district->region->province->name ?? null,
                ];
            });

        return response()->json($locations);
    }


    // Méthode pour récupérer les districts avec leurs relations
    public function district(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required|string|min:1',
        ]);
        $districtName = $request->input('name');

        $filters = $request->all();

        $locations = District::with(['region.province'])
            ->where('name', $districtName)
            ->when(isset($filters['region_id']), function ($query) use ($filters) {
                return $query->where('id_region', $filters['region_id']);
            })
            ->get()
            ->map(function ($district) {
                return [
                    'district_name' => $district->name,
                    'region_name' => $district->region->name ?? null,
                    'province_name' => $district->region->province->name ?? null,
                ];
            });
        return response()->json($locations);
    }

    public function region(Request $request): JsonResponse
    {
        $request->validate([
            'id' => 'required',
        ]);
        $regionId = $request->input('id');

        $locations = Region::with(['province'])
            ->where('id', $regionId)
            ->get()
            ->map(function ($region) {
                return [
                    'region_id' => $region->id ?? null,
                    'province_id' => $region->province->id ?? null,
                ];
            });

        return response()->json($locations);
    }

    public function getRegionsByProvince(Request $request): JsonResponse
    {
        // Validation de l'entrée
        $request->validate([
            'id' => 'required',
        ]);

        // Récupération de la province par son nom
        $province = Province::where('id', $request->input('id'))->first();

        // Vérification si la province existe
        if (!$province) {
            return response()->json(['message' => 'Province not found'], 404);
        }

        // Récupérer toutes les régions ayant l'id_province correspondant
        $regions = $province->regions;

        // Retourner les régions
        return response()->json($regions);
    }

    public function getDistrictByRegion(Request $request): JsonResponse
    {
        // Validation de l'entrée
        $request->validate([
            'id' => 'required',
        ]);

        // Récupération de la province par son nom
        $region = Region::where('id', $request->input('id'))->first();

        // Vérification si la province existe
        if (!$region) {
            return response()->json(['message' => 'Province not found'], 404);
        }

        // Récupérer toutes les régions ayant l'id_province correspondant
        $districts = $region->districts;

        // Retourner les districts
        return response()->json($districts);
    }
}
