<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cities', function (Blueprint $table) {
            $table->unsignedInteger('id')->primary();
            $table->string("city_name");
            $table->string('zip_code');
            $table->timestamps();

            $table->string('departement_id');
            $table->foreign('departement_id')->references('id')->on('departements');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cities');
    }
};
