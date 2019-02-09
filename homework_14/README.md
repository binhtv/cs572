# Exercise
* Create a `Data-Driven` signup and sign in forms and add async validation to your form that emails are unique.
* Support the app with a `Restful API` using express that will generate an ID token and send it to your `Angular` app (to besaved in the `localStorage`). Password must be encrypted(use `bcrypt` and `jsonwebtoken`)
* Create a Rest API to _/protected_ and write a middleware toverify and only allow tokenized requests (Authentication Bearer header) to pass through. This should send back asecret JSON object.
* Intercept an Angular Route _/protected_ and attach the ID token in the request header, so the API will approve the request, and create a `Guard` to only allow users with a valid ID token to pass through and see the secret JSON.
  
  ![Signup & Login](https://user-images.githubusercontent.com/7671024/52526724-862d5800-2c82-11e9-91ef-96c04f94eac5.png)