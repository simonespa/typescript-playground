Review Exercise 1
=================
This is a chance to work with TypeScript/ECMAScript in a mini project.
Tackle this however you like, the point is for you to explore using the tools
You will load up some JSON data into a type-safe structure, then sort the data and show slices of it

Details
-------
In a new folder, create a .ts file for your code
(You may wish to also make an html file to visualize your work)

Get a copy of 'todos.json' and make sure it is visible to your code

In your .ts file, import the entire JSON data set
    import * as todos from "./data/todos.json"
(You will need a tsconfig that lets you do this)

Write an interface to match the types of a 'todo' member
Decide how to create 'job' instances, which are derived from one 'todo' member
(You could use an object, a class or a function)

Optional
--------
Choose a data field to sort the entire 'todos' data set (e.g. by 'userId' or 'completed')
Decide on a strategy to show todos for one user, then just the un-completed jobs for a user
Try consuming 'photos.json' and showing a filtered subset in a web-page
