const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');

const app = express();
const accessLog = fs.createWriteStream('./access.log', { flags: 'a' });

//Apply middlewares
app.use(cors({
	origin: '*',
	methods: 'GET, POST, PUT, DELETE',
	allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(morgan('combined', { stream: accessLog } ));
app.use(function(req, resp, next) {
	if(req.headers['content-type'] === 'application/json' && req.method === 'POST') {
		let body = '';
		req.on('data', function(data) {
			body += data;
		});
		req.on('end', () => {
			try {
				body = JSON.parse(body);
				console.log(body);
				return next();
			} catch(err) {
				console.log(err);
				resp.status(400).end();
			}
		});
	} else {
		return next();
	}
});
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));
app.use('/api', require('./myRoutes'));

app.listen(3000, () => console.log('Listening at 3000'));