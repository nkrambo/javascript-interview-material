
## Web Workers

### An Introduction to Web Workers and Threads

The JavaScript code that you write will usually execute in a single thread. A thread is like a big todo list. Each statement that you write is added to the list as a task and the browser works its way through this list executing each task one at a time. The problem with a single-threaded architecture is that if a particular task takes a long time to complete everything else is held up until that task finishes. This is known as blocking. In the world of client-side JavaScript applications, using a single-threaded architecture can lead to your app becoming slow or even completely unresponsive.

Web Workers provide a facility for creating new threads for executing your JavaScript code in. Effectively creating a multi-threaded architecture in which the browser can execute multiple tasks at once. Creating new threads for handling large tasks allows you to ensure that your app stays responsive and doesn’t freeze up.

### Spawning a Worker

Creating Web Workers is a fairly simple task. First you need to create a new JavaScript file that contains all of the code that you want your worker to execute. You then create a new `Worker` object, passing in the path to the file that contains the code that your worker is to execute.

```javascript
const worker = new Worker('work.js');
```

Once you have created your worker you can fire it up using the `postMessage()` function. This function is used to pass data to a web worker.

```javascript
worker.postMessage();
```

That's it! You now have a functioning web worker that is executing code in its own thread.

**NOTE:** Creating web workers will spawn real OS-level threads that consume system resources. Just be conscious that this will affect the performance of the user’s whole computer, not just the web browser.

### Communicating with a Web Worker

To send some data from your main application to a web worker you call the postMessage() function on your worker object. These messages can be either simple strings or JavaScript objects.

```javascript
// File: main-script.js

const worker = new Worker('respond.js');
worker.postMessage('Hello World');
```

You now need to write some code in your worker script that will listen for, and process, messages coming from the main application. Inside your worker script you would setup an event listener for the message event.

```javascript
// File: respond.js

// Setup an event listener that will handle messages sent to the worker.
self.addEventListener('message', function(e) {
  // Send the message back.
  self.postMessage('You said: ' + e.data);
}, false);
```

In this example the worker will prepend the text 'You said: '' to the original message and send it back to the application. When sending data from inside a worker you still use the `postMessage()` function, however this time you call the function on `self`.

The final step is to setup an event listener back in the original application that will listen for messages that are sent by the worker.

```javascript
// File: main-script.js

const worker = new Worker('respond.js');

// Setup an event listener that will handle messages received from the worker.
worker.addEventListener('message', function(e) {
  // Log the workers message.
  console.log(e.data);
}, false);

worker.postMessage('Hello World');
```

The event listener in this example will simply log the message from the worker to the console. The whole communication would look like the following:

```
Application (to worker): Hello World
Worker: You said: Hello World
Application (to console): You said: Hello World
```

### Terminating a Worker

Once you are done with a worker you can terminate it by calling the `terminate()` function on your worker object. To have a worker terminate itself you need to call the `close()` function on `self`.

```javascript
// Terminate a worker from your application.
worker.terminate();

// Have a worker terminate itself.
self.close();
```

### Limitations

**Same Origin Policy**

All of your worker scripts must be served from the same domain as the script that is attempting to create the worker.

**Limited Access**

Due to the fact that your Web Workers run outside of the main application thread they do not have the same access to JavaScript features as your main application does. Your workers do not not have access to:

- The DOM
- The `document` object
- The `window` object
- The `parent` object

**Restricted Local Access**

Web Workers will not work if the web page is being served directly from the filesystem (using file://)

### References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Team Treehouse](http://blog.teamtreehouse.com/using-web-workers-to-speed-up-your-javascript-applications)
- [HTML5 Rocks](https://www.html5rocks.com/en/tutorials/workers/basics/)
