# Try read big file (> 200Mb) with many ways and see the differences
1. Using `readFileSync`
    
        const content = fs.readFileSync(bigFilePath, 'utf8');
        res.write(content);
        res.write('Read file completed')
   
   The whole file content will be loaded into memory so this will cost significant amount of memory.
   
   The browser will wait for the complete file reading in order to recieve the response because this file reading is synchronously
   
   Loading until the whole file is completely read
   ![Browser loading](https://user-images.githubusercontent.com/7671024/51320266-ea168500-1a24-11e9-8c5b-1d528cffcb99.png)
   Consume much memory
   ![Cost memory](https://user-images.githubusercontent.com/7671024/51320314-07e3ea00-1a25-11e9-83aa-88463088fc7c.png)
2. Using `readFile`
   
        fs.readFile(bigFilePath, 'utf8', (err, data) => {
		    console.log('Read file completed');
	    });
    The whole file content will be loaded into memory like the above way

    The browser will receive the response right away because this file reading is asynchronously. So no long waiting browser loading

3. Using `stream`
   
        const readable = fs.createReadStream(bigFilePath, {encoding: 'utf8',
                highWaterMark: 16 * 1024 * 1024 });
	    readable.on('data', function(chunk) {
		    console.log(chunk.length);
	    });
    The file will be divided into small chunks, each chunk will be read and loaded into memory. So no significant memory consumption occurs. The chunk size is configurable by adding options `highWaterMark` (in bytes) to `fs.createReadStream`

    Browser will receive the response immediately because using `stream` to read file is asynchronous

    Memory consumption is the node process memory plus chunk size. Too small compared to the above reading methods
    ![memory consumption](https://user-images.githubusercontent.com/7671024/51321019-4b3f5800-1a27-11e9-9a77-564cbe8582b5.png)