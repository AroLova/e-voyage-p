<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'id_region', // Clé étrangère vers le modèle Region
    ];

    // Définir la relation avec le modèle Region
    public function region()
    {
        return $this->belongsTo(Region::class, 'id_region'); // Relation "un district appartient à une région"
    }

    // Définir la relation avec le modèle Commune
    public function communes()
    {
        return $this->hasMany(Commune::class, 'id_district'); // Relation "un district a plusieurs communes"
    }
}

