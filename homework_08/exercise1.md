Note that all the following queries are written on Mongo Shell

1. Display all the documents

		db.restaurants.find({})
2. Display the fields `restaurant_id`, `name`, `district` and `cuisine` for all the documents in the collection restaurant
   
		db.restaurants.find({}, {restaurant_id: 1, name: 1, district: 1, cuisine: 1})
3. Display the fields `restaurant_id`, `name`, `district` and `cuisine`, but exclude the field `_id`
   
		db.restaurants.find({}, {_id: 0, restaurant_id: 1, name: 1, district: 1, cuisine: 1})
4. Display the fields `restaurant_id`, `name`, `district` and `zipcode`, but exclude the field `_id`

		db.restaurants.find({}, {_id: 0, restaurant_id: 1, name: 1, district: 1, 'address.zipcode': 1})
5. Display all the restaurant which is in the district Bronx
	
		db.restaurants.find({ district: "Bronx" })
		OR
		db.restaurants.find({ district: { $eq: "Bronx" } })

6. Display the first 5 restaurant which is in the district Bronx

		db.restaurants.find({ district: "Bronx" }).limit(5)
7. Display the next 5 restaurants afters kipping first 5 which are in the district Bronx
		
		db.restaurants.find({ district: "Bronx" }).skip(5)limit(5)
8. Find the restaurants which locates in coord value less than -95.754168
   
   Use `$lt` operator
   	
	   db.restaurants.find({ 'address.coord': {$lt:-95.754168}})

	   result count: 3
9.  Find the restaurants that does not prepare any cuisine of 'American' and their grade score more than 70 and coord value less than -65.754168
    
	Due to there are spaces in American cuisine, so we need to update first
	
		db.restaurants.update({cuisine: 'American '}, {$set: {cuisine: 'American'}}, {multi: true})
	Then write the query
		
		db.restaurants.find({cuisine: {$ne: 'American'}, 'grades.score': {$lte: 70}, 'address.coord': {$lt: -65.754168}})
		
		result count: 2514
10. Find the restaurant Id, name, district and cuisine for those restaurants which contains 'Wil' as first three letters for its name
	
		db.restaurants.find({name: {$regex: '^wil', $options: 'i'}}, { _id: 0, restaurant_id: 1, district: 1, cuisine: 1});

		result count: 3 ("Wilken'S Fine Food", "Wild Asia", "Wilbel Pizza")
11. Find the restaurant Id, name, district and cuisine for those restaurants which contains 'ces' as last three letters for its name
    
		db.restaurants.find({name: {$regex: 'ces$', $options: 'i'}}, {_id: 0, restaurant_id: 1, district: 1, cuisine: 1})

		result count: 6
12. Find the restaurant Id, name, district and cuisine for those restaurants which contains 'Reg' as three letters somewhere in its name
    
		db.restaurants.find({name: {$regex: 'Reg', $options: 'i'}}, {_id: 0, restaurant_id: 1, district: 1, cuisine: 1})

		result count: 7
13. Find the restaurants which belongs to the district Bronx and prepared either American or Chinese dish
	
		db.restaurants.find({district: {$eq: 'Bronx'}, cuisine: {$in: ['American', 'Chinese']}})

		result count: 91
14. Write a MongoDB query to find the restaurant Id, name, district and cuisine for those restaurants which belongs to the district Staten Island or Queens or Bronx or Brooklyn.
    
		db.restaurants.find({district: {$in: ['Staten Insland', 'Queens', 'Bronx', 'Brooklyn']}}, {_id: 0, restaurant_id: 1, name: 1, district: 1, cuisine: 1})

		result count: 1731
15. Write a MongoDB query to find the restaurant Id, name, district and cuisine for those restaurants which are not belonging to the district Staten Island or Queens or Bronx or Brooklyn.

		db.restaurants.find({district: {$nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}}, {_id: 0, restaurant_id: 1, name: 1, district: 1, cuisine: 1})

		result count: 1883

16. Write a MongoDB query to find the restaurant Id, name, district and cuisine for those restaurants which achieved a score which is not more than 10
    
		db.restaurants.find({'grades.score': {$lte: 10}}, {_id: 0, restaurant_id: 1, name: 1, district: 1, cuisine: 1})

		result count: 3529
17. Write a MongoDB query to find the restaurant Id, name, address and geographical location for those restaurants where 2<sup>nd</sup> element of coord array contains a value which is more than 42 and up to 52.
    
		db.restaurants.find({'address.coord.1': {$gt: 42, $lte: 52}}, {_id: 0, restaurant_id: 1, name: 1, address: 1})
		
		result count: 7
18. Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns.
    
		db.restaurants.find().sort({name: 1})
19. Write a MongoDB query to arrange the name of the restaurants in descending order along with all the columns.
		
		db.restaurants.find().sort({name: -1})
20. Write a MongoDB query to arrange the name of the cuisine in ascending order and for those same cuisine district should be in descending order

		db.restaurants.find().sort({cuisine: 1, district: -1})
21. Write a MongoDB query to know whether all the addresses contains the street or not.
    
		db.restaurants.find({'address.street': {$exists: true}}).count()
		
		result count: 3772 == number of documents. So all restaurants has street in address

		db.restaurants.find({'address.street': {$exists: true}}).count()

		result count: 0 so all restaurants has street in address
22. Write a MongoDB query which will select all documents in the restaurants collection where the coord field value is `Double`.
    
		db.restaurants.find({$and: [{'address.coord.0' : { $type: 1}}, {'address.coord.1' : { $type: 1}}]});
23. Write a MongoDB query to find the restaurant name, district,longitude and latitude and cuisine for those restaurants which contains 'Mad' as first three letters of its name.
    
		db.restaurants.find({name: {$regex: '^Mad', $options:'i'}}, {_id: 0, name: 1, district: 1, 'address.coord': 1, cuisine: 1})

		result count: 8