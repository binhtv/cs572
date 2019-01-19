const express = require('express');
const axios = require('axios');

const app = express();

//Using axios to get data from API with Async/Await block
async function getUsers(req, resp) {
	try {
		let users = await axios.get('https://randomuser.me/api/?results=10');
		resp.status(200);
		resp.set('Content-Type', 'application/json');
		//Set cache response by using Cache-Control or Expires
		//Cache-Control private means this cache on client only, not on any intermediate servers like proxy
		resp.set('Cache-Control', 'private max-age=3600');
		//resp.set('Expires', 'Sat, 19 Jan 2019 14:00:00 GMT');
		//Set Link on header for pagination
		const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
		const pages = [`<${fullUrl}?page=1>;rel="first"`, 
						`<${fullUrl}?page=1>;rel="prev"`,
						`<${fullUrl}?page=1>;rel="next"`,
						`<${fullUrl}?page=1>;rel="last"`];
		resp.set('Link', pages.join(','));

		resp.send(users.data);
		resp.end();
	} catch (err) {
		resp.status(500);
		resp.end();
	}
}

//Forward client information (ip) to server even if the server stand behind a proxy
app.enable('trust proxy');
//Prevent client from knowing server framework
app.disable('x-powered-by');
//Route should be case sensitive and strict
app.enable('strict routing');
app.enable('case sensitive routing');
//Define GET Route /users
app.get('/users', getUsers);
app.listen(3000);