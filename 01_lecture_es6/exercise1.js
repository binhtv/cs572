/**
 * Define a filterWords function on the String object. 
 * The function accepts anarray of strings that specifies a list of banned words. 
 * The function returns thestring after replacing all the banned words with stars.
 * console.log("This house is nice!".filterWords(['house', 'nice'])); 
 * //"This *** is ***!"134
 * Solve the exercise above in 4 different ways using:
 * • Use ES6 features, not allowed to use for-loop
 * • Promises
 * • Async/Await
 * • Observables
 */

/**
 * ************************************************
 * Use ES6 Features, not allowed to use for-loop  *
 * ************************************************
 */
String.prototype.filterWords = function (words = []) {
	let thisString = this;
	words.map(w => {
		let regex = new RegExp(w, 'g');
		thisString = thisString.replace(regex, '***');
	});

	return thisString;
}

console.log('This house is nice!'.filterWords(['house', 'nice']));

/**
 * ************************************************
 * Promises *
 * ************************************************
 */

String.prototype.filterWordsWithPromises = function (words = []) {
	let thisString = this;
	return new Promise(function (resolve, reject) {
		if (words === null || words === undefined) {
			reject('Filter words must not be empty');
		} else {
			words.map(w => {
				let regex = new RegExp(w, 'g');
				thisString = thisString.replace(regex, '***');
			});
			resolve(thisString);
		}
	});
}

console.log('Before calling filterWordsWithPromises');
'This house is nice!'.filterWordsWithPromises(['house', 'nice'])
	.then(str => console.log(str))
	.catch(err => console.error(err));
console.log('After calling filterWordsWithPromises but should be printed before it');

/**
 * ************************************************
 * Async/Await *
 * ************************************************
 */
async function executeFilter() {
	try {
		console.log('Async/Await: Before calling filterWordsWithPromises');
		let filteredString = await 'This house is nice!'.filterWordsWithPromises(['house', 'nice']);
		console.log(filteredString);
		console.log('Async/Await: After calling filterWordsWithPromises');
	} catch (err) {
		console.error(err);
	}
}
executeFilter();
console.log('Finish Async/Await block');

/**
 * ************************************************
 * Observables *
 * ************************************************
 */
String.prototype.filterWordsWithObservable = function(words = []) {
	let thisString = this;
	const { Observable } = rxjs;
	const obs$ = Observable.create(function(observer) {
		words.map(w => {
			let regex = new RegExp(w, 'g');
			thisString = thisString.replace(regex, '***');
		});
		observer.next(thisString);
		setTimeout(() => observer.complete(), 3000);
	});
	
	return obs$;
}

const subscription = 'This house is nice!'.filterWordsWithObservable(['house', 'nice'])
											.subscribe(filteredString => console.log(filteredString),
														err => console.error(err),
														() => console.info('Done after 3 secs'));