<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @mixin IdeHelperAdresse
 */
class Adresse extends Model
{
    use HasFactory;
    protected $fillable = ['id', 'coordinate', 'longitude', 'latitude', 'adress', 'city_id'];

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function fields()
    {
        return $this->hasMany(Field::class);
    }
}
