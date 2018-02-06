
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
* Let's go through this step by step:
*
* 1. Create a wrapper function with two arguments: a callback and an integer for
*    the timeout — this will hold the state of the timeout. Note that the wrapper
*    function will only be called once, when the wrapper function is referenced.
*
* 2. Declare the timeout variable, which will be undefined until the timeout is
*    set in the returned function.
*
* 3. Return a function - this will be called every time the function is called.
*    Make sure that the function returned is not an arrow function, as you will
*    lose context.
*
* 4. Apply this context to callback function, and attach arguments.
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
* of time in milliseconds that we would consider an element “inactive” after the
* last event is fired.
*
* Explanation:
*
* There are a couple parts of this function that can be used as learning points
* when it comes to JavaScript:
*
* The returned function will take the arguments that the event handler should get
* even if they aren't explicitly declared in the function declaration. Just use
* the arguments variable that is automatically created when inside a function.
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
*/

/**
* @param {function} fn
* @param {number} time
* @return {function}
*/

const debounce = (fn, time) => {
  let timeout;

  // closure
  return () => {
    const functionCall = () => fn.apply(this, arguments);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

export default debounce;
