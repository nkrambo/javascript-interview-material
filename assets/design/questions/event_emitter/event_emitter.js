
/**
* Write an emitter class:
*
* emitter = new Emitter();
*
* 1. Support subscribing to events.
*
* sub = emitter.subscribe('event_name', callback);
* sub2 = emitter.subscribe('event_name', callback2);
*
* 2. Support emitting events.
*
* This particular example should lead to the `callback` above being invoked with
* `foo` and `bar` as parameters. emitter.emit('event_name', foo, bar);
*
* 3. Support unsubscribing existing subscriptions by releasing them.
*
* sub.release(); // `sub` is the reference returned by `subscribe` above
*
* There is a lot of different implementations for different purposes of the Event
* Emitter pattern, but the basic idea is to provide a framework for managing events
* and to be able subscribes to them.
*
* The event emitter uses the so called "observer pattern".
*
* Basically, there is a central event emitter object which has multiple attached
* "observer" objects. These observers are notified whenever the state of the central
* object is changed. This pattern can easily be implemented using events.
*
* In fact, if you use jQuery or Vue.js or any other client-side library, they all
* use the concept of events in one way or another. This includes both standard DOM
* events, such as mouse clicks, and custom events defined by your components.
*
* If you use a tool such as Webpack or Browserify to bundle your client-side code,
* you can also use the EventEmitter class which works in the same way as the one
* provided by Node.js.
*
* The following Emitter class would allow implementations such as the following:
*
* let input = document.querySelector('input[type="text"]');
* let button = document.querySelector('button');
* let h1 = document.querySelector('h1');
* let emitter = new EventEmitter();
*
* emitter.subscribe('event:name-changed', data => {
*   h1.innerHTML = `Your name is: ${data.name}`;
* });
*
* button.addEventListener('click', () => {
*   emitter.emit('event:name-changed', {name: input.value});
* });
*/

class Emitter {
  /**
  * @constructor
  *
  * The purpose of the events property is to store our events name as the key and
  * the value as an array of subscribers (i.e., functions).
  */
  constructor() {
    this.events = {};
  }

  /**
  * Subscribe to events.
  *
  * If no one already registers the event we need to do this at the first time by
  * setting the key as the event name and initialize it with an empty array, then
  * we push to this array the function that we want to execute when someone emits
  * the event.
  *
  * @param {string} eventName
  * @param {function} fn
  */
  subscribe(eventName, fn) {
    // check if this is the first registration of this event type
    // if not, create a new queue to hold our subscriptions, ie, callbacks
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    // subscribe our callback
    this.events[eventName].push(fn);

    // We need a way to unregister those functions when we don't need them anymore
    // because if you don’t do this, you will have a memory leak.
    // check for event registration, then splice it out
    return {
      release: () => this.events[eventName] && this.events[eventName].splice(this.events[eventName].indexOf(fn), 1),
    };
  }

  /**
  * Emit events.
  *
  * The emit function takes the event name that we want to "publish" and the arguments
  * that we want to send with this event. If the event exists in our events map,
  * we are looping over the functions that we register in the subscribe method and
  * call them with the arguments. Note: we use ES6 ...rest parameter.
  *
  * @param {string} eventName
  * @param {any} args
  */
  emit(eventName, ...args) {
    const event = this.events[eventName];

    // If we have the event registered, we must have at least one subscription,
    // call that function with the data passed in.
    if (event) {
      event.forEach((fn) => {
        fn.call(null, ...args);
      });
    }
  }
}

export default Emitter;
