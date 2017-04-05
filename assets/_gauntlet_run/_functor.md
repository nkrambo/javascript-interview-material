
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

### References

- [Eric Elliot](https://medium.com/javascript-scene/functors-categories-61e031bac53f#.efshrxr1q)
- [Fun Fun Function](https://www.youtube.com/watch?v=YLIH8TKbAh4)
- [Wiki](https://en.wikipedia.org/wiki/Functor)
