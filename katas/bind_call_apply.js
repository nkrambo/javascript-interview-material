
// The bind() method creates a new function that, when called, has its this keyword
// set to the provided value, with a given sequence of arguments preceding any
// provided when the new function is called.

const dog = {
  sound: 'woof',
  bark: function() {
    console.log(this.sound);
  }
}

const button = document.getElementById('myButton');

button.addEventListener('click', function() {

});



//
// - Define a function that returns n lines of Pascal’s Triangle. (this question was the entire interview)
// - Define a function that takes an array of strings, and returns the most commonly occurring string that array (this question came with an execution time limit)
//
// - Use recursion to log a fibonacci sequence of n length.

// 0, 1, 1, 2, 3, 5, 8, 13....

const fibonacci = function(n) {
  if (n <= 1) {
    return 0;
  }

  return n fibonacci(n - 1);
}

console.log(fibonacci(5)); // 0, 1, 1, 2, 3

//
// - Definitional
//
// - Explain the use cases for, and differences between — bind, apply and call.

// - Explain event delegation and why it is useful.

// - What is the event loop?

// - How does hoisting work in JavaScript?
// Discussion

// - Walk us through the process of creation of an application or website you've built.

// - Which new JavaScript / browser features are you most excited about and why?


// - What are the differences between functional and imperative programming styles, and explain your preference, if any.

// - prototype - inheritance in js, how it differs from other languages
// - scoping - functions as first class objects, closures, function vs block scoping
// - AJAX - just general stuff, how you've used it, etc, not really super technical questions here
// - Web Security - same origin policy, Cross Site Scripting, Cross Site Request Forgery, cookies (secure flag, http only flag, what to store in cookies, what not to, etc), basic session based security
// - REST API design - given a random data model that I come up with on the spot, design a good API for it
// - Troubleshooting techniques - race conditions, developer tools (firebug, chrome dev tools, windows script debugger), understanding that breakpoints affect the behavior of your code, proxy tools (Fiddler or the like), understanding that proxies can affect the behavior of your code (fiddler mishandles edge cases of content-encoding chunked, as an example), wireshark or similar
// - code organization and dependency management - what do you do, are you familiar with AMD/require.js, commonjs, or es6 modules?
// - Array functions - map/reduce/filter/reduce/sort/etc
// - new ES6 features - not make-or-break, but it's good to know, babel transpiler experience also good.
// - build tools - webpack, grunt, etc
// - server side js - node.js, npm experience
// - currently popular frameworks/libraries - don't care which, just like to hear they know about some, have an opinion, bonus points if they can give some advantages and disadvantages of a few of them.