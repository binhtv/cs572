const os = require('os');

function checkSystem() {
	console.log('Checking your system...');
	const freeMem = os.freemem();
	const cores = os.cpus();
	if(freeMem < 4 * 1024 * 1024 * 1024) {
		console.log('This app needs at least 4 GB of Ram');
	} else if(cores.length < 4) {
		console.log('Processor is not supported')
	} else {
		console.log('System is checked successfully.');
	}
}

module.exports = checkSystem;