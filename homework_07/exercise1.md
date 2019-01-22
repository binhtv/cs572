## Book document
In this document, we store `tags` for searching by tags and `borrow` to keep track how is borrowing this book and the due date. With this `borrow` data, librarian can know who is the borrower and the due date.

`borrow` can be _null_, indicate that the book is available

	[
	{
		"_id": 1,
		"isbn": "BOOK1",
		"author": "Mike",
		"tags": [
			"science",
			"information",
			"technology"
		],
		"borrow": {
			"user": "binh",
			"due_date": "Jan 29 2019"
		}
	},
	{
		"_id": 2,
		"isbn": "BOOK1",
		"author": "Mike",
		"tags": [
			"science",
			"information",
			"technology"
		],
		"borrow": {
			"user": "binh",
			"due_date": "Jan 10 2019"
		}
	},
	{
		"_id": 3,
		"isbn": "BOOK2",
		"author": "Robert",
		"tags": [
			"big data",
			"hadoop",
			"nosql"
		],
		"borrow": {
			"user": "kien",
			"due_date": "Jan 31 2019"
		}
	},
	{
		"_id": 4,
		"isbn": "BOOK2",
		"author": "Robert",
		"tags": [
			"big data",
			"hadoop",
			"nosql"
		],
		"borrow": null
	}
	]
## Student document
User information document

	[
	{
		"_id": 1,
		"user_name": "binh",
		"first_name": "Binh",
		"last_name": "Tran",
		"email": "binh@mum.edu",
		"role": "STUDENT"
	},
	{
		"_id": 2,
		"user_name": "phuc",
		"first_name": "Phuc",
		"last_name": "Nguyen",
		"email": "phuc@mum.edu",
		"role": "STUDENT"
	},
	{
		"_id": 3,
		"user_name": "kien",
		"first_name": "Kien",
		"last_name": "Pham",
		"email": "kien@mum.edu",
		"role": "STUDENT"
	},
	{
		"_id": 4,
		"user_name": "david",
		"first_name": "David",
		"last_name": "Kim",
		"email": "kim@mum.edu",
		"role": "LIBRARIAN"
	}
	]