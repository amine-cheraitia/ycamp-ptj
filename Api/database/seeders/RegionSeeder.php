<?php

namespace Database\Seeders;

use App\Models\Region;
use League\Csv\Reader;
use App\Imports\RegionsImport;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RegionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /*$path = base_path('./data/csv/csv_table_region.csv');
        Excel::import(new RegionsImport, $path);*/
        // Chemin du fichier CSV
        $csvFilePath = base_path('data/csv/csv_table_region.csv');

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
            Region::create([
                'id' => $record['id_region_name'], // La colonne du CSV
                'region_name' => $record['region_name'], // La colonne du CSV
            ]);
        }

        $this->command->info('Les données des régions ont été insérées avec succès.');
    }
}
