
## Data Types

The latest ECMAScript standard defines seven data types:

Six data types that are primitives:

- Boolean
- Null
- Undefined
- Number
- String
- Symbol (new in ECMAScript 6)

... and Object

A primitive (primitive value, primitive data type) is data that is not an object and has no methods. It is a basic data type provided by a programming language as a basic building block. All primitive types define **immutable** values (values, which are incapable of being changed).

Except for `null` and `undefined`, all primitive values in ECMAScript have object equivalents that wrap around the primitive values. The wrapper's `valueOf()` method returns the primitive value.

### undefined

`undefined` is a property of the global object; i.e., it is a variable in global scope.

A variable that has not been assigned a value is of type `undefined`. A method or statement also returns `undefined` if the variable that is being evaluated does not have an assigned value. A function returns `undefined` if a value was not returned.

### null

`null` represents the intentional absence of any object value.

`null` expresses a lack of identification, indicating that a variable points to no object. In APIs, `null` is often retrieved in a place where an object can be expected but no object is relevant.

### undeclared

A variable is undeclared when it does not use the var keyword. It gets created on the global object (that is, the window), thus it operates in a different space as the declared variables.

Note: this will not work in strict mode. It will throw an error.

### NaN

`NaN` is a property of the global object. In modern browsers, `NaN` is a non-configurable, non-writable property. It is the returned value when Math functions fail or when a function trying to parse a number fails.

The `isNaN()` global function determines whether a value is `NaN` or not.

### Boolean

Boolean represents a logical entity and can have two values: true, and false.

### Number

there is only one number type: the double-precision 64-bit binary format IEEE 754 value (number between -(2^53 -1) and 2^53 -1). There is no specific type for integers.

### String

JavaScript's String type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values. Each element in the String occupies a position in the String. The first element is at index 0, the next at index 1, and so on. The length of a String is the number of elements in it.

### Symbol

Symbols are new to JavaScript in ECMAScript Edition 6. A Symbol is a unique and immutable primitive value and may be used as the key of an Object property

### Objects

A JavaScript object is a mapping between keys and values. Keys are strings (or Symbols) and values can be anything. This makes objects a natural fit for hashmaps.

**Functions** are regular objects with the additional capability of being callable.

**Arrays** are regular objects for which there is a particular relationship between integer-key-ed properties and the 'length' property. Additionally, arrays inherit from Array.prototype which provides to them a handful of convenient methods to manipulate arrays.

### Not Everything is an Object

Not everything is an object in JavaScript, although it seems that way. Many things that you interact with regularly (strings, numbers, booleans) are primitives, not objects. Unlike objects, primitive values are immutable. The situation is complicated by the fact that these primitives have object wrappers (String, Number and Boolean); these objects have methods and properties while the primitives do not, but the primitives appear to have methods because JavaScript silently creates a wrapper object when code attempts to access any property of a primitive.

For example, consider the following code:

```javascript
let s = 'foo';
let sub = s.substring(1, 2); // sub is now the string "o"
```

Behind the scenes, `s.substring(1, 2)` behaves as if it is performing the following (approximate) steps:

1. Create a wrapper `String` object from `s`, equivalent to using `new String(s)`
2. Call the `substring()` method with the appropriate parameters on the `String` object returned by step 1
3. Dispose of the `String` object
4. Return the string (primitive) from step 2.

A consequence of this is that while it looks as though you can assign properties to primitives, it is pointless because you cannot retrieve them:

```javascript
let s = 'foo';
s.bar = 'cheese';
alert(s.bar); // undefined
```

This happens because the property is effectively defined on a `String` object that is immediately discarded.

Numbers and Booleans also behave this way. Functions, however, are fully-fledged objects, and inherit from `Object` (actually `Object.prototype`, but that's another topic). Functions therefore can do anything objects can, including having properties:

```javascript
function foo() {}
foo.bar = 'tea';
alert(foo.bar); // tea
```

### What's the difference between a variable that is: `null`, `undefined` or undeclared? How would you go about checking for any of these states?

- `undeclared` variables don't even exist
- `undefined` variables exist, but don't have anything assigned to them
- `null` variables exist and have null assigned to them

```javascript
// check undefined
if (typeof(variable) === 'undefined') {}

// check null
if (variable === null) {}
```

### References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [Lucy Bain](http://lucybain.com/blog/2014/null-undefined-undeclared/)
