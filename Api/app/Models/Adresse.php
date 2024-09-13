<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Adresse extends Model
{
    use HasFactory;
    protected $fillable = ['id', 'coordinate', 'longitude', 'latitude', 'adress', 'city_id'];
}
