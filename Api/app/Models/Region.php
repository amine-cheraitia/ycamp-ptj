<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Region extends Model
{
    use HasFactory;
    protected $fillable = ['id', 'region_name'];

    public function departements(): HasMany
    {
        return $this->hasMany(Department::class);
    }
}
