# Exercise 1
Write a Reactive Node program that has a function checkSystem() that checks if the system memory size is at least 4 GB and the processor has more than 2 cores (use os core module).

1. When you call the function, you should receive an immediate message onthe console “**Checking your system…**”.
2. If the system doesn’t have enough memory we should print a message tothe console: “**This app needs at least 4 GB of RAM**”
3. If the system doesn’t have at least 2 cores, print this message to theconsole: “**Processor is not supported**”
4. If the system has enough specs, print the following message “**System ischecked successfully.**”
# Exercise 2
Create a Reactive HTTP server that serves simple .txt files, where the file name is passed in the request as query parameter.

The file path is provided in the URL like this: 

	http://localhost:4000/?url=path/to/my/file.txtReading 

the file should be in a separate child process.