<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Province extends Model
{
    use HasFactory;

    // Indique les champs qui peuvent être remplis par le biais de l'assignation de masse
    protected $fillable = ['name'];

    // Définir la relation avec le modèle Region
    public function regions()
    {
        return $this->hasMany(Region::class, 'id_province'); // Relation "une province a plusieurs régions"
    }
}