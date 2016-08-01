
## JS Questions:

**Explain how `this` works in JavaScript?**

From what I understand, ‘this’ refers to itself, to its own object or global object.

Using 'this' are partitioned in 3 locations of code. These are in functions, outside of functions (global scope, ex: window object), and in Javascript’s eval() function.

Common pitfalls when using ‘this’ are usually relevant to scope issues in real functions, methods, and constructors.

Though there are ways to fix these common issues by using ES5, bind() or ES6 arrow functions, =>

**Explain how prototypal inheritance works?**

* Explain why the following doesn't work as an IIFE: `function foo(){ }();`.
  * What needs to be changed to properly make it an IIFE?
* What's the difference between a variable that is: `null`, `undefined` or undeclared?
  * How would you go about checking for any of these states?
* What is a closure, and how/why would you use one?

**What's a typical use case for anonymous functions?**

Anonymous functions are typically used as callbacks, as in to pass them as arguments to other functions. Take the setTimeout function for example:

``` javascript
setTimeout(function() {
  alert('hello');
}, 1000);
```

Or the Array.prototype.map function:

``` javascript
var numbers = [2,4,6];
var numers_half = numbers.map(function(item) {
  return item / 2;
});
```

Another popular use case (especially for frameworks) is to create closures with anonymous functions, such as Immediately-invoked function expression (IIFE).

``` javascript
(function() {
  alert('foo');
})();
```

Another callback example:

``` javascript
function takesACallback(callback) {
    // do some interesting things here
    return "The callback says: " + callback();
}

takesACallback(function() {
    return "I'm the callback!";
}); // returns "The callback says: I'm the callback!"
```

However, you can still have a reference to an anonymous function, just because it is unnamed it doesn’t mean it’s unreferenced. We can use a function expression as assign our anonymous function to a variable.

The function itself is still anonymous (it doesn’t have a name directly attached to it), but you can call the function by the named reference.

``` javascript
var reference = function() {
    return "I'm still an anonymous function";
}

reference(); // returns "I'm still an anonymous function"
```

Declared functions are not anonymous. They have a name directly attached to the function, with no need for a named reference.

```
function declared() {
    return "I'm not anonymous function";
}

declared(); // returns "I'm not anonymous function"
```

Writing a named function like this results in a function declaration.

Anonymous functions are created at runtime ... Function declarations are different. They are run before any of the other code is executed so the functions do not have to be declared before the code that calls them.

**How do you organize your code? (module pattern, classical inheritance?)?**

**What's the difference between host objects and native objects?**

**Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?**

**What's the difference between `.call` and `.apply`?**

**Explain `Function.prototype.bind`.**

**When would you use `document.write()`?**

**What's the difference between feature detection, feature inference, and using the UA string?**

**Explain Ajax in as much detail as possible.**

**What are the advantages and disadvantages of using Ajax?**

**Explain how JSONP works (and how it's not really Ajax).**

**Have you ever used JavaScript templating?**
  * If so, what libraries have you used?

**Explain "hoisting".**

**Describe event bubbling.**

**What's the difference between an "attribute" and a "property"?**

**Why is extending built-in JavaScript objects not a good idea?**

**Difference between document load event and document DOMContentLoaded event?**

**What is the difference between `==` and `===`?**

JavaScript has two sets of Equality operators archived under Comparison operators:

equality == & inequality !=
strict equality === & strict inequality !==
We use these operators when comparing 2 operands. They differ on what type of operands are being compared to against.

For example, equality == or inequality != signs compares 2 values without type conversion.
While strict equality === or strict inequality !== signs compares 2 values with type conversion.

```
'1' == 1 // true < all it matters is the value
'1' === 1 // false < they are not the same type

1 == true // true
'1' == true // true

1 === true // false
'1' === true // false
```

References:
[Does it matter which equals operator (== vs ===) I use in JavaScript comparisons?](http://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons)
[Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

**Explain the same-origin policy with regards to JavaScript.**

Same-origin policy restricts scripts from other websites to be executed on your website. It is an important security measure as it isolates known malicious attacks such as Cross Site Scripting.

In two pages with url, an origin is defined if its protocol, host, and port are the same for both pages.

An example via MDN - Same-origin policy:
Compare http://store.company.com/dir/page.html to the table below.

URL | Outcome | Reason
--- | --- | ---
http://store.company.com/dir2/other.html |	Success |	-
http://store.company.com/dir/inner/another.html |	Success |	-
https://store.company.com/secure.html |	Failure |	Different protocol
http://store.company.com:81/dir/etc.html |	Failure |	Different port
http://news.company.com/dir/other.html |	Failure |	Different host

There is also a work around for subdomains. The last example above http://news.company.com/dir/other.html can be a Success by setting document.domain to our parent domain company.com.

```javascript
document.domain = "company.com";
```

References:
[MDN - Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)
[Same-origin Policy in layman terms](http://stackoverflow.com/questions/11474336/same-origin-policy-in-layman-terms)

* Make this work:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```
**Why is it called a Ternary expression, what does the word "Ternary" indicate?**

In mathematics, a ternary operation is an n-ary operation with n = 3. In computer science, a ternary operator is an operator that takes three arguments. The term springs from words like unary, binary, ternary, etc. Ternary, therefore meaning 3-ary.

The arguments and result can be of different types. Many programming languages that use C-like syntax feature a ternary operator, ?:, which defines a conditional expression. Often, a simple if-else statement can be used to achieve the same result.

For example:
```javascript
if (fooTrue) {
  bar();
} else {
  fuzz();
}
```

Above code can be shortened with ?:
```javascript
fooTrue ? bar() : fuzz();
```

In JavaScript, conditional operators can be evaluated to an Expression, not just statement.
```javascript
// assigned to a variable
var isFoo = fooTrue ? "yes" : "no";

// passed as an argument in a function
getFoo(fooTrue ? "yes" : "no");
```

**What is `"use strict";`? what are the advantages and disadvantages to using it?**

"use strict;" is applied to an entire script file or to individual functions by implementing at the beginning of a file or at the beginning of inside a function before anything else.

Main purpose of using strict mode is to be able to evaluate your JavaScript code and throw more errors in an effort to make your code more robust, readable, accurate and fixes compatibility issues that may arise for future JavaScript releases.

ES6 classes have use strict in-built.

* Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`

**Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?**

**Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?**

**Explain what a single page app is and how to make one SEO-friendly.**

**What is the extent of your experience with Promises and/or their polyfills?**

**What are the pros and cons of using Promises instead of callbacks?**

The main advantage a callback has over a promise is locality.  With a callback you're asking for work to be performed in one place, and a result to be given very near the same so you can operate on it.  In situations where there is no actual data being handed back (think GCD's primitives) a callback is the only appropriate way to handle such an API.  Anything more would add needless complexity to a simple interface.

That said a promise's advantage is flexibility.  You have much more liberty about where, when, and how work is done because you're dealing with a proper data type rather than a function.  That freedom allows one to express  higher-order operations like batching, chaining, coalescing, etc., but it can also introduce a small amount of uncertainty into any piece of code that relies on the locality mentioned above.

It all depends on what you need to do and how you need it done.  For code that relies on short local reactions to asynchronous events go with a callback.  For more complex interactions and data flows promises bring order to what could potentially be callback hell.

**What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?**

**What tools and techniques do you use debugging JavaScript code?**

**What language constructions do you use for iterating over object properties and array items?**

* Explain the difference between mutable and immutable objects.
  * What is an example of an immutable object in JavaScript?
  * What are the pros and cons of immutability?
  * How can you achieve immutability in your own code?

**Explain the difference between synchronous and asynchronous functions.**

**What is event loop?**
  * What is the difference between call stack and task queue?

**Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`**
