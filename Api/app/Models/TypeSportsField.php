<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @mixin IdeHelperTypeSportsField
 */
class TypeSportsField extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'type_of_sport_field'];

    public function fields()
    {
        return $this->hasMany(Field::class);
    }
}
