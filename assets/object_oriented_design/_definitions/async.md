
## Asynchronous Javascript

There are really 5 types of asynchronous code in modern web apps

- AJAX
- User Events
- Animations
- Sockets or Server sent events
- Workers

### Callbacks

What's a callback?

Callbacks are the most primitive way to handle asynchronous code.

Callbacks are just the name of a convention for using JavaScript functions a certain way. Instead of immediately returning some result like most functions, functions that use callbacks take some time to produce a result. The word
'asynchronous', aka 'async' just means 'takes some time' or 'happens in the future,
not right now'.

When you call a normal function you can use its return value immediately, like so:

```javascript
const result = addTwoNumbers(5, 10);
console.log(result) // 15 gets printed out
```

However, functions that have some type of asynchronous action may not return immediately. Think of downloading an image or sending an AJAX request to an API for some data. These actions take time so a normal function will 'block' while these actions occur.

```javascript
const data = getSomeData('http://api/v2/recent-posts')
// data is 'undefined'!
```

Instead, you store the code that should run after the data request is complete in a function. This is the callback! You give it to the getSomeData function and it will run your callback (e.g. 'call you back later') when the request is complete, and pass in the data (or an error if something went wrong).

```javascript
getSomeData((data) => {
  console.log('data received', data);
});
```

This means that our code is no longer 'blocked' while we wait for any API requests to complete. Callbacks work but they're not the best solution.

Using callbacks for asynchronous code, is hard to get right intuitively. A lot of code ends up looking like this:

```javascript
getSomeData(id, (data) => {
  doStuff(data);
  getSomeData(data.parentId, (parent) => {
    doStuff(parent);
    getSomeData(parent.parentId, (grandParent) => {
      doStuff(grandParent);
    });
  });
});
```

We call this 'callback hell' or 'the pyramid of doom' or, my favorite, 'the flying V', which is a reference to the shape of the code resembling the Disney classic 'Mighty Ducks' hockey strategy.

This is not ideal and can lead to some very deeply nested and confusing code. Javascript then introduced the Promise object to help with this exact issue.

### Promises









