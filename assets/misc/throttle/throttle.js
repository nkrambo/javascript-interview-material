
/**
* Throttle
*
* Write a throttle function.
*/

/**
* What is throttle?
*
* Throttling a function makes sure it's called at regular intervals.
*
* The first invocation of our function will execute and sets the limit period timeout.
* We can invoke our function during this period but it will not be executed until
* the throttle period has passed. Once it has passed, the next invocation will be
* executed and the process repeats.
*
* USE:
*
* throttleBtn.addEventListener('click', throttle(function() {
*   return console.log('Hey! It is', new Date().toUTCString());
* }, 1000));
*/

/**
* @param {function} fn
* @param {number} limit
* @return {function}
*/

const throttle = (fn, limit) => {
  let timeout; // track the delay period

  // do not use arrow function, won't have 'this'
  return function (...rest) { // eslint-disable-line
    const context = this;
    const args = rest;
    if (!timeout) {
      fn.apply(context, args);
      timeout = true;
      setTimeout(() => {
        timeout = false;
      }, limit);
    }
  };
};

/**
* But what about our last invocation? If it's in the limit period it will be ignored
* and maybe that's not what we want. To put this into context, if we bound to mouse
* movement for say a drag or resize event and missed out the last invocation we
* would never get the desired result as the final invocation would always be ignored.
* So we need to catch this and execute it after the limit period.
*/

const throttleMod = (fn, limit) => {
  let timeout;
  let lastFunc;
  let lastRan;
  return function (...rest) { // eslint-disable-line
    const context = this;
    const args = rest;
    if (!timeout) {
      fn.apply(context, args);
      lastRan = Date.now();
      timeout = true;
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          fn.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

export { throttle, throttleMod };
