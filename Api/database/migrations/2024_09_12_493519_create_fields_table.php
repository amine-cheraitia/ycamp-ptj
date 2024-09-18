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
        Schema::create('fields', function (Blueprint $table) {
            $table->id();
            $table->string("place_name")->nullable();;
            $table->text("observation_1")->nullable();;
            $table->text("observation_2")->nullable();;
            $table->string("ground_type")->nullable();;
            $table->boolean("lighting")->nullable();;
            $table->boolean("transport_acces")->nullable();;
            $table->boolean("disabled_acces")->nullable();;
            $table->boolean("sanitary")->nullable();;
            $table->float("shower")->nullable();;
            $table->string("web_link")->nullable();;

            $table->string('adresse_id');
            $table->foreign('adresse_id')->references('id')->on('adresses');

            $table->string('type_sports_field_id');
            $table->foreign('type_sports_field_id')->references('id')->on('type_sports_fields');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fields');
    }
};
