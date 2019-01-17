const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();
server.on('request', (req, res) => {
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});

	const bigFilePath = path.join('/Users/binhtran/Downloads', 'VMware-Fusion-11.0.2-10952296.dmg');
	//Read file synchronously
	const content = fs.readFileSync(bigFilePath, 'utf8');
	res.write(content);
	res.write('Read file completed')

	//Read file asynchronously
	// fs.readFile(bigFilePath, 'utf8', (err, data) => {
	// 	console.log('Read file completed');
	// });

	//Read file as stream
	// const readable = fs.createReadStream(bigFilePath, { encoding: 'utf8', highWaterMark: 16 * 1024 * 1024 });
	// readable.on('data', function(chunk) {
	// 	console.log(chunk.length);
	// });

	res.write('Playing with fs');
	res.end();
});
server.listen(4000, () => console.log('Listening on port 4000'));