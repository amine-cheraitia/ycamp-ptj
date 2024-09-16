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
        return $this->belongsTo(Adresse::class, 'adresse_id');
    }

    public function type()
    {
        return $this->belongsTo(TypeSportsField::class, 'type_sports_field_id');
    }
}
