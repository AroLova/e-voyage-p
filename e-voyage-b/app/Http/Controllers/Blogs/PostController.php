<?php

namespace App\Http\Controllers\Blogs;

use App\Http\Requests\PostsRequest;
use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class PostController extends Controller
{
    public function index(): JsonResponse
    {
        $posts = Post::all();
        return response()->json($posts);
    }

    public function store(PostsRequest $request)
    {
        $user = $request->user();
        $data = $request->validated();
        $data['user_id'] = $user->id;

        try {
            if ($request->hasFile('image_url')) { 
                $file = $request->file('image_url');
                $path = $file->store('blog', 'public'); 
                $data['image_url'] = $path; 
            }

            $blog = Post::create($data);

            return response()->json([
                'status' => 201,
                'message' => 'Blog created successfully',
                'data' => $blog,
            ], 201);

        } catch (\Throwable $err) {
            Log::error("Blog creation error: " . $err->getMessage());

            return response()->json([
                'status' => 500,
                'message' => 'Something went wrong!',
                'error' => $err->getMessage() 
            ], 500);
        }
    }

    public function show($id): JsonResponse
    {
        $post = Post::findOrFail($id);
        return response()->json($post);
    }

    public function update(PostsRequest $request, $id): JsonResponse
    {
        $data = $request->validated();
        $post = Post::findOrFail($id);

        // Gestion du téléchargement de l'image si nécessaire
        if ($request->hasFile('image_url')) {
            $data['image_url'] = $request->file('image_url')->store('blog', 'public'); // Stocke aussi dans public/blog
        }

        $post->update($data);

        return response()->json([
            'status' => 200,
            'message' => 'Blog updated successfully',
            'data' => $post
        ]);
    }

    public function destroy($id): JsonResponse
    {
        $post = Post::findOrFail($id);
        $post->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Blog deleted successfully',
        ]);
    }
}
