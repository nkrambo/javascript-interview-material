
## Hoisting

In javascript there is only function scoping. Variable declarations in a function are moved to the top of the function at run-time.

``` javascript
function() {
  // some code
  // some code

  let myVariable = 0; // this will get hoisted to the top of the function.
}
```

However, if you don't declare your variables correctly. You can declare global variables by accident.

```javascript
function() {
  // some code
  // some code

  myVariable = 0; // this will get hoisted to global!!
}
```
This is one of the reasons that we use 'use strict'. It will throw an error if your code globally hoists a variable.

**References**

* https://www.youtube.com/watch?v=sjyJBL5fkp8
