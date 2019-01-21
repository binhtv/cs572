function getPostRequest(req) {
	return new Promise((resolve, reject) =>  {
		let body = '';
		req.on('data', function(data) {
			body += data;
		});
		req.on('end', () => {
			try {
				body = JSON.parse(body);
				resolve(body);
			} catch(err) {
				reject('Not a valid json');
			}
		});
	});
}

async function jsonCheck(req, resp, next) {
	if(req.headers['content-type'] === 'application/json' && req.method === 'POST') {
		const body = await getPostRequest(req);
		if(body === false) {
			resp.status(400).end();
		}

		return next();
	} else {
		return next();
	}
}

module.exports = jsonCheck;