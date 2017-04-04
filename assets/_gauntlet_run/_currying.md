
## Currying

### Normal Function

```javascript
let dragon = (name, size, element) =>
  `${name} is a ${size} dragon that breathes ${element}!`;

console.log(dragon('Poopey', 'small', 'bad breath'));
// "Poopey is a small dragon that breathes bad breath!"
```

### Currying

Instead of accepting all of it's arguments immediately, a currying function returns a new function for each argument and finally returns the final function with all the arguments. At each return, the function expects its next dependency until all dependencies have been fulfilled and the final value is returned.

In other words, you take a function with n arguments and transform it into n functions that each take a single argument. It essentially creates a chain of partially applied functions that eventually resolves with a value.

```javascript
let dragon =
  name =>
    size =>
      element =>
        `${name} is a ${size} dragon that breathes ${element}!`;

console.log(dragon('Pepe')('tiny')('salsa'));
// "Pepe is a tiny dragon that breathes salsa!"
```

### But Why?

The idea with currying is that your function can pass the application and gradually receive it's arguments that it needs. That is, you can add some arguments at one level, then add some more arguments in another part of the application and then finally grab your output.

### Curry Functions With Lib Utilities

Our example above has written the function to be curryable. But, we can take normal functions and add currying to them using many types of libraries.

**Using Lodash**

```javascript
import _ from 'lodash';

let dragon = (name, size, element) =>
  `${name} is a ${size} dragon that breathes ${element}!`;

dragon = _.curry(dragon);
```

[(http://img.youtube.com/vi/iZLP4qOwY8I&t/0.jpg)](http://www.youtube.com/watch?v=iZLP4qOwY8I&t "Currying")

### Write a Curry Utility Function

Instead of using a library, such as Lodash, to curry existing functions we can easily write our own utility. Here's a quick example of what we mean. We take a normal function and pass it into our `curry` function to make it curryable.

```javascript
function volume(l, w, h) {
  return l * w * h;
}

let curried = curry(volume);

curried(1)(2)(3); // 6
```

The first thing you'll notice is that curry expects a function as its argument, so we'll start there.

```javascript
function curry(fn) {}
```

Next, we need to know how many arguments our function expects (called its "arity"). Otherwise, we won't know when to stop returning new functions and give back a value instead.

We can tell how many arguments a function expects by accessing its length property.

```javascript
function curry(fn) {
  const arity = fn.length;
}
```

### References

- [Kevin Cennis](https://medium.com/@kevincennis/currying-in-javascript-c66080543528)
