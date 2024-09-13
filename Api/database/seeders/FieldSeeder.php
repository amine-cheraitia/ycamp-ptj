<?php

namespace Database\Seeders;

use League\Csv\Reader;
use App\Models\Adresse;
use App\Models\TypeSportsField;
use App\Models\Field;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class FieldSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Chemin vers le fichier CSV
        $csvFilePath = base_path('data/csv/csv_table_details.csv');

        // Vérifier si le fichier existe
        if (!File::exists($csvFilePath)) {
            $this->command->error("Le fichier CSV n'existe pas: $csvFilePath");
            return;
        }

        // Lire le fichier CSV
        $csv = Reader::createFromPath($csvFilePath, 'r');
        $csv->setHeaderOffset(0); // Utiliser la première ligne comme en-tête

        // Boucler à travers chaque ligne du CSV
        foreach ($csv as $record) {
            // Chercher l'adresse correspondante à partir de id_place
            $address = Adresse::where('id', $record['id_place'])->first();

            // Chercher le type de terrain de sport à partir de id_sport_field
            $typeSportsField = TypeSportsField::where('id', $record['id_sport_field'])->first();

            if ($address && $typeSportsField) {
                // Insérer les données dans la table details
                Field::create([

                    'place_name' => $record['place_name'], // Nom du lieu
                    'observation_1' => $record['observation_1'], // Observation 1
                    'observation_2' => $record['observation_2'], // Observation 2
                    'ground_type' => $record['ground_type'], // Type de sol
                    'lighting' => filter_var($record['lighting'], FILTER_VALIDATE_BOOLEAN), // Éclairage
                    'transport_acces' => filter_var($record['transport_acces'], FILTER_VALIDATE_BOOLEAN), // Accès au transport
                    'disabled_acces' => filter_var($record['disabled_acces'], FILTER_VALIDATE_BOOLEAN), // Accès handicapés
                    'sanitary' => filter_var($record['sanitary'], FILTER_VALIDATE_BOOLEAN), // Sanitaires
                    'shower' => filter_var($record['shower'], FILTER_VALIDATE_BOOLEAN), // Douches
                    'web_link' => $record['web_link'], // Lien web
                    'adresse_id' => $address->id, // ID de l'adresse correspondante
                    'type_sports_field_id' => $typeSportsField->id, // ID du type de terrain de sport correspondant
                ]);
            } else {
                $this->command->error("L'adresse avec l'ID {$record['id_place']} ou le terrain de sport avec l'ID {$record['id_sport_field']} n'a pas été trouvé.");
            }
        }

        $this->command->info('Les données des détails ont été insérées avec succès.');
    }
}
