# Exercise

This [JSON file](https://github.com/binhtv/cs572/blob/master/homework_09/zips.json) contains a list of all the zip codes in the US, Import it into MongoDB using **mongoimport**.

Document structure

	{
		"_id" : "01002",
		"city" : "CUSHMAN",
		"loc" : [
			-72.51565,
			42.377017
		],
		"pop" : 36963,
		"state" : "MA"
	}

**Use the Aggregation Framework to**:
1. Find all the zip codes in Iowa state.
2. Find all the zip codes with a population more than 1000.
3. Find all cities that have more than one zip code, sort the results based by state and city name.
4. Display the least populated city in each state