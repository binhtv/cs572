const dns = require('dns');

const options = {
	ttl: true
}
/**
 * Use `dns` core module, `resolve4()`
 */
dns.resolve4('www.mum.edu', options, (err, addresses) => {
	if (err == null && addresses) {
		addresses.forEach(ip => console.log(ip.address));
	} else {
		console.log(`${err.hostname} could not be resolved.`);
	}
});

/**
 * Rewrite the code above and convert the callback function to a `Promise` object.
 */
const { promisify } = require('util');
const resolve4WithPromise = promisify(dns.resolve4);
resolve4WithPromise('www.mum.edu', options)
	.then(addresses => {
		if(addresses) {
			addresses.forEach(ip => console.log(ip.address));
		}
	})
	.catch(err => console.log(`${err.hostname} could not be resolved.`));

/**
 * Rewrite the code above and convert the promise to `async/await` block.
 */
async function resolve4WithAwait() {
	try {
		let addresses = await resolve4WithPromise('www.mum.edu', options);
		if(addresses) {
			addresses.forEach(ip => console.log(ip.address));
		}
	} catch(err) {
		console.log(`${err.hostname} could not be resolved.`)
	}
}
resolve4WithAwait();
console.log('Done after async/await but should be printed first.');