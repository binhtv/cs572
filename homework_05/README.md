# Exercise
Create an Express application that will accept a GET request to route/users and send a response with users json data.

• Use JSON data from URL https://randomuser.me/api/?results=10

• Fetch the data using (`axios`) module and use `Async/Await`.

• Your application should run fluently behind any proxy without revealing theframework name to clients, proxy should not cache the response.

• Your route should be case sensitive and strict.

• Send standard pagination options in the response headers.

• Allow the response to be cached for one day if no change occur at the server.