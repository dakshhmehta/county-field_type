<?php

namespace Anomaly\CountyFieldType\Http\Controllers;

use Illuminate\Contracts\Config\Repository;

class CountyFieldTypeController {
	public function choose($state, Repository $config){
		$counties = (array) $config->get('anomaly.field_type.county::list.'.$state);
		return response()->json($counties);
	}
}