Array.prototype.even = function() {
	let thisArray = this;
	(new Promise((resolve, reject) => {
		if(thisArray === undefined || thisArray === null) {
			reject('null or undefined is not an array.');
		} else {
			resolve(thisArray.filter(item => item % 2 === 0));
		}
	})).then(arr => console.log(arr))
		.catch(err => console.log(err));
}

Array.prototype.odd = function() {
	let thisArray = this;
	(new Promise((resolve, reject) => {
		if(thisArray === undefined || thisArray === null) {
			reject('null or undefined is not an array.');
		} else {
			resolve(thisArray.filter(item => item % 2 !== 0));
		}
	})).then(arr => console.log(arr))
		.catch(err => console.log(err));
}

console.log('start');
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log('end');