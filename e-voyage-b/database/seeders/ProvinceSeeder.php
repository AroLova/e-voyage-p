<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProvinceSeeder extends Seeder
{
    public function run()
    {
        DB::table('provinces')->insert([
            ['name' => 'Antananarivo'],
            ['name' => 'Fianarantsoa'],
            ['name' => 'Toamasina'],
            ['name' => 'Mahaanga'],
            ['name' => 'Toliara'],
            ['name' => 'Antsiranana'],
        ]);
    }
}
