<?php

namespace Database\Seeders;

use League\Csv\Reader;
use App\Models\Department;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Chemin du fichier CSV
        $csvFilePath = base_path('data/csv/csv_table_department.csv');

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
            Department::create([
                'id' => $record['department_code'],
                'department_name' => $record['department_name'], // Nom du département
                'region_id' => $record['id_region_name'], // Correspond à l'ID de la région
            ]);
        }

        $this->command->info('Les données des départements ont été insérées avec succès.');
    }
}
