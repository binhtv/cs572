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
const client = new MongoClient(`mongodb://${user}:${password}@${hostname}/${database}`, { useNewUrlParser: true });

const state = {
	db: null
}

exports.connect = (callback) => {
	if(state.db !== null) {
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

exports.getDecryptedMessage = (callback) => {
	const algorithm = 'aes256'
	const pass = 'asaadsaad';
	const collection = state.db.collection('homework7');
	const message = collection.findOne({}, {_id: 0});

	message.then(data => {
		const decipher = crypto.createDecipher(algorithm, pass);
		const decrypted = decipher.update(data.message, 'hex', 'utf8') + decipher.final('utf8');
		callback(null, decrypted);
	}).catch(err => callback(err, null));
}
