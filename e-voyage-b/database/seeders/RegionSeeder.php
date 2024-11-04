<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RegionSeeder extends Seeder
{
    public function run()
    {
        // Tableau global des régions à insérer
        $regions = [
            // Provinces avec id_province = 1
            ['name' => 'Analamanga', 'id_province' => 1],
            ['name' => 'Bongolava', 'id_province' => 1],
            ['name' => 'Vakinankaratra', 'id_province' => 1],
            ['name' => 'Itasy', 'id_province' => 1],
            
            // Provinces avec id_province = 2
            ['name' => 'Haute Matsiatra', 'id_province' => 2],
            ['name' => 'Atsimo Atsinanana', 'id_province' => 2],
            ['name' => 'Amoron i Mania', 'id_province' => 2],
            ['name' => 'Ihorombe', 'id_province' => 2],
            ['name' => 'Vatovavy', 'id_province' => 2],
            ['name' => 'Fitovinany', 'id_province' => 2],

            // Provinces avec id_province = 3
            ['name' => 'Alaotra Mangoro', 'id_province' => 3],
            ['name' => 'Ambatosoa', 'id_province' => 3],
            ['name' => 'Analanjirofo', 'id_province' => 3],
            ['name' => 'Est', 'id_province' => 3],

            // Provinces avec id_province = 4
            ['name' => 'Sofia', 'id_province' => 4],
            ['name' => 'Boeny', 'id_province' => 4],
            ['name' => 'Betsiboka', 'id_province' => 4],
            ['name' => 'Melaky', 'id_province' => 4],

            // Provinces avec id_province = 5
            ['name' => 'Androy', 'id_province' => 5],
            ['name' => 'Atsimo Andrefana', 'id_province' => 5],
            ['name' => 'Anosy', 'id_province' => 5],
            ['name' => 'Menabe', 'id_province' => 5],

            // Provinces avec id_province = 6
            ['name' => 'Sava', 'id_province' => 6],
            ['name' => 'Diana', 'id_province' => 6],
        ];

        // Insérer toutes les régions dans la table 'regions'
        DB::table('regions')->insert($regions);
    }
}
