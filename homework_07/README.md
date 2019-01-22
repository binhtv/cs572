# Exercise – Schema Design
Create a NoSQL design model for an application to manage a library,taking into consideration the following requirements:

• Books have an ISBN number and are categorized by author andtagged by keywords to facilitate search

• Books can be borrowed by students, so the librarian will be able tocheck all borrowed books and their return date so he may contactstudents who are late returning their books.

# Exercise – Reveal The Secret Message!
1. Using Mongo Shell, Create a collection **homework7** and add one document to it with the following data (find it in Sakai):
   		
		{ message: "ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03" }
2. Write a `Node` application using `Express` and **findOne()** to read the document from MongoDB, decrypt the message (use [crypto](https://nodejs.org/api/crypto.html)),  It’s encrypted with **aes256** algorithm and the following key: **asaadsaad**
3. Send the decrypted message as JSON object in the response to aroute (_/secret_).
4. Upload your code to Github (without dependencies)