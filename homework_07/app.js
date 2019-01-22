const express = require('express');
const db = require('./exercise2');

const app = express();
app.get('/secret', (req, resp) => {
	db.getDecryptedMessage((err, message) => {
		if(err !== null) {
			resp.status(200).json(err.message);
		} else {
			resp.status(200).json(message);
		}
	});
});
db.connect((connected) => {
	if(connected) {
		console.log('Connected successfully to db server');
		app.listen(3000, () => console.log('Listensing to port 3000'));
	} else {
		console.log('Having trouble to talk to database');
		process.exit(1);
	}
});