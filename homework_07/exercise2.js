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

client.connect(err => {
	if (err !== null) {
		console.log(err);
		return;
	}

	console.log('Connected successfully to server');
	const algorithm = 'aes256'
	const pass = 'asaadsaad';
	const db = client.db(database);
	const collection = db.collection('homework7');
	const message = collection.findOne({}, {_id: 0});

	message.then(data => {
		const decipher = crypto.createDecipher(algorithm, pass);
		const decrypted = decipher.update(data.message, 'hex', 'utf8') + decipher.final('utf8');
		console.log(decrypted);
	}).catch(err => console.log(err));

	client.close();
});