1. The following is what I based on NodeJs documentation to answer this question. This is a little different from your slides
   
	`setImmediate()` and `setTimeout()` are similar, but behave in different ways.

   	* `setImmediate()` is designed to execute a script once the current poll phase completes
	
	* `setTimeout()` schedules a script to be run after a minimum threshold in ms has elapsed.

	On main module, the order in which the timers are executed is non-deterministic on main module while  within an I/O cycle, the immediate callback is always executed first. **So sometime you want to execute some callbacks before any timers within an I/O cycle just use `setImmediate()`**

2. Difference between `process.nextTick()` and `setImmediate()`
   
   * `process.nextTick()` fires immediately on the same phase

   * `setImmediate()` fires on the following 'tick' of the event loop
   
   
3. 10 core modules that Node provides by default
   
   1. `buffer` to handle binary data
   2. `crypto` to handle OpenSSL cryptographic functions
   3. `dns` to do DNS lookups and name resolution functions
   4. `fs` to handle the file system
   5. `http`(`https`) to make Node.js act as an HTTP\/HTTPS server
   6. `os` provides information baout the operation system
   7. `querystring` to handle URL query strings
   8. `stream` to handle streaming data
   9. `util` to access utility functions
   10. `zlib` to compress and decompress files