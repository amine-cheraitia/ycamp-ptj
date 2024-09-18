<?php

namespace Database\Seeders;

use App\Models\City;
use League\Csv\Reader;
use App\Models\Adresse;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class AdresseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Chemin vers le fichier CSV
        $csvFilePath = base_path('data/csv/csv_table_adress.csv');

        // Vérifier si le fichier existe
        if (!File::exists($csvFilePath)) {
            $this->command->error("Le fichier CSV n'existe pas: $csvFilePath");
            return;
        }

        // Lire le fichier CSV
        $csv = Reader::createFromPath($csvFilePath, 'r');
        $csv->setHeaderOffset(0); // Utiliser la première ligne comme en-tête

        // Boucle à travers chaque ligne du CSV
        foreach ($csv as $record) {
            // Chercher l'ID de la ville à partir de id_city_name
            $city = City::where('id', $record['id_city_name'])->first();

            if ($city) {
                // Insérer les données de l'adresse
                Adresse::create([
                    'id' => $record["id_place"],
                    'coordinate' => $record['coordonates'], // Coordonnées géographiques
                    'longitude' => $record['longitude'], // Longitude
                    'latitude' => $record['latitude'], // Latitude
                    'adress' => $record['adress'], // Adresse textuelle
                    'city_id' => $city->id, // ID de la ville correspondante
                ]);
            } else {
                $this->command->error("La ville avec l'ID {$record['id_city_name']} n'a pas été trouvée.");
            }
        }

        $this->command->info('Les données des adresses ont été insérées avec succès.');
    }
}
