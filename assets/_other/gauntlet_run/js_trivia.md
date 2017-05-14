
**Question:** Write a function called `partial` that makes the following snippet work?

```javascript
function add(a, b) {
  return a + b;
}

const add5 = partial(add, 5);
add5(4); // 9

function partial(fn, a) {
  return function(b) {
    return fn(a, b);
  }
}
```

This question is all about closures and first-class functions.

`partial()` accepts two arguments. One is a function, and the other is a number.

`partial()` must return a function, because we're assigning its return value to `add5` and then calling `add5()`.

**Question:** Make a class called `Square` that inherits from `Rectangle` and satisfies the following snippet.

```javascript
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}
Rectangle.prototype.area = function() {
  return this.width * this.height;
};
// your code here
const square = new Square(4);
square.area(); // 16
Square.prototype.area === Rectangle.prototype.area; // true
```

**Answer**
```javascript
function Square(length) {
  Rectangle.call(this, length, length);
}

Square.prototype = Object.create(Rectangle.prototype);
```

**Question:** Write a function called `shout` that accepts a string and a callback function, and uses `exclaim` and `yell` to transform its input.

```javascript
function exclaim(value, fn) {
  setTimeout(function() {
    fn(value + '!');
  }, 100);
}

function yell(value, fn) {
  setTimeout(function() {
    fn(value.toUpperCase());
  }, 100);
}

shout('hello', function(shouted) {
  console.log(shouted); // 'HELLO!'
});
```

**Answer**

This is async programming, using callbacks.

```javascript
function shout(value, fn) {
  exclaim(value, function(exclaimed) {
    yell(exclaimed, fn);
  });
}
```

**Question:** What is the value of `foo`?

```javascript
const foo = 10 + '20'; // "1020"
```

This is type coercion in play. Our integer gets coerced into a string type.

**Question:** How would you make this work?

```javascript
add(2, 5); // 7
add(2)(5); // 7

// normal
const add = (a, b) => a + b;

// curry version
const add = (a) =>
  b => a + b;
```

**Question:** What value is returned from the following statement?

```javascript
"i'm a lasagna hog".split("").reverse().join("");

// "goh angasal a m'i"
```

Look carefully, the `.split()` method results in the following:

```javascript
["i", "'", "m", " ", "a", " ", "l", "a", "s", "a", "g", "n", "a", " ", "h", "o", "g"]
```

Then, the `.reverse()` method reverses it all and then we join it all back. We are not actually passing in explicit `" "` spaces into either method, so we split it at every character instead. Otherwise, it would look like the following:

```javascript
"i'm a lasagna hog".split(" ").reverse().join(" "));

// "hog lasagna a i'm"
```

**Question:** What is the value of `window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );

// window.foo === "bar"
```

`window.foo` is undefined by default, therefore our second half of our 'or' disjunction statement will execute and assign "bar" to `window.foo`.

**Question:** What is the outcome of the two alerts below?

```javascript
let foo = "Hello";
(function() {
  let bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);

// "hello world"
// "ReferenceError: bar is not defined"
```

Our immediately invoked function expression has access to our `foo` variable, because of lexical scoping rules, and also it has `bar` defined within it. Therefore, it will `alert` with no problems. The second `alert` throws a reference error because bar is not available outside of the IFFE.

**Question:** What is the value of `foo.length`?

```javascript
let foo = [];
foo.push(1);
foo.push(2);

// foo.length === 2.... easey peasy
```

**Question:** What is the value of `foo.x`?

```javascript
let foo = {n: 1};
let bar = foo;
foo.x = foo = {n: 2};

// foo.x === undefined
```

The first assignment is easy. The second assignment can be ignored as it does not mutate `foo`. The third assignment is where it is tricky. This is a multiple assignment.

```javascript
let var1 = 1, var2 = 1, var3 = 1;
```

is **not** equivalent to:

```javascript
let var1 = var2 = var3 = 1;
```

The difference is in scoping:

```javascript
function good() {
  let var1 = 1, var2 = 1, var3 = 1;
}

function bad() {
  let var1 = var2 = var3 = 1;
}

good();
alert(window.var2); // undefined

bad();
alert(window.var2); // 1. Aggh! ... This is in the global space, it leaked.
```

Actually this shows that assignmemnt are right associative. The 'bad' example is equivalent to:

```javascript
let var1 = (window.var2 = (window.var3 = 1));
```

**Question:** What does the following code print?

```javascript
console.log('one');
setTimeout(() => {
  console.log('two');
}, 0);
console.log('three');

// "one"
// "three"
// "two"
```

Even though `setTimeout()` is being passed a 0 second wait parameter, our `console.log('two')` still gets placed onto the task queue while the call stack unwinds, calling our other logs first.


