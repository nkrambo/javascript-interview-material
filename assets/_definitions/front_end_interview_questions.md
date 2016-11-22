
## Table of Contents

  1. [General Questions](#general-questions)
  1. [HTML Questions](#html-questions)
  1. [CSS Questions](#css-questions)
  1. [JS Questions](#js-questions)
  1. [Testing Questions](#testing-questions)
  1. [Performance Questions](#performance-questions)
  1. [Network Questions](#network-questions)
  1. [Coding Questions](#coding-questions)
  1. [Fun Questions](#fun-questions)

### General Questions:

#### What did you learn yesterday/this week?

---

#### What excites or interests you about coding?

---

#### What is a recent technical challenge you experienced and how did you solve it?

---

#### What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site?

---

#### Talk about your preferred development environment.

---

#### Which version control systems are you familiar with?

---

#### Can you describe your workflow when you create a web page?

---

#### Can you describe your workflow when you create a web page?

---

#### If you have 5 different stylesheets, how would you best integrate them into the site?

---

#### Can you describe the difference between progressive enhancement and graceful degradation?

---

#### How would you optimize a website's assets/resources?

---

#### How many resources will a browser download from a given domain at a time? What are the exceptions?

---

#### Name 3 ways to decrease page load (perceived or actual load time).

---

#### If you jumped on a project and they used tabs and you used spaces, what would you do?

---

#### Describe how you would create a simple slideshow page.

---

#### If you could master one technology this year, what would it be?

---

#### Explain the importance of standards and standards bodies.

---

#### What is Flash of Unstyled Content? How do you avoid FOUC?

---

#### Explain what ARIA and screenreaders are, and how to make a website accessible.

---

#### Explain some of the pros and cons for CSS animations versus JavaScript animations.

---

#### What does CORS stand for and what issue does it address?

---

### HTML Questions:

#### What does a `doctype` do?

---

#### What's the difference between full standards mode, almost standards mode and quirks mode?

---

#### What's the difference between HTML and XHTML?

---

#### Are there any problems with serving pages as `application/xhtml+xml`?

---

#### How do you serve a page with content in multiple languages?

---

#### What kind of things must you be wary of when design or developing for multilingual sites?

---

#### What are `data-` attributes good for?

---

#### Consider HTML5 as an open web platform. What are the building blocks of HTML5?

---

#### Describe the difference between a `cookie`, `sessionStorage` and `localStorage`.

---

#### Describe the difference between `<script>`, `<script async>` and `<script defer>`.

---

#### Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?

---

#### What is progressive rendering?

---

#### Have you used different HTML templating languages before?

---

### CSS Questions:

#### What is the difference between classes and IDs in CSS?

---

#### What's the difference between 'resetting' and 'normalizing' CSS? Which would you choose, and why?

---

#### Describe Floats and how they work.

---

#### Describe z-index and how stacking context is formed.

---

#### Describe BFC(Block Formatting Context) and how it works.

---

#### What are the various clearing techniques and which is appropriate for what context?

---

#### Explain CSS sprites, and how you would implement them on a page or site.

---

#### What are your favourite image replacement techniques and which do you use when?

---

#### How would you approach fixing browser-specific styling issues?

---

#### How do you serve your pages for feature-constrained browsers? What techniques/processes do you use?

---

#### What are the different ways to visually hide content (and make it available only for screen readers)?

---

#### Have you ever used a grid system, and if so, what do you prefer?

---

#### Have you used or implemented media queries or mobile specific layouts/CSS?

---

#### Are you familiar with styling SVG?

---

#### How do you optimize your webpages for print?

---

#### What are some of the 'gotchas' for writing efficient CSS?

---

#### What are the advantages/disadvantages of using CSS preprocessors? Describe what you like and dislike about the CSS preprocessors you have used.

---

#### How would you implement a web design comp that uses non-standard fonts?

---

#### Explain how a browser determines what elements match a CSS selector.

---

#### Describe pseudo-elements and discuss what they are used for.

---

#### Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.

---

#### What does ```#### { box-sizing: border-box; }``` do? What are its advantages?

---

#### List as many values for the display property that you can remember.

---

#### What's the difference between inline and inline-block?

---

#### What's the difference between a relative, fixed, absolute and statically positioned element?

---

#### The 'C' in CSS stands for Cascading.  How is priority determined in assigning styles (a few examples)?  How can you use this system to your advantage?

---

#### What existing CSS frameworks have you used locally, or in production? How would you change/improve them?

---

#### Have you played around with the new CSS Flexbox or Grid specs?

---

#### How is responsive design different from adaptive design?

---

#### Have you ever worked with retina graphics? If so, when and what techniques did you use?

---

#### Is there any reason you'd want to use `translate()` instead of ####absolute positioning####, or vice-versa? And why?

---

### JS Questions:

####Explain event delegation

Event delegation allows you to avoid adding event listeners to specific nodes; instead, the event listener is added to one parent. That event listener analyzes bubbled events to find a match on child elements.

Imagine that we had an unordered list element with 500 children list item elements. Attaching an event listener to each child element is inefficient and unnecessary. We only attach one event listener to the parent and listen for events on children nodes.

An additional advantage is that any dynamically created elements will still be bound to the event handler, which would not be the case if we assigned to event listener to each child node.

```html
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
    console.log(e.target.innerHTML + ' was clicked');
  }
});

list.addEventListener('click', function(e) {
  if (e.target && e.target.nodeName === 'LI') {
    if (e.target.style.background === 'red') {
      e.target.style.background = 'none';
    } else {
      e.target.style.background = 'red'
    }
  }
});
```

Start by adding a click event listener to the parent element. When the event listener is triggered, check the event element to ensure it's the type of element to react to. If it is an LI element, boom: we have what we need! If it's not an element that we want, the event can be ignored.

---

#### Explain how `this` works in JavaScript

---

#### Explain how prototypal inheritance works

---

#### What is a closure, and how/why would you use one?

---

#### What's a typical use case for anonymous functions?

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

---

#### How do you organize your code? (module pattern, classical inheritance?)

---

#### What's the difference between host objects and native objects?

Host Objects are objects supplied by a certain environment. They are not always the same because each environment differs and contains host objects that accommodates execution of ECMAScript. For example, the browser environment supplies objects such as window, XMLHttpRequest, document, setTimeout, location. While a node.js environment supplies objects such as NodeList and Global.

Native Objects or Built-in Objects are standard built-in objects provided by Javascript. Native objects is sometimes referred to as 'Global Objects' since they are objects Javascript has provided natively available for use. Native objects: Object (constructor), Date, Math, parseInt, eval, string methods like indexOf and replace, array methods etc...

User objects are anything the user defines. When you create a new object that is not directly a native object, you've made a user object. So if you create a new string ("Hello world") you created a native object, but if you create an instance of an object you've defined (new Cat()) then it’s a user object.

References:
* [Mozilla Docs - Global Objects] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

---

#### Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?

  ---

#### What's the difference between `.call` and `.apply`?

---

#### Explain `Function.prototype.bind`.

---

#### When would you use `document.write()`?

---

#### What's the difference between feature detection, feature inference, and using the UA string?

---

#### Explain Ajax in as much detail as possible.

---

#### What are the advantages and disadvantages of using Ajax?

---

#### Explain how JSONP works (and how it's not really Ajax).

---

#### Explain 'hoisting'.

---

#### Describe event bubbling.

---

#### What's the difference between an 'attribute' and a 'property'?.

---

#### Why is extending built-in JavaScript objects not a good idea?

---

#### Difference between document load event and document DOMContentLoaded event?

---

#### Why is it called a Ternary expression, what does the word 'Ternary' indicate?

---

#### What is `"use strict";`? what are the advantages and disadvantages to using it?

---

#### Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?

---

#### Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?

---

#### Explain what a single page app is and how to make one SEO-friendly.

---

#### What is the extent of your experience with Promises and/or their polyfills?

---

#### What are the pros and cons of using Promises instead of callbacks?

The main advantage a callback has over a promise is locality. With a callback you're asking for work to be performed in one place, and a result to be given very near the same so you can operate on it. In situations where there is no actual data being handed back (think GCD's primitives) a callback is the only appropriate way to handle such an API. Anything more would add needless complexity to a simple interface.

That said a promise's advantage is flexibility. You have much more liberty about where, when, and how work is done because you're dealing with a proper data type rather than a function. That freedom allows one to express higher-order operations like batching, chaining, coalescing, etc., but it can also introduce a small amount of uncertainty into any piece of code that relies on the locality mentioned above.

It all depends on what you need to do and how you need it done. For code that relies on short local reactions to asynchronous events go with a callback. For more complex interactions and data flows promises bring order to what could potentially be callback hell.

---

#### What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?

---

#### What tools and techniques do you use debugging JavaScript code?

---

#### What language constructions do you use for iterating over object properties and array items?

---

#### Explain the difference between synchronous and asynchronous functions.

---

#### Explain the difference between mutable and immutable objects.

---

#### What is an example of an immutable object in JavaScript?

---

#### What are the pros and cons of immutability?

---

#### How can you achieve immutability in your own code?

---

#### What is event loop?

---

#### What is the difference between call stack and task queue?

---

#### Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`

---

#### Explain why the following doesn't work as an IIFE: `function foo(){ }();`. What needs to be changed to properly make it an IIFE?

---

#### What's the difference between a variable that is: `null`, `undefined` or undeclared? How would you go about checking for any of these states?

---

#### Have you ever used JavaScript templating? If so, what libraries have you used?

---

#### What is the difference between `==` and `===`?

JavaScript has two sets of equality operators archived under comparison operators:

equality == & inequality != strict equality === & strict inequality !== We use these operators when comparing 2 operands. They differ on what type of operands are being compared to against.

For example, equality == or inequality != signs compares 2 values without type conversion. While strict equality === or strict inequality !== signs compares 2 values with type conversion.

```javascript
'1' == 1      // true < all it matters is the value
'1' === 1     // false < they are not the same type

1 == true     // true
'1' == true   // true

1 === true    // false
'1' === true  // false
```

References:

 * [Does it matter which equals operator (== vs ===) I use in JavaScript comparisons?](http://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons)
 * [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

---

#### Explain the same-origin policy with regards to JavaScript.

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
* [MDN - Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)
[Same-origin Policy in layman terms](http://stackoverflow.com/questions/11474336/same-origin-policy-in-layman-terms)

---

#### Make this work:
```javascript
duplicate([1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
```

---

### Testing Questions:

#### What are some advantages/disadvantages to testing your code?

---

#### What tools would you use to test your code's functionality?

---

#### What is the difference between a unit test and a functional/integration test?

---

#### What is the purpose of a code style linting tool?

---

### Performance Questions:

#### What tools would you use to find a performance bug in your code?

---

#### What are some ways you may improve your website's scrolling performance?

---

#### Explain the difference between layout, painting and compositing.

---

### Network Questions:

#### Traditionally, why has it been better to serve site assets from multiple domains?

---

#### Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen.

---

#### What are the differences between Long-Polling, Websockets and Server-Sent Events?

---

#### Explain the following request and response headers:

* Diff. between Expires, Date, Age and If-Modified-...
* Do Not Track
* Cache-Control
* Transfer-Encoding
* ETag
* X-Frame-Options

---

#### What are HTTP methods? List all HTTP methods that you know, and explain them.

---

### Coding Questions:

#### Question: What is the value of `foo`?

```javascript
var foo = 10 + '20';
```

---

#### Question: How would you make this work?

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

---

#### Question: What value is returned from the following statement?

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

---

#### Question: What is the value of `window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

---

#### Question: What is the outcome of the two alerts below?

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

---

#### Question: What is the value of `foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

---

#### Question: What is the value of `foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

---

#### Question: What does the following code print?

```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
```

---

### Fun Questions:

#### What's a cool project that you've recently worked on?

---

#### What are some things you like about the developer tools you use?

---

#### Who inspires you in the front-end community?

---

#### Do you have any pet projects? What kind?

---

#### What's your favorite feature of Internet Explorer?
