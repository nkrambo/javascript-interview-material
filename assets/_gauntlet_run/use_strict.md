
## `"use strict";`

Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions.

Strict mode helps out in a couple ways:

- It catches some common coding bloopers, throwing exceptions.
- It prevents, or throws errors, when relatively "unsafe" actions are taken (such as gaining access to the global object).
- It disables features that are confusing or poorly thought out.

### Example

JavaScript used to silently fail in contexts where what was done was an error. Strict mode throws in such cases. If your code base contains such cases, testing will be necessary to be sure nothing is broken. Once again, it can happen at the function granularity level.

Setting a value to an undeclared variable.

```javascript
function f(x) {
  'use strict';
  var a = 12;
  b = a + x * 35; // error!
}
f(42);
```

This used to change a value on the global object which is rarely the expected effect. If you really want to set a value to the global object, pass it as an argument and explicitly assign it as a property:

```javascript
var global = this; // in the top-level context, "this" always
                   // refers to the global object
function f(x) {
  'use strict';
  var a = 12;
  global.b = a + x * 35;
}
f(42);
```

### References

- [John Resig](http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/)