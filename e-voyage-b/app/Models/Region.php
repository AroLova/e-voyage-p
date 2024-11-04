<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'id_province', // Clé étrangère vers le modèle Province
    ];

    // Définir la relation avec le modèle Province
    public function province()
    {
        return $this->belongsTo(Province::class, 'id_province'); // Relation "une région appartient à une province"
    }

    // Définir la relation avec le modèle District
    public function districts()
    {
        return $this->hasMany(District::class, 'id_region'); // Relation "une région a plusieurs districts"
    }
}
