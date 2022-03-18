Review Exercise 2
=================
Build an app to retrieve user data from the API at
https://jsonplaceholder.typicode.com/users
(May not be possible to access http from non-browser)

Combine users with their todo, photos etc
The available nested routes are:
    /posts/1/comments
    /albums/1/photos // same as Monday
    /users/1/albums
    /users/1/todos   // same as Monday
    /users/1/posts

Show a nice collection of a user's photos or a users 'completed' todos
- e.g. on the web page
- or use console.log and string interpolation

Handle exceptions (catch)
type-safe the Promise

Optional
========
Provide a way to parameterize which user to retrieve
How could you offer a filter (say photos by user or todos by complete)...


NB the API also permits fake delete, post and (real) filter - see it's documentation
