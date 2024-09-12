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
            $table->string("name");
            $table->boolean("lighting");
            $table->string("obeservation1");
            $table->string("obeservation2");
            $table->boolean("transport_acces");
            $table->boolean("disabled_acces");
            $table->boolean("sanitary");
            $table->float("shower");
            $table->string("website");
            $table->string("ground_type");
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
