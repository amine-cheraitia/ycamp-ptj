<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @mixin IdeHelperRegion
 */
class Region extends Model
{
    use HasFactory;
    protected $fillable = ['id', 'region_name'];

    public function departments(): HasMany
    {
        return $this->hasMany(Department::class);
    }
}
