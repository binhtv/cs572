## As the book structure defined in [homework 07](https://github.com/binhtv/cs572/blob/master/homework_07/exercise1.md):

1. The librarian need to search books by user and due date. We can create an index on `borrow.user` and `borrow.due_date` do enhance the search perfomance

		db.books.createIndex({'borrow.user': 1, 'borrow.due_date': 1});
2. The librarian also need to search books by their tags. So the tags should be indexed.
   
		db.books.createIndex({tags: 1});

## Student structure
The student document should have indexes on field `user_name`. It should be helpful when performing searching on this field. The `user_name` should also be unique.

		db.students.crateIndex({user_name: 1}, {unique: true})