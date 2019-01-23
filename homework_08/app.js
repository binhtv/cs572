const express = require('express');
const db = require('./exercise3');

const app = express();
app.use(express.urlencoded({
	extended: true
}));

app.post('/api/create-location', (req, resp) => {
	let location = {};
	location.name = req.body.name;
	location.category = req.body.category;
	location.location = [parseFloat(req.body.longitude), parseFloat(req.body.latitude)];
	db.insertNewLocation(location, (err, result) => {
		if (err !== null) {
			resp.status(200).json({
				code: 0
			});
		} else {
			resp.status(200).json({
				code: 1
			});
		}
	});
});

app.get('/api/near-MUM', (req, resp) => {
	const MUM_LAT = 41.017654;
	const MUM_LONG = -91.9665342;
	const category = req.query.category;
	const name = req.query.name;
	if (!category) {
		return resp.status(400).json({
			code: 0,
			err: 'Please specify category'
		});
	}

	db.findNearLocation({
		category,
		name,
		geoInfo: [MUM_LONG, MUM_LAT]
	}, (err, data) => {
		if (err) {
			return resp.status(200).json({
				code: 0
			});
		} else {
			return resp.status(200).json(data);
		}
	});
})

db.connect((connected) => {
	if (connected) {
		console.log('Connected successfully to db server');
		app.listen(3000, () => console.log('Listensing to port 3000'));
	} else {
		console.log('Having trouble to talk to database');
		process.exit(1);
	}
});