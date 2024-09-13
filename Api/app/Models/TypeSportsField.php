<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeSportsField extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'type_of_sport_field'];
}
