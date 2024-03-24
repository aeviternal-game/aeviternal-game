`export`
- `export` sets stuff to be imported by other files
- `export default` sets ONE object to be the default export of a file. When we import the file we can rename that object immediately to whatever we want without using curly brackets etc.

`new`
- "The `new` operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function."

`constructor`
- is similar to `__init__` in python, I beleive.

`super()`
- lets us call parent class's constructor. So in the game code stuff like `super('Boot')` (where `Boot` extends `Scene`) would call `Scene`'s constructor inside `Boot` with `'Boot'` being passed as an argument.

`{}` curly braces
- make an object

---
- node.js is a JS runtime environment (RTE)
    - RTE is something that runs the code? And whether and how code runs will depend a lot on this?
    - node.js is an environment to run JS on many platforms. So it's like a platform for a platform?
- info on environments: https://stackoverflow.com/questions/3710130/what-is-run-time-environment
    - dev env: write code (build & test also?)
    - build env: just build code (usually also run?)
    - run env: run the code you've got
