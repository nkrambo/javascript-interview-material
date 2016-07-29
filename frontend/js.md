
## JS Questions:

**Explain event delegation?**

Event delegation allows you to avoid adding event listeners to specific nodes; instead, the event listener is added to one parent. That event listener analyzes bubbled events to find a match on child elements.

Imagine that we had an unordered list element with 500 children list item elements.
Attaching an event listener to each child element is inefficient and unnecessary. We only attach one event listener to the parent and listen for events on children nodes.

An additional advantage is that any dynamically created elements will still be bound to the event handler, which would not be the case if we assigned to event listener to each child node.

```
<ul id="parent-list">
	<li id="post-1">Item 1</li>
	<li id="post-2">Item 2</li>
	<li id="post-3">Item 3</li>
	<li id="post-4">Item 4</li>
	<li id="post-5">Item 5</li>
	<li id="post-6">Item 6</li>
</ul>

```

```javascript
// Get the element, add a click listener...
document.getElementById("parent-list").addEventListener("click", function(e) {
	// e.target is the clicked element!
	// If it was a list item
	if(e.target && e.target.nodeName == "LI") {
		// List item found!  Output the ID!
		console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
	}
});
```
Start by adding a click event listener to the parent element.  When the event listener is triggered, check the event element to ensure it's the type of element to react to.  If it is an LI element, boom:  we have what we need!  If it's not an element that we want, the event can be ignored.

**Explain how `this` works in JavaScript?**



**Explain how prototypal inheritance works?**

**What do you think of AMD vs CommonJS?**

* Explain why the following doesn't work as an IIFE: `function foo(){ }();`.
  * What needs to be changed to properly make it an IIFE?
* What's the difference between a variable that is: `null`, `undefined` or undeclared?
  * How would you go about checking for any of these states?
* What is a closure, and how/why would you use one?

**What's a typical use case for anonymous functions?**

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

**Explain the same-origin policy with regards to JavaScript.**

* Make this work:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```
**Why is it called a Ternary expression, what does the word "Ternary" indicate?**

In mathematics, a ternary operation is an n-ary operation with n = 3. In computer science, a ternary operator is an operator that takes three arguments. The term springs from words like unary, binary, ternary, etc. Ternary, therefore meaning 3-ary.

The arguments and result can be of different types. Many programming languages that use C-like syntax feature a ternary operator, ?:, which defines a conditional expression. Often, a simple if-else statement can be used to achieve the same result.

For example:
```
if (fooTrue) {
  bar();
} else {
  fuzz();
}
```

Above code can be shortened with ?:
```
fooTrue ? bar() : fuzz();
```

In JavaScript, conditional operators can be evaluated to an Expression, not just statement.
```
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
