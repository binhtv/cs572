const http = require('http');
const { fork } = require('child_process');
const { Subject } = require('rxjs');
const url = require('url');
const path = require('path');

const subject = new Subject();
const server = http.createServer();

subject.subscribe(onFileReading);
subject.subscribe(onReadingComplete);

server.on('request', (req, resp) => {
	const urlObj = url.parse(req.url, true);
	const fileName = urlObj.query ? urlObj.query.url : '';
	if(fileName) {
		const childProcess = fork(path.join(__dirname, 'readingFile.js'));
		childProcess.send(fileName);
		childProcess.on('message', (data) => {
			subject.next({req, resp, data});
		});
	} else {//empty file name
		resp.write('File name is empty');
		resp.end();
	}
});

server.listen(3000, () => console.log('Server is listening on port 3000'));


function onFileReading(obj) {
	if(obj.data.code === 1) {
		obj.resp.write(obj.data.data);
	}
}

function onReadingComplete(obj) {
	if(obj.data.code === 0) {
		console.log('End');
		obj.resp.write(obj.data.data);
		obj.resp.end();
	}
}