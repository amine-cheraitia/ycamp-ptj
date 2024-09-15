<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @mixin IdeHelperField
 */
class Field extends Model
{
    use HasFactory;

    public function adresse()
    {
        return $this->belongsTo(Adresse::class);
    }

    public function typeOfSportsField()
    {
        return $this->belongsTo(TypeSportsField::class);
    }
}
