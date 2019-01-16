# Exercise 1: Written Exercises
1. Explain why do we want sometimes to use `setImmediate` instead of using `setTimeout`?
2. Explain the difference between `process.nextTick` and `setImmediate`?
3. Name 10 core modules that Node provides by default.
# Exercise 2: Coding exercise
Complete the necessary Node code to make `even()` and `odd()` methods work asynchronously:

	// your Node code here...
	console.log('start');
	[1,2,3,4,5,6,7,8].even();
	[1,2,3,4,5,6,7,8].odd();
	console.log('end');
Test your code in Node.JS CLI, Output:

	// start
	// end
	// [2,4,6,8]
	// [1,3,5,7]