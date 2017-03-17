
## Anonymous Functions

Anonymous functions are typically used as callbacks, as in to pass them as arguments to other functions. Take the setTimeout function for example:

```javascript
setTimeout(function() {
  alert('hello');
}, 1000);
```

Or the Array.prototype.map function:

```javascript
const numbers = [2, 4, 6];
const numbersHalf = numbers.map((item) => {
  return item / 2;
});
```

Another popular use case (especially for frameworks) is to create closures with anonymous functions, such as Immediately-invoked function expression (IIFE).

```javascript
(function() {
  alert('foo');
})();
```

Another callback example:

```javascript
function takesACallback(callback) {
  // do some interesting things here
  return 'The callback says: ' + callback();
}

// returns 'The callback says: I'm the callback!'
takesACallback(function() {
  return 'I\'m the callback!';
});
```

However, you can still have a reference to an anonymous function, just because it is unnamed it doesn't mean it's unreferenced. We can use a function expression as assign our anonymous function to a variable.

The function itself is still anonymous (it doesn't have a name directly attached to it), but you can call the function by the named reference.

```javascript
const reference = function() {
  return 'I\'m still an anonymous function';
}

reference(); // returns "I'm still an anonymous function"
```
Declared functions are not anonymous. They have a name directly attached to the function, with no need for a named reference.

```javascript
function declared() {
  return "I'm not anonymous function";
}

declared(); // returns "I'm not anonymous function"
```

Writing a named function like this results in a function declaration.

Anonymous functions are created at runtime ... Function declarations are different. They are run before any of the other code is executed so the functions do not have to be declared before the code that calls them.
