const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const helmet = require('helmet');
const jsonCheck = require('./jsonCheckMiddleware');

const app = express();
const accessLog = fs.createWriteStream('./access.log', { flags: 'a' });

//Apply middlewares
app.use(helmet());
app.use(cors({
	origin: '*',
	methods: 'GET, POST, PUT, DELETE',
	allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(morgan('combined', { stream: accessLog } ));
// app.use((req, resp, next) => {
// 	jsonCheck(req, resp, next);
// });
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));
app.use((req, resp, next) => {
	if (req.method === 'POST' && (!req.body || req.body === {})) {
		resp.status(400).end();
	}

	return next();
});
app.use('/api', require('./myRoutes'));
app.use((err, req, resp, next) => {
	console.log(err.stack);
	resp.status(500).send('Something went wrong!');
});

app.listen(3000, () => console.log('Listening at 3000'));