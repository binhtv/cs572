## Import command

	mongoimport -h [host:port] -u [user] --db [database] --collection [collection] --file [data file]
## Query
1. Find all the zip codes in Iowa state.
   
		db.zipcodes.find({state: 'IA'})

		result count: 922
2. Find all the zip codes with a population more than 1000.
   
		db.zipcodes.find({pop: {$gt: 1000}})

		result count: 21367
3. Find all cities that have more than one zip code, sort the results based by state and city name.
   
		db.zipcodes.aggregate([{
			"$group": {
				"_id": {
					"state": "$state",
					"city": "$city"
				},
				"zip_count": {
					"$sum": 1
				}
			}
			}, {
				"$match": {
					"zip_count": {
						"$gt": 1
					}
				}
			}, {
				"$sort": {
					"_id.state": 1,
					"_id.city": 1
				}
			}, {
				"$project": {
					"_id": 0,
					"state": "$_id.state",
					"city": "$_id.city",
					"zip_count": "$zip_count"
				}
			}])
4. Display the least populated city in each state

		db.zipcodes.aggregate([{
			$group: {
				_id: {
					state: '$state',
					city: '$city'
				},
				pop: {
					$sum: '$pop'
				}
			}
			}, {
				$sort: {
					'_id.state': 1,
					pop: -1
				}
			},
			{
				$group: {
					_id: {
						state: '$_id.state'
					},
					city: {
						$last: '$_id.city'
					},
					pop: {
						$last: '$pop'
					}
				}
			},
			{
				$sort: {
					_id: 1
				}
			}
		])
