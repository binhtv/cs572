const MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');
const dotenv = require('dotenv');

dotenv.config();
const {
	DB_USER: user,
	DB_PASS: password,
	DB_HOST: hostname,
	DB_NAME: database
} = process.env;
const client = new MongoClient(`mongodb://${user}:${password}@${hostname}/${database}`, {
	useNewUrlParser: true
});

const state = {
	db: null
}

exports.connect = (callback) => {
	if (state.db !== null) {
		console.log('Reusing db connection');
		return callback(true);
	} else {
		client.connect(err => {
			if (err !== null) {
				console.log(err);
				return callback(false);
			}

			state.db = client.db(database);
			return callback(true);
		});
	}
}

exports.close = () => {
	state.db = null;
	client.close();
}

exports.insertNewLocation = (location, callback) => {
	const collection = state.db.collection('homework8');
	if (typeof callback === 'function') {
		collection.save(location, callback);
	} else {
		collection.save(location);
	}
}

exports.findNearLocation = (query, callback) => {
	const {
		category,
		name,
		geoInfo
	} = query;
	const queryObj = {
		category,
		location: {
			$near: geoInfo
		}
	}
	if(name !== null && name !== undefined) {
		queryObj.name = name;
	}
	const collection = state.db.collection('homework8');
	if (typeof callback === 'function') {
		collection.find(queryObj).limit(3).toArray(callback);
	}
}