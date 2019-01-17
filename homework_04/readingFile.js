const fs = require('fs');

function readFile(path) {
	console.log(`Reading File: ${path}`);
	const readable = fs.createReadStream(path, { encoding: 'utf8', highWaterMark: 16 * 1024 });	
	readable.on('data', (chunk) => {
		process.send({ code: 1, data: chunk });
	});
	readable.on('end', () => {
		console.log('No more data to read');
		process.send({ code: 0, data: 'Reading finished' });
	})

	readable.on('error', (err) => {
		console.log(err);
		process.send({ code: 0, data: 'Reading error!' });
	})
}

process.on('message', (filePath) => {
	readFile(filePath);
});

