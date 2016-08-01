
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

1. ```helperFunction(v)``` gets called with the current value of ```v```, which is 1
2. ```helperFunction``` gets executed, with the param ```x``` set to 1
3. The anonymous function returned by ```helperFunction``` gets created, still with ```x``` set to 1
4. ```getValue``` is set to the result of ```helperFunction```, which is

``` javascript
function() {
  return 1;
};
```

So now things look like this:

``` javascript
var v = 1;
var getValue = function() {
  return 1;
};
v = 2;

getValue();
```

And from here it is hardly surprising that ```getValue()``` returns 1.

What would have happened without the IIFE?

``` javascript
var v = 1;
var getValue = function() {
  return v;
};
v = 2;

getValue(); // returns 2
```

Although the ```return v``` is written when ```v``` is 1, by the time ```getValue``` is called ```v``` has been set to 2. Thus ```getValue()``` actually returns 2.

IIFEs can also be used to enforce private variables and methods:

``` javascript
var counter = (function(){
  var i = 0;

  return {
    get: function(){
      return i;
    },
    set: function( val ){
      i = val;
    }
  };
}());

counter.get(); // returns 0
counter.set( 3 );
counter.get(); // returns 3
counter.i; // returns undefined
```

Again with the confusing nested functions! Can I have a rewrite?

``` javascript
function helperFunction(){
  var i = 0;

  return {
    get: function(){
      return i;
    },
    set: function( val ){
      i = val;
    }
  };
};

var counter = helperFunction();

counter.get(); // returns 0
counter.set( 3 );
counter.get(); // returns 3
counter.i; // returns undefined
```

Ok, that's a bit clearer, but what is ```counter``` actually set to?

```counter``` is set to the return value of ```helperFunction```, that is just this bit:

``` javascript
{
  get: function(){
    return i;
  },
  set: function( val ){
    i = val;
  }
};
```

You'll notice ```var i``` doesn't appear anywhere in there. ```i``` is defined elsewhere in the helperFunction / IIFE. Since the return value of ```helperFunction``` doesn't give explicit access to ```i```, counter doesn't have access.

Fine, so if that's all that ```counter``` has access to, how does ```counter.get()``` return a value?

Scopes! The scope from ```helperFunction``` has access to ```i```. The object returned by ```helperFunction``` (a.k.a counter) has access to all the variables defined in ```helperFunction```. It works like this:

1. Call to ```counter.get()``` goes and looks at the get function defined in ```helperFunction...```

``` javascript
get: function() {
  return i;
}
```

2. The ```get``` function looks for its local scope, which is ```helperFunction ...```

``` javascript
function helperFunction() {
var i = 0;

  return {
    get: function() {
      return i;
    },
    set: function(val) {
      i = val;
    }
  };
};
```
3. In ```helperFunction``` is a definition for ```i...```

``` javascript
  var i = 0;
```

4. So ```get``` can return 0!


