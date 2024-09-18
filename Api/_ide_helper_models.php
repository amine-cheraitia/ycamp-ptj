<?php

// @formatter:off
// phpcs:ignoreFile
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string $adress
 * @property string $coordinate
 * @property string $longitude
 * @property string $latitude
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $city_id
 * @method static \Database\Factories\AdresseFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Adresse newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Adresse newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Adresse query()
 * @method static \Illuminate\Database\Eloquent\Builder|Adresse whereAdress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Adresse whereCityId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Adresse whereCoordinate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Adresse whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Adresse whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Adresse whereLatitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Adresse whereLongitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Adresse whereUpdatedAt($value)
 * @mixin \Eloquent
 */
	#[\AllowDynamicProperties]
	class IdeHelperAdresse {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string $city_name
 * @property string $zip_code
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $departement_id
 * @method static \Database\Factories\CityFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|City newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|City newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|City query()
 * @method static \Illuminate\Database\Eloquent\Builder|City whereCityName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|City whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|City whereDepartementId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|City whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|City whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|City whereZipCode($value)
 * @mixin \Eloquent
 */
	#[\AllowDynamicProperties]
	class IdeHelperCity {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string $department_name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $region_id
 * @property-read \App\Models\Region|null $region
 * @method static \Database\Factories\DepartmentFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Department newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Department newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Department query()
 * @method static \Illuminate\Database\Eloquent\Builder|Department whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Department whereDepartmentName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Department whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Department whereRegionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Department whereUpdatedAt($value)
 * @mixin \Eloquent
 */
	#[\AllowDynamicProperties]
	class IdeHelperDepartment {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string|null $place_name
 * @property string|null $observation_1
 * @property string|null $observation_2
 * @property string|null $ground_type
 * @property int|null $lighting
 * @property int|null $transport_acces
 * @property int|null $disabled_acces
 * @property int|null $sanitary
 * @property float|null $shower
 * @property string|null $web_link
 * @property string $adresse_id
 * @property int $type_sports_field_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\FieldFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Field newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Field newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Field query()
 * @method static \Illuminate\Database\Eloquent\Builder|Field whereAdresseId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Field whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Field whereDisabledAcces($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Field whereGroundType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Field whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Field whereLighting($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Field whereObservation1($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Field whereObservation2($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Field wherePlaceName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Field whereSanitary($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Field whereShower($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Field whereTransportAcces($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Field whereTypeSportsFieldId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Field whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Field whereWebLink($value)
 * @mixin \Eloquent
 */
	#[\AllowDynamicProperties]
	class IdeHelperField {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string|null $region_name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Department> $departements
 * @property-read int|null $departements_count
 * @method static \Database\Factories\RegionFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Region newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Region newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Region query()
 * @method static \Illuminate\Database\Eloquent\Builder|Region whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Region whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Region whereRegionName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Region whereUpdatedAt($value)
 * @mixin \Eloquent
 */
	#[\AllowDynamicProperties]
	class IdeHelperRegion {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string $type_of_sport_field
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\TypeSportsFieldFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|TypeSportsField newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TypeSportsField newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TypeSportsField query()
 * @method static \Illuminate\Database\Eloquent\Builder|TypeSportsField whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TypeSportsField whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TypeSportsField whereTypeOfSportField($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TypeSportsField whereUpdatedAt($value)
 * @mixin \Eloquent
 */
	#[\AllowDynamicProperties]
	class IdeHelperTypeSportsField {}
}

namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property mixed $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 * @mixin \Eloquent
 */
	#[\AllowDynamicProperties]
	class IdeHelperUser {}
}

namespace App\Models{
/**
 * 
 *
 * @method static \Database\Factories\ZipcodeFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Zipcode newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Zipcode newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Zipcode query()
 * @mixin \Eloquent
 */
	#[\AllowDynamicProperties]
	class IdeHelperZipcode {}
}

