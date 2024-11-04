<?php

namespace App\Http\Controllers\Blogs;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Récupérer tous les blogs avec les informations de l'utilisateur associé
        $blogs = Blog::with('user')->get();
        return response()->json($blogs);
    }

    /**
     * Show the form for creating a new resource.
     */
  

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Validation de l'image
        ]);

        // Traitement de l'image
        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('post', 'public');
        }

        $blog = Blog::create([
            'user_id' => Auth::id(),
            'title' => $request->title,
            'description' => $request->description,
            'comment_count' => 0,
            'image' => $imagePath, // Enregistrer le chemin de l'image
        ]);

        return response()->json($blog, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog)
    {
        // Charger l'utilisateur associé pour le blog spécifié
        $blog->load('user');
        return response()->json($blog);
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Blog $blog)
    {
        $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Validation de l'image
        ]);
    
        // Traitement de l'image
        if ($request->hasFile('image')) {
            // Supprimer l'ancienne image si elle existe
            if ($blog->image) {
                Storage::disk('public')->delete($blog->image); // Assurez-vous d'importer la façade Storage
            }
    
            // Stocker la nouvelle image et obtenir son chemin
            $blog->image = $request->file('image')->store('post', 'public');
        }
    
        // Mettre à jour les autres champs
        $blog->update($request->only('title', 'description', 'image')); // Notez que 'image' est maintenant dans le modèle
        return response()->json($blog);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
    {
        // Supprimer l'image du stockage
        if ($blog->image) {
            Storage::disk('public')->delete($blog->image); // Assurez-vous d'importer la façade Storage
        }
    
        // Supprimer le post de la base de données
        $blog->delete();
    
        // Retourner une réponse 204 No Content pour indiquer la réussite de la suppression
        return response()->json(null, 204);
    }
}
