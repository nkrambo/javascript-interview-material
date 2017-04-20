
## 'this' Keyword and Binding

### Implicit Binding

Where is this function invoked? The 'this' keyword always refers to the object to
the left of the Dot at method invocation.

```javascript
const me = {
  name: 'Nick',
  age: 32,
  sayName() {
    console.log(`Hello, ${this.name}`);
  }
};

me.sayName(); // Hello, Nick
```

So if we look to the left of the Dot, we see the 'me' object. Therefore, the 'this'
keyword refers to 'me'.

Another example, using a mixin.

```javascript
function sayNameMixin(obj) {
  obj.sayName = function() {
    console.log(`Hello, ${this.name}`);
  }
}

const me = {
  name: 'Nick',
  age: 32,
};

const you = {
  name: 'John',
  age: 21,
};

sayNameMixin(me);
sayNameMixin(you);

me.sayName(); // Hello, Nick
you.sayName(); // Hello, John
```

Another example. Again, we can look to the left of the Dot at invocation to see
what the implicit binding means the 'this' keyword refers to.

First, the jim object is to the left and, secondly, the mother object is to the left.

```javascript
function Person(name, age) {
  return {
    name,
    age,
    sayName() {
      console.log(`Hello ${this.name}`);
    },
    mother: {
      name: 'Stacey',
      sayName() {
        console.log(`Hello, ${this.name}`);
      },
    },
  };
};

const jim = Person('Jim', 42);

jim.sayName();  // Hello, Jim
jim.mother.sayName(); // Hello, Stacey

```

### Explicit Binding

Explicit binding means using the call, apply or bind function methods to explicitly
bind 'this'.

Let's say we have a sayName() function in the global space and a 'james' object.
We can call the sayName() function in the context of 'nick' with the call() method.

**call()**

The first parameter of call() is the context of what you want to bind the 'this'
keyword to. The remaining arguments can be passed to the called function individually.

`function.prototype.call(context, arg1, arg2, ...);`

**apply()**

The apply() method is exactly the same as call() except it takes an array of arguments
as the second parameter, which can be cleaner and more concise to use.

`function.prototype.apply(context, [argsArray]);`

**bind()**

The bind() method is the same as call() expect it returns a new function that can
be invoked later.

`function.prototype.bind(context, arg1, arg2, ...);`

```javascript
function sayName(lang1, lang2) {
  console.log(`Hello, my name is ${this.name}. I can program in ${lang1} and ${lang2}.`);
}

const languages = ['Javascript', 'Python'];

const nick = {
  name: 'Nick',
  age: 32,
};

// call
sayName.call(nick, languages[0], languages[1]); // Hello, my name is Nick. I can program in Javascript and Python.

// apply
sayName.apply(nick, languages); // Hello, my name is Nick. I can program in Javascript and Python.

// bind
const newFn = sayName.bind(nick, languages[0], languages[1]);
newFn(); // Hello, my name is Nick. I can program in Javascript and Python.
```

### New Binding

The 'new' keyword is used with constructor functions, which help us construct objects.

The new binding rule says that when a function is called with the 'new' keyword
the 'this' keyword is bound to the object being constructed.

```javascript
const Animal = function(color, name, type) {
  // this = {}
  this.color = color;
  this.name = name;
  this.type = type;
}

const zebra = new Animal('Black and white', 'Zorro', 'Zebra');
```

### Window Binding

Window binding is the default binding if the context is not explicitly or implicitly
bound to an object.

Consider the following...

```javascript
const sayAge = function() {
  console.log(this.age);
};

const nick = {
  age: 32,
};

// bind to nick object
sayAge.call(nick); // 32

// not bound so defaults to window
sayAge(); // undefined

// to further illustrate, let's define age on the window object
window.age = 32;
sayAge(); // 32
```

We have a globally spaced sayAge() function. We can explicitly bind this to the
'nick' object using call().

If we don't bind sayAge() and invoke it, it will bind to the window object by default
and since we don't have an 'age' property on the window object we will get returned
'undefined'.

### Replicating Explicit Bindings

**bind**

The bind() method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

```javascript
if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    let aArgs   = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          return fToBind.apply(this instanceof fNOP
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    if (this.prototype) {
      // Function.prototype doesn't have a prototype property
      fNOP.prototype = this.prototype;
    }

    fBound.prototype = new fNOP();

    return fBound;
  };
}
```

