<?php namespace Anomaly\CountyFieldType;

use Anomaly\SelectFieldType\SelectFieldType;

class CountyFieldType extends SelectFieldType
{
    protected $inputView = 'anomaly.field_type.county::input';

    protected $filterView = 'anomaly.field_type.text::input';

    /**
     * The field type config.
     *
     * @var array
     */
    protected $config = [
        'mode'    => 'dropdown',
        'depends_on' => 'state',
        'handler' => 'Anomaly\SelectFieldType\SelectFieldTypeOptions@handle',
    ];
}
