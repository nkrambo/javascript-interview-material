
## Functor

In the context of JavaScript, a functor is a function, that, given a value and another function, unwraps the values to get to its inner value(s), calls the given function with the inner value(s), wraps the returned values in a new structure, and returns that new structure.

Two common examples of this are the `Array.map()` and `Array.filter()` methods.

Let's build an understanding.

We have the following simple function that adds 1 to any value we pass in. Easy.

```javascript
function plus1(value) {  
  return value + 1;
}

console.log(plus1(3)); // 4
```

So if we pass the number 3 to plus1, we get 4. However, if we pass in an array of numbers, say 3 and 4, things will, of course, break.

```javascript
console.log(plus1([3,4])); // Breaks!
```

But we would like ti to work so we update our function to handle arrays, like so.

```javascript
function plus1(value) {

  // handle arrays
  if (Array.isArray(value)) {
    const newArray = [];

    for (let i = 0;  i < value.length; i += 1) {
      newArray[i] = value[i] + 1;
    }

    return newArray;
  }

  // handle single value
  return value + 1;
}

console.log(plus1([3,4])); // [4, 5]
```

That works, but what if we also need plus1 to work on strings?

```javascript
plus1('ABC'); // should output 'BCD'
```

We can add another branch of logic to our function to handle this.

```javascript
function plus1(value) {

  // handle arrays
  if (Array.isArray(value)) {
    const newArray = [];

    for (let i = 0; i < value.length; i += 1) {
      newArray[i] = value[i] + 1;
    }

    return newArray;
  }

  // handle strings
  if (typeof value === 'string') {
    const chars = value.split('');
    const newCharArray = [];

    for (let i = 0; i < chars.length; i += 1) {
      newCharArray[i] = String.fromCharCode(chars[i].charCodeAt(0) + 1);
    }

    return newCharArray.join('');
  }

  // handle single value
  return value + 1;
}

console.log(plus1('ABC')); // now outputs BCD
```

Alright, now that works. Quite a bit of code, but working.

But lets say that we also need to write a `minus1()` function. We would need to duplicate all this work between the two functions, not very terse.

Plus and minus could be generalized into an `arithmetic()` function, but when we add square, division, floor, and every other math function under the sun, we would end up with a huge generic "math" function.

Functors can help us here by handling the general iteration of the string and the array.

Let's look at `Array.map()`. Map is a type of functor.

```javascript
function plus1(value) {
  return value + 1;  
}

[3, 4].map(plus1); // = [4, 5]
```

You can see how functors make our life easier.

What about our string case, going from 'ABC' to 'BCD'? Let's write our own functor.

```javascript
function stringFunctor(value, fn) {
  const chars = value.split('');

  return chars.map((char) => {
    return String.fromCharCode(fn(char.charCodeAt(0)));
  }).join('');
}

function plus1(value) {  
  return value + 1;
}

function minus1(value) {  
  return value - 1;
}

[3, 4].map(plus1); // = [4, 5]
stringFunctor('ABC', plus1); // returns "BCD"
stringFunctor('XYZ', minus1); // returns “RXY”
```

We pass in a string, 'ABC' into the `stringFunctor`, and we're getting 'BCD' out. `stringFunctor` takes a value, and function fn. `value` is 'ABC' and `fn` is `plus1`. `stringFunctor` splits the string into an array called `chars`. It then maps over the array of chars. The `char` parameter being passed to the map callback is each character, in the form of a string with a length of 1. We convert that character to a number, and pass it into `fn` (which is going to be plus1 in this case), and we then take the return value of the function, a number, and convert that back into a character. Map will return an array of these 'incremented' characters, and we then join them together using `join`.

And because `stringFunctor` does the unpacking of strings, we can now let `plus1` and `minus1` do what the do best.
`stringFunctor` and map are both functors. Functors are functions that take a value and a function. The value might be an array of numbers in the case of map, or the string 'ABC' in the case of the string functor. The functor then unwraps that value, breaks the string or array apart, and feeds each of the items to the function, and then returns the processed values in a structured form.

Another example of a functor would be Array.filter, it takes an array and a function and returns a new array. Array.forEach is not a functor, because it doesn't return an array. forEach doesn’t maintain structure, so it's not a functor.

### References

- [Eric Elliot](https://medium.com/javascript-scene/functors-categories-61e031bac53f#.efshrxr1q)
- [Fun Fun Function](https://www.youtube.com/watch?v=YLIH8TKbAh4)
- [Wiki](https://en.wikipedia.org/wiki/Functor)
