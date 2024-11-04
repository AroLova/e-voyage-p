<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDistrictsTable extends Migration
{
    public function up()
    {
        Schema::create('districts', function (Blueprint $table) {
            $table->id(); // Clé primaire auto-incrémentée
            $table->string('name'); // Nom du district
            $table->foreignId('id_region')->constrained('regions')->onDelete('cascade'); // Clé étrangère vers la table regions
            $table->timestamps(); // Champs pour created_at et updated_at
        });
    }

    public function down()
    {
        Schema::dropIfExists('districts');
    }
}
