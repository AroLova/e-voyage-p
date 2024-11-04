<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommunesTable extends Migration
{
    public function up()
    {
        Schema::create('communes', function (Blueprint $table) {
            $table->id(); // Clé primaire auto-incrémentée
            $table->string('name'); // Nom de la commune
            $table->foreignId('id_district')->constrained('districts')->onDelete('cascade'); // Clé étrangère vers la table districts
            $table->timestamps(); // Champs pour created_at et updated_at
        });
    }

    public function down()
    {
        Schema::dropIfExists('communes');
    }
}
