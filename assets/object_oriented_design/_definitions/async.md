
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

The Promise object was created specifically for asynchronous computations. A Promise represents a value which may be available now, or in the future, or never. It allows you to associate handlers to an asynchronous action's eventual success value or failure reason.

A new Promise takes a single 'executor' function parameter with the arguments resolve and reject. The executor normally initiates some asynchronous work and then, once that completes, calls either the resolve or reject function to resolve the promise or else reject it if an error occurred.

If an error is thrown in the executor function, the promise is rejected. The return value of the executor is ignored.

```javascript
new Promise( /* executor */ function(resolve, reject) { ... } );
```

A Promise is in one of these states:

- pending: initial state, not fulfilled or rejected.
- fulfilled: meaning that the operation completed successfully.
- rejected: meaning that the operation failed.

Promises offer a much cleaner solution to asynchronous code over callbacks.

Using our example from before, we can now do this:

```javascript
getSomeData(id)
  .then((data) => {
    doStuff(data);
    return getSomeData(data.parentId);
  })
  .then((data) => {
    doStuff(data);
    return getSomeData(data.parentId);
  });
```

The problem with Promises is that they cannot be cancelled, which means that you'll probably end up executing code that you didn't want to. This is a problem with most modern web applications.

For example, let's say that we have an user interface listing thumbnails of video content a user may want to view. When a user clicks on an item we send HTTP request a consume a Promise API. If the user changes their mind and clicks a different thumbnail, we send another request. Now we have 2 requests in flight but only want to consume the latter. Well we cannot abort the first request so it will be parsed once it's returned, hence blocking our thread. There are some Promise libraries, like Bluebird, that have cancellation methods in their API, from which you can handle the XHR.abort() method properly.

The other issue with Promises is that they only return a single value. This means working with AJAX is mostly fine, but for other types of asynchronous implementations, like workers and sockets for example.

So we really want an async solution that we can cancel and which can handle more than 1 value.

### Iterators

### Observable

### RxJS

https://www.youtube.com/watch?v=COviCoUtwx4











