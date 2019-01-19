const express = require('express');
const axios = require('axios');

const app = express();

//Using axios to get data from API with Async/Await block
async function getUsers(req, resp) {
	try {
		let users = await axios.get('https://randomuser.me/api/?results=10');
		resp.status(200);
		resp.set('Content-Type', 'application/json');
		resp.send(users.data);
		resp.end();
	} catch (err) {
		resp.status(500);
		resp.end();
	}
}

//Prevent client from knowing server framework
app.disable('x-powered-by');
//Route should be case sensitive and strict
app.enable('strict routing');
app.enable('case sensitive routing');
//Define GET Route /users
app.get('/users', getUsers);
app.listen(3000);