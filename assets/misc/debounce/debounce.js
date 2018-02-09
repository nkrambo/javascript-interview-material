
/**
* Debouce
*
* Write a debounce function.
*/

/**
* Debouce
*
* What is debounce?
*
* This function is built in order to limit the amount of times a function is called
* scroll events, mousemove events, and keypress events are all great examples
* of events that we might want to capture, but can be quite taxing if we capture
* them every single time they fire. In order to combat this, we implement debounce
* and throttle functions. We won't discuss the throttle function in this post, but
* a debounce function will wait until the last time the function is called and then
* fire after a predetermined amount of time or once the event firing becomes inactive.
*
* What's the difference between debounce and throttle?
*
* Throttling a function makes sure it's called at regular intervals. Debouncing
* will mean it is called at the end (or start) of a bunch of events.
*
* For example:
*
* Let's say we're handling the mousemove event, over a timeframe of 2 seconds
*
*
*                            mousemove (2 seconds)
* TIME ---------------------------------------------------------------- TIME
*
*                                                                      | debounce
*
*       |      |       |       |       |       |       |       |       | throttle (200ms)
*
*
* Debounce, we'll fire once at the END of the event and AFTER, it's configured
* wait time. That's why this is used on things like seach input keyup events.
*
* Throttle is called at at regular intervals, which is why it's good for perhaps
* the resize event or similar.
*
* Let's go through this step by step:
*
* 1. Create a wrapper function with two arguments: a callback, an integer for
*    the timeout — this will hold the state of the timeout. Note that the wrapper
*    function will only be called once, when the wrapper function is referenced.
*
* 2. Declare the timeout variable, which will be undefined until the timeout is
*    set in the returned function.
*
* 3. Return a function - this will be called every time the function is called.
*    Make sure that the function returned is not an arrow function, as you will
*    lose context. We pass in arguments with the ...rest parameter.
*
* 4. Apply this context to callback function, and attach rest arguments.
*
* 5. clearTimeout if timeout exists.
*
* 6. setTimeout and pass the applied function.
*
* This way, the clearTimeout resets the timeout each time the function is called,
* and if the function is not called within the time provided, then it will finally
* fire the function.
*
* Using the function would look like this:
*
* window.addEventListener('keyup', debounce((e) => {
*   console.log(e);
* }, 1000));
*
* The first argument being passed is the event handler, and the second is the amount
* of time in milliseconds that we would consider an element "inactive" after the
* last event is fired.
*
* Explanation:
*
* There are a couple parts of this function that can be used as learning points
* when it comes to JavaScript:
*
* The returned function will take the arguments that the event handler should get
* even if they aren't explicitly declared in the function declaration. Just use
* the ...rest parameter that we pass in, we could also use the arguments variable.
*
* fn.apply is very handy, and is perfect for this situation as we won't always
* know how many arguments are being provided, therefore we can send the full object
* through. This will also persist the context of our function.
*
* The functionCall variable must be declared inside the returned function so we
* can call it with the correct arguments.
*
* We must declare the timeout variable, because if we don't pass a variable into
* clearTimeout, then it will globally clear timeouts, and we wouldn't want to interfere
* in the global scope so as to avoid unwanted side-effects.
*
* The returned timeoutID is a positive integer value which identifies the timer
* created by the call to setTimeout(); this value can be passed to clearTimeout()
* to cancel the timeout.
*
* It may be helpful to be aware that setTimeout() and setInterval() share the same
* pool of IDs, and that clearTimeout() and clearInterval() can technically be used
* interchangeably. For clarity, however, you should try to always match them to
* avoid confusion when maintaining your code.
*/

/**
* @param {function} fn
* @param {number} time
* @return {function}
*/

const debounce = (fn, time) => { // wrapper
  let timeout; // undefined

  // closure
  // use ...rest parameter, we could have used the automatically created arguments variable too
  return function (...rest) { // eslint-disable-line
    // set context, pass in arguments
    const functionCall = () => fn.apply(this, rest);

    // clear timeoutID if it exists
    clearTimeout(timeout);

    // returns the timeoutID, to use in the clearTimeout
    timeout = setTimeout(functionCall, time);
  };
};

export default debounce;
