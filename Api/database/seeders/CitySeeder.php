<?php

namespace Database\Seeders;

use App\Models\City;
use League\Csv\Reader;
use App\Models\Department;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Chemin du fichier CSV
        $csvFilePath = base_path('data/csv/csv_table_city.csv');

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
            // Trouver le département correspondant avec le department_code
            $department = Department::where('id', $record['department_code'])->first();

            // Si le département existe, insérer la ville
            if ($department) {
                City::create([
                    'id' => $record['id_city_name'],
                    'city_name' => $record['city_name'], // Nom de la ville
                    'zip_code' => $record['zip_code'], // Code postal
                    'departement_id' => $record["department_code"], // ID du département
                ]);
            } else {
                $this->command->error("Le département avec le code {$record['department_code']} n'a pas été trouvé.");
            }
        }

        $this->command->info('Les données des villes ont été insérées avec succès.');
    }
}
