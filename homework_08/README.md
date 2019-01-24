# Exercise 1

Download `restaurants.json` and import into your mongodb by using mongoimport

	mongoimport -h [your.hos.name:port] --db [your.db] --collection [your.collection] -u [username] --file [path.to.restaurants.json]

The documment has the structure as bellow: 

	{
		"_id" : ObjectId("5c4776940960f89463a409ee"),
		"address" : {
			"building" : "8825",
			"coord" : [
				-73.8803827,
				40.7643124
			],
			"street" : "Astoria Boulevard",
			"zipcode" : "11369"
		},
		"district" : "Queens",
		"cuisine" : "American ",
		"grades" : [
			{
				"date" : ISODate("2014-11-15T00:00:00Z"),
				"grade" : "Z",
				"score" : 38
			},
			{
				"date" : ISODate("2014-05-02T00:00:00Z"),
				"grade" : "A",
				"score" : 10
			},
			{
				"date" : ISODate("2013-03-02T00:00:00Z"),
				"grade" : "A",
				"score" : 7
			},
			{
				"date" : ISODate("2012-02-10T00:00:00Z"),
				"grade" : "A",
				"score" : 13
			}
		],
		"name" : "Brunos On The Boulevard",
		"restaurant_id" : "40356151"
	}


Write MongoDB queries (see exericise 1) as requirements

# Exercise 2
Revisit Homework 07 and write down your suggestions to tune your Library application performance. (Indexes)
# Exercise 3
1. Write an Express Restful API that uses MongoDB to Insert location points as following:
   
   		{ name, category, location: [longitude, latitude]
2. Look for some locations around MUM campus using Google Maps and use Postman to insert them into your MongoDB collection.
3. Add the necessary indexes to search by location.
4. Write another Restful API that will **Find** the nearest 3 points to MUM location (lat: 41.017654, long: -91.9665342), your search criteria must include a category and an optional location name.

_Note that Google Maps will give you coordination as [Lat, Long]. While MongoDB requires coordination to be saved as [Long, Lat]_

_You can either insert your sample data or use [exercise3.json](https://github.com/binhtv/cs572/blob/master/homework_08/exercise3.json)_ then using `mongoimport`