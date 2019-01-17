# Exercise 1
Create a simple Node script that converts 'www.mum.edu' domain name to the equivalent IP address.

1. Use `dns` core module, `resolve4()`
2. Rewrite the code above and convert the callback function to a `Promise` object.
3. Rewrite the code above and convert the promise to `async/await` block.
# Exercise 2
• Build a pseudo-class named "Gym" that emits a "boom" event every 1 second.

• Write a script that creates an instance of "Gym" and bind tothe "boom" event, printing "Athlete is working out" everytime it gets one.
# Exercise 3
• Create a web server that's going to send a response of big file (biggerthen 200MB) to any client that sends a request to your specifiedserver:port.

• Solve this question in many different ways and inspect the loadingtime in the browser and send many requests at the same time toobserve performance differences, write down your observations

	• Using `readFileSync`

	• Using `readFile`

	• Using `streams`