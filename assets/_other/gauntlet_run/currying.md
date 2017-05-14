
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

From there, things get a little bit trickier.

Essentially, every time a curried function is called, we add any new arguments to an array that's saved in a closure. If the number of arguments in that array is equal to the number of arguments that our original function expects, then we call it. Otherwise, we return a new function.

To do that, we need (1) a closure that can retain that list of arguments and (2) a function that can check the total number of arguments and either return another partially applied function or the return value of the original function with all of the arguments applied.

Now, the first thing we need to do in resolver is make a copy of any arguments it received. We'll do that by creating a variable called memory that uses `Array.slice()` to make a copy of the arguments object.

Next, resolver needs to return a function. This is what the outside world sees when it calls a curried function.

Since this internal function is the one that ends up actually being called, it needs to accept arguments. But it also needs to add those to any arguments that might be stored in memory. So first, we'll make a copy of memory by calling `slice()` on it.

Now, lets add our new arguments by using `Array.push()`.

Now we have a new array containing all the arguments we've received so far in this chain of partially applied functions.

The last thing to do is to compare the length of arguments we've received with the arity of our curried function. If the lengths match, we'll call the original function. If not, we'll use resolver to return yet another function that has all of our current arguments stored in memory.

Our final code looks like this...

```javascript
function curry(fn) {
  const arity = fn.length;

  return (resolver() => {
    const memory = Array.prototype.slice.call(arguments);

    return () => {
      let local = memory.slice(), next;
      Array.prototype.push.apply(local, arguments);
      next = local.length >= arity ? fn : resolver;

      return next.apply(null, local);
    };
  }());
}

// now we can curry our original volume function

function volume(l, w, h) {
  return l * w * h;
}

const curried = curry(volume);
const length = curried(2);
const lengthAndWidth = length(3);
console.log(lengthAndWidth(4)); // 24
```

### References

- [Kevin Cennis](https://medium.com/@kevincennis/currying-in-javascript-c66080543528)
- [(http://img.youtube.com/vi/iZLP4qOwY8I&t/0.jpg)](http://www.youtube.com/watch?v=iZLP4qOwY8I&t "Currying")
