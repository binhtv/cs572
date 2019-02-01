# Exercise
Create a module called Users that is responsible for showing a list of users, your application should only load this module upon navigating via `users` link.

Create a service `data` with a method `getOnlineData` that returns an array of _JSON_ objects from [https://randomuser.me/api/?results=10](https://randomuser.me/api/?results=10) and `getCachedData` that return the _JSON_ objects from `localStorage`.

When `AppComponent` is created, it should get all the online data, stringify it, and save it into the `localStorage`.

Create users component and `userdetails` component that show a list of all users as links (datamust be retrieved from `localStorage`):
		
	<ul><li><a href="/users/uuid">fullname</a></li>...</ul>
		
When users click on a link you should display `userdetails` child component that shows full details about the user.

If a user tried to visit `users/:uuid` page without passing a correct id, then your app must redirectthem to a friendly error page. (_use Guards_).

**Write this exercise with Lazy Loading in mind**