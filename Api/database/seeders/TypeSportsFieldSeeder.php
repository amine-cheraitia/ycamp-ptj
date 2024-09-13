<?php

namespace Database\Seeders;

use League\Csv\Reader;
use App\Models\TypeSportsField;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class TypeSportsFieldSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Chemin vers le fichier CSV
        $csvFilePath = base_path('data/csv/csv_table_sport_field.csv');

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
            TypeSportsField::create([
                'id' => $record['id_sport_field'], // Colonne du CSV
                'type_of_sport_field' => $record['type_of_sport_field'], // Colonne du CSV
            ]);
        }

        $this->command->info('Les données des types de terrains de sport ont été insérées avec succès.');
    }
}
