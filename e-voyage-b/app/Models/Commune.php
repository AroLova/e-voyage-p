<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commune extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'id_district', // Clé étrangère vers le modèle District
    ];

    // Définir la relation avec le modèle District
    public function district()
    {
        return $this->belongsTo(District::class, 'id_district'); // Relation "une commune appartient à un district"
    }

    // Définir la relation avec le modèle Region via District
    public function region()
    {
        return $this->hasOneThrough(Region::class, District::class, 'id', 'id_region', 'id_district', 'id'); 
        // Relation "une commune a une région via le district"
    }
}
