Review Exercise 3
=================
Build an app where the user can access:
- data from the Star Wars API at
    https://swapi.dev/api/people
- OR data from the Studio Ghibli API at
    https://ghibliapi.herokuapp.com/people
Both APIs allow several categories of research
(or continue with users or employees from before)

show results nicely

Notes:
- consider an observable and enum for the category field
- handle out-of-bounds parameters (e.g. no such category)
- aim for modular composition
- handle server problems (SWAPI vehicles fail for some IDs)
