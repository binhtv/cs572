# Exercise 1
  Define a filterWords function on the String object. 
  The function accepts anarray of strings that specifies a list of banned words. 

  The function returns thestring after replacing all the banned words with stars.

  `console.log("This house is nice!".filterWords(['house', 'nice']));`

  //"This *** is ***!"

  Solve the exercise above in 4 different ways using:
  
 	• Use ES6 features, not allowed to use for-loop

  	• Promises

  	• Async/Await

  	• Observables
# Exercise 2
Complete the code for isWeekend function and return the string "weekend" or"weekday" without using if-statement/ternary
# Exercise 3
We want to create a curryable function that takes as arguments (in this order):

    • An item object
    
    • Discount between 0 and 100 (a 100$ item with a 10% discount will cost 90$)
and returns the item with the correct price. Implement **applyCoupon()** as acurriable function.

    const item = {
            "name": "Biscuits",
            "type": "regular",
            "category": "food",
            "price": 200
        }
        
    applyCoupon(item)(10).price === 180