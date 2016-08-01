
What does 'IIFE' even stand for?

IIFE stands for Immediately Invoked Function Expressions

Great, so what are IIFEs?

An IIFE is an anonymous function that is created and then immediately invoked. It's not called from anywhere else (hence why it's anonymous), but runs just after being created.

``` javascript
(function () {
  return 5;
} ());
// returns 5 right away
```

They can be used to guard against unintended effects of hoisting:

The following code snip-it is from Wikipedia. I didn't understand how it worked right away, but I wrote the explanation following the snip-it to clear up my confusion.

``` javascript
var v = 1;
var getValue = (function(x) {
  return function() { return x; };
}(v));
v = 2;

getValue(); // returns 1
```

I can't even read that, what do all the nested functions mean?

Let's investigate the IIFE assigned to getValue by rewriting it with a helper function:

``` javascript
var v = 1;

function helperFunction(x) {
  return function() {
    return x;
  };
}
var getValue = helperFunction(v); // returns an anonymous function

v = 2;

getValue(); // invokes that function
```

What happens when the ```var getValue = helperFunction(v)``` line is called?


