<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BlogsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'user_id' => 'required|exists:users,id',
            'commune_id' => 'required|exists:communes,id',
            'titre' => 'required|string|min:2|max:255',
            // 'url' => 'nullable|url', 
            // 'image_url' => 'required|image|mimes:jpg,png,svg,webp,jpeg,gif|max:2048',
            'description' => 'nullable|string|min:10|max:20000',
            // 'commentaire' => 'nullable|integer|min:0',
            // 'interaction' => 'nullable|integer|min:0',
        ];
    }
}
