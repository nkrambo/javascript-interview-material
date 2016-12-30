
/**
* Asynchronous Javascript
*
* There are really 5 types of asynchronous code in modern web apps
*
* - AJAX
* - User Events
* - Animations
* - Sockets or Server sent events
* - Workers
*
* The most primitive way to handle asynchronous code is using callbacks.
*
* What's a callback?
*
* Callbacks are just the name of a convention for using JavaScript functions. There
* isn't a special thing called a 'callback' in the JavaScript language, it's just
* a convention. Instead of immediately returning some result like most functions,
* functions that use callbacks take some time to produce a result. The word
* 'asynchronous', aka 'async' just means 'takes some time' or 'happens in the future,
* not right now'. Usually callbacks are only used when doing I/O, e.g. downloading
* things, reading files, talking to databases, etc.
*/

getSomeData((data) => {
  console.log('data received', data);
});