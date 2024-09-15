<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @mixin IdeHelperCity
 */
class City extends Model
{
    use HasFactory;
    protected $fillable = ['id', 'city_name', 'zip_code', 'departement_id'];

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function addresses()
    {
        return $this->hasMany(Adresse::class);
    }
}
