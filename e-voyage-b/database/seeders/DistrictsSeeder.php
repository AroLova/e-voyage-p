<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DistrictsSeeder extends Seeder
{
    public function run()
    {
        DB::table('districts')->insert([
            //Antananarivo
            ['name' => 'Antananarivo', 'id_region' => 1],
            ['name' => 'Ambohidratrimo', 'id_region' => 1],
            ['name' => 'Andramasina', 'id_region' => 1],
            ['name' => 'Anjozorobe', 'id_region' => 1],
            ['name' => 'Antananarivo-Avaradrano', 'id_region' => 1],
            ['name' => 'Antananarivo-Atsimondrano', 'id_region' => 1],
            ['name' => 'Antananarivo-Renivohitra', 'id_region' => 1],
            ['name' => 'Manjakandriana', 'id_region' => 1],

            // Districts pour la région Bongolava (id_region = 2)
            ['name' => 'Fenoarivobe', 'id_region' => 2],
            ['name' => 'Tsiroanomandidy', 'id_region' => 2],

            // Districts pour la région Vakinankaratra (id_region = 3)
            ['name' => 'Ambatolampy', 'id_region' => 3],
            ['name' => 'Antanifotsy', 'id_region' => 3],
            ['name' => 'Antsirabe II (rural)', 'id_region' => 3],
            ['name' => 'Antsirabe I (urbain)', 'id_region' => 3],
            ['name' => 'Betafo', 'id_region' => 3],
            ['name' => 'Faratsiho', 'id_region' => 3],

            // Districts pour la région Itasy (id_region = 4)
            ['name' => 'Arivonimamo', 'id_region' => 4],
            ['name' => 'Miarinarivo', 'id_region' => 4],
            ['name' => 'Soavinandriana', 'id_region' => 4],

            //fianarantoa
            // Districts pour la région Haute Matsiatra (id_region = 5)
            ['name' => 'Ambalavao', 'id_region' => 5],
            ['name' => 'Ambohimahasoa', 'id_region' => 5],
            ['name' => 'Isandra', 'id_region' => 5],
            ['name' => 'Lalangina', 'id_region' => 5],
            ['name' => 'Vohibato', 'id_region' => 5],
            ['name' => 'Fianarantsoa', 'id_region' => 5],
            ['name' => 'Ikalamavony', 'id_region' => 5],

            // Districts pour la région Atsimo Atsinanana (id_region = 6)
            ['name' => 'Befotaka', 'id_region' => 6],
            ['name' => 'Farafangana', 'id_region' => 6],
            ['name' => 'Midongy-Sud', 'id_region' => 6],
            ['name' => 'Vangaindrano', 'id_region' => 6],
            ['name' => 'Vondrozo', 'id_region' => 6],

            // Districts pour la région Amoron'i Mania (id_region = 7)
            ['name' => 'Ambatofinandrahana', 'id_region' => 7],
            ['name' => 'Ambositra', 'id_region' => 7],
            ['name' => 'Fandriana', 'id_region' => 7],
            ['name' => 'Manandriana', 'id_region' => 7],

            // Districts pour la région Ihorombe (id_region = 8)
            ['name' => 'Iakora', 'id_region' => 8],
            ['name' => 'Ihosy', 'id_region' => 8],
            ['name' => 'Ivohibe', 'id_region' => 8],

            // Districts pour la région Vatovavy (id_region = 9)
            ['name' => 'Ifanadiana', 'id_region' => 9],
            ['name' => 'Mananjary', 'id_region' => 9],
            ['name' => 'Nosy Varika', 'id_region' => 9],

            // Districts pour la région Fitovinany (id_region = 10)
            ['name' => 'Ikongo', 'id_region' => 10],
            ['name' => 'Manakara', 'id_region' => 10],
            ['name' => 'Vohipeno', 'id_region' => 10],

            // Districts pour la région Alaotra-Mangoro (id_region = 11)
            ['name' => 'Ambatondrazaka', 'id_region' => 11],
            ['name' => 'Amparafaravola', 'id_region' => 11],
            ['name' => 'Andilamena', 'id_region' => 11],
            ['name' => 'Anosibe An\'ala', 'id_region' => 11],
            ['name' => 'Moramanga', 'id_region' => 11],

            // Districts pour la région Ambatosoa (id_region = 12)
            ['name' => 'Mananara-Nord', 'id_region' => 12],
            ['name' => 'Maroantsetra', 'id_region' => 12],

            // Districts pour la région Analanjirofo (id_region = 13)
            ['name' => 'Fénérive-Est', 'id_region' => 13],
            ['name' => 'Île Sainte-Marie', 'id_region' => 13],
            ['name' => 'Soanierana Ivongo', 'id_region' => 13],
            ['name' => 'Vavatenina', 'id_region' => 13],

            // Districts pour la région Atsinanana (id_region = 14)
            ['name' => 'Antanambao-Manampotsy', 'id_region' => 14],
            ['name' => 'Mahanoro', 'id_region' => 14],
            ['name' => 'Marolambo', 'id_region' => 14],
            ['name' => 'Tamatave II', 'id_region' => 14],
            ['name' => 'Tamatave I', 'id_region' => 14],
            ['name' => 'Vatomandry', 'id_region' => 14],
            ['name' => 'Brickaville', 'id_region' => 14],

                //Mahajanga
            // Districts pour la région correspondant à id_region = 15
            ['name' => 'Analalava', 'id_region' => 15],
            ['name' => 'Antsohihy', 'id_region' => 15],
            ['name' => 'Bealanana', 'id_region' => 15],
            ['name' => 'Befandriana', 'id_region' => 15],
            ['name' => 'Boriziny', 'id_region' => 15],
            ['name' => 'Mampikony', 'id_region' => 15],
            ['name' => 'Mandritsara', 'id_region' => 15],

            // Districts pour la région correspondant à id_region = 16
            ['name' => 'Ambato-Boeny', 'id_region' => 16],
            ['name' => 'Mahajanga I', 'id_region' => 16],
            ['name' => 'Mahajanga II', 'id_region' => 16],
            ['name' => 'Marovoay', 'id_region' => 16],
            ['name' => 'Mitsinjo', 'id_region' => 16],
            ['name' => 'Soalala', 'id_region' => 16],

            // Districts pour la région correspondant à id_region = 17
            ['name' => 'Kandreho', 'id_region' => 17],
            ['name' => 'Maevatanana', 'id_region' => 17],
            ['name' => 'Tsaratanana', 'id_region' => 17],

            // Districts pour la région correspondant à id_region = 18
            ['name' => 'Ambatomainty', 'id_region' => 18],
            ['name' => 'Antsalova', 'id_region' => 18],
            ['name' => 'Besalampy', 'id_region' => 18],
            ['name' => 'Maintirano', 'id_region' => 18],
            ['name' => 'Morafenobe', 'id_region' => 18],

            //Toliara
            // Districts pour la région Androy (id_region = 19)
            ['name' => 'Ambovombe-Androy', 'id_region' => 19],
            ['name' => 'Bekily', 'id_region' => 19],
            ['name' => 'Beloha', 'id_region' => 19],
            ['name' => 'Tsiombe', 'id_region' => 19], // Exemple d'ajout si nécessaire
            // Districts pour la région Atsimo-Andrefana (id_region = 20)
            ['name' => 'Ampanihy', 'id_region' => 20],
            ['name' => 'Ankazoabo', 'id_region' => 20],
            ['name' => 'Benenitra', 'id_region' => 20],
            ['name' => 'Beroroha', 'id_region' => 20],
            ['name' => 'Betioky-Sud', 'id_region' => 20],
            ['name' => 'Morombe', 'id_region' => 20],
            ['name' => 'Sakaraha', 'id_region' => 20],
            ['name' => 'Toliara II', 'id_region' => 20],
            ['name' => 'Toliara I', 'id_region' => 20],

            // Districts pour la région Anosy (id_region = 21)
            ['name' => 'Amboasary-Sud', 'id_region' => 21],
            ['name' => 'Betroka', 'id_region' => 21],
            ['name' => 'Tolanaro', 'id_region' => 21],

            // Districts pour la région Menabe (id_region = 22)
            ['name' => 'Belon i Tsiribihina', 'id_region' => 22],
            ['name' => 'Mahabo', 'id_region' => 22],
            ['name' => 'Manja', 'id_region' => 22],
            ['name' => 'Miandrivazo', 'id_region' => 22],
            ['name' => 'Morondava', 'id_region' => 22],
            
                //Antiranana
            // Districts pour la région Diana (id_region = 23)
            ['name' => 'Ambanja', 'id_region' => 23],
            ['name' => 'Ambilobe', 'id_region' => 23],
            ['name' => 'Antsiranana II ', 'id_region' => 23],
            ['name' => 'Antsiranana I ', 'id_region' => 23],
            ['name' => 'Nosy Be', 'id_region' => 23],

            // Districts pour la région Sava (id_region = 24)
            ['name' => 'Andapa', 'id_region' => 24],
            ['name' => 'Antalaha', 'id_region' => 24],
            ['name' => 'Sambava', 'id_region' => 24],
            ['name' => 'Vohemar', 'id_region' => 24],
        ]);
    }
}
