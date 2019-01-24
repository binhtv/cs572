db.zipcodes.aggregate([{
	$group: {
		_id: {state: '$state', city: '$city'},
		pop: {$sum: '$pop'}
	},
	$sort: {
		'_id.state': 1,
		pop: -1
	},
	$group: {
		_id: { state: '$_id.state'},
		city: { $last: '$_id.city'},
		pop: { $last: '$pop'}
	},
	$sort: {
		_id: 1
	}
}])