
## Asynchronous Javascript

There are really 5 types of asynchronous code in modern web apps:

- [AJAX](/assets/_docs/async/ajax.md)
- User Events
- [Sockets or Server sent events](/assets/_docs/async/web_sockets.md)
- [Workers](/assets/_docs/async/web_workers.md)
- Animations

### Callbacks

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

Promises have the following features:

- Guaranteed future
- Immutable
- Single value
- Caching

The problem with Promises is that they cannot be cancelled, which means that you'll probably end up executing code that you didn't want to. This is a problem with most modern web applications. This refers to our first feature above, guaranteed future.

For example, let's say that we have an user interface listing thumbnails of video content a user may want to view. When a user clicks on an item we send HTTP request a consume a Promise API. If the user changes their mind and clicks a different thumbnail, we send another request. Now we have 2 requests in flight but only want to consume the latter. Well we cannot abort the first request so it will be parsed once it's returned, hence blocking our thread. There are some Promise libraries, like Bluebird, that have cancellation methods in their API, from which you can handle the XHR.abort() method properly.

The other issue with Promises is that they only return a single value. This means working with AJAX is mostly fine, but for other types of asynchronous implementations, like workers and sockets for example.

So we really want an async solution that we can cancel and which can handle more than 1 value. The other 2 features, immutable and caching are great.

So to summarize, the problems with the Promise type:

- No cancellation
- Single value

### Async / Await

The async / await feature didn't make the cut for ES2016, it's currently a Stage 3 proposal, and actively being worked on. We can expect it in ES2018, but developers are making use of this feature now with Babel trans-piling.

Why is it so awesome? It's a beautiful way for writing asynchronous code that appears to be synchronous.

The most important thing to understand when getting started with Async/Await is that they're very closely tied to Promises. In fact, every async function you write will return a promise, and every single thing you await will ordinarily be a promise.

Let's say we had an asynchronous function called getUser that looked something like this.

```javascript
function getUser () {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({name: 'Tyler'}), 2000)
  })
}
```

Our getUser function returns us a promise that takes 2 seconds to resolve. This is, by definition, asynchronous code. That means that we can't expect to receive the user object immediately, it's going to take some time (specifically 2 seconds in this example).

To deal with this delay, promises allow us to pass a function to .then and that function will be called when our promise resolves (when the user object is ready).

```javascript
function handleGetUser () {
  getUser()
    .then((user) => {
      console.log('The user is: ', user)
    })
}
```

So when handleGetUser gets invoked, getUser will be invoked and roughly two seconds later we'll see "The user is: Object {name: "Tyler"}" in our console. So what we've done is we've essentially said "Hey getUser, I know you're probably not going to immediately have the value that I need ready for me, but when you do, go ahead and call the function that I gave to .then with the value. Thanks!".

So far so good. Last thing about promises is that we want to have a catch all case so that if any of the functions in our promise chain throw an error, we'll hear about it.

```javascript
function handleGetUser () {  
  getUser()
    .then((user) => {
      console.log('The user is: ', user)
    })
    .catch((error) => {
      console.warn('Oh no there was an error: ', error)
    })
}
```

Perfect. Now we're handling errors as well.

If you're already familiar with promises you're probably bored at this point, that's fair. Let's jump into how we can change this code with async/await.

As I mentioned above, Async/Await allows you to write asynchronous code that appears to be synchronous.

If we were to change out code above to try to appear synchronous, we'd probably do something like this.

```javascript
function handleGetUser () {
  var user = getUser()
  console.log(user)
}
```

Unfortunately, it won't work. With the code the way it is, user is going to be a promise and then we'll just log a promise to the console. That's no good. What if we made some small changes though. We need to tell the compiler that our getUser function is asynchronous so that it will hold off execution of our console.log until it's done resolving.

```javascript
function handleGetUser () {  
  var user = await getUser()
  console.log(user)
}
```

Simple enough. Remember our initial statement earlier? "and every single thing you await will ordinarily be a promise." We're using await to tell the compiler that this function is going to return a promise and we want to pause execution of the rest of the function until this promise resolves.

Unfortunately, if you ran the code above it still wouldn't work. The reason for that is you can't use await without using async. That's why it's called async/await. The rule I like to repeat to myself is this, "if I want to use await, I need to make sure that the function I'm in is an async function." What that looks like in code is this.

```javascript
async function handleGetUser () {
  var user = await getUser()
  console.log(user)
}
```

And that's it! We've successfully gotten rid of our .then method and replaced it with more synchronous looking code.

Now if you were observant you might have noticed that we got rid of our .catch invocation so we're currently not handling any error. Don't fear though, there's already a native way to do this in JavaScript we can take advantage of and that's with try/catch.

```javascript
async function handleGetUser () {
  try {
    var user = await getUser()
    console.log(user)
  } catch (error) {
    console.log('Error in handleGetUser', error)
  }
}
```

Beautiful. Now any errors that are thrown in our try block will be caught by our catch block.

### Iterators

### Observable

### RxJS

### References

- [RxJS](http://reactivex.io/rxjs/)
- [Redux Observable](https://github.com/redux-observable/redux-observable)
- [MDN - Async / Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN - Callbacks](https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes/Using_js-ctypes/Declaring_and_Using_Callbacks)
- [MDN - Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Async Programming in ES7](https://www.youtube.com/watch?v=lil4YCCXRYc)
- [RxJS Version 5](https://www.youtube.com/watch?v=COviCoUtwx4)
- [RxJS + Redux + React = Amazing](https://www.youtube.com/watch?v=AslncyG8whg&t=159s)
