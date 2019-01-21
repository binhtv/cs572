Create an Express application that implements a Rest API for an entitycalled **grades**:

	[{id: 1, name: "Asaad Saad", course: "CS572", grade: 95]

Write routes for all CRUD operations and use the proper HTTP verbs(GET one and all, POST, PUT, and DELETE) – Test with [Postman](https://www.getpostman.com/)

• Your API accepts and returns JSON data.

• Log all requests to a file _access.log_ using [morgan](https://www.npmjs.com/package/morgan) middleware.

• Write a custom middleware to verify if a user passes a valid JSON.

• Accept cross domain XHR requests using [cors](https://github.com/expressjs/cors) middleware.