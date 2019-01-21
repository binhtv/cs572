const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const jsonCheck = require('./jsonCheckMiddleware');

const app = express();
const accessLog = fs.createWriteStream('./access.log', { flags: 'a' });

//Apply middlewares
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
app.use('/api', require('./myRoutes'));

app.listen(3000, () => console.log('Listening at 3000'));