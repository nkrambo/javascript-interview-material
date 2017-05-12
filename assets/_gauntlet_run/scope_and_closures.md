
## Scope and Closures

Closures are functions that refer to independent (free) variables (variables that are used locally, but defined in an enclosing scope). In other words, these functions 'remember' the environment in which they were created.

[(http://img.youtube.com/vi/CQqwU2Ixu-U/0.jpg)](http://www.youtube.com/watch?v=CQqwU2Ixu-U "Closure")

**Lexical Scoping**

```javascript
function init() {
  const name = "Mozilla"; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function    
  }
  displayName();    
}

init();
```

The function ```init()``` creates a local variable name and then a function called ```displayName(). displayName()``` is an inner function that is defined inside ```init()``` and is only available within the body of that function. ```displayName()``` has no local variables of its own, however it has access to the variables of outer functions and so can use the variable name declared in the parent function.

This is an example of lexical scoping: in JavaScript, the scope of a variable is defined by its location within the source code (it is apparent lexically) and nested functions have access to variables declared in their outer scope.

**Closure**

Now consider the following example:

```javascript
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    alert(name);
  }

  return displayName;
}

const myFunc = makeFunc();
myFunc();
```

If you run this code it will have exactly the same effect as the previous init() example: the string "Mozilla" will be displayed in a JavaScript alert box. What's different — and interesting — is that the displayName() inner function was returned from the outer function before being executed.

That the code still works may seem unintuitive. Normally, the local variables within a function only exist for the duration of that function's execution. Once makeFunc() has finished executing, it is reasonable to expect that the name variable will no longer be accessible. Since the code still works as expected, this is obviously not the case.

The solution to this puzzle is that myFunc has become a closure. A closure is a special kind of object that combines two things: a function, and the environment in which that function was created. The environment consists of any local variables that were in-scope at the time that the closure was created. In this case, myFunc is a closure that incorporates both the displayName function and the "Mozilla" string that existed when the closure was created.

Here's a slightly more interesting example — a makeAdder function:

```javascript
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```

In this example, we have defined a function makeAdder(x) which takes a single argument x and returns a new function. The function it returns takes a single argument y, and returns the sum of x and y.

In essence, makeAdder is a function factory — it creates functions which can add a specific value to their argument. In the above example we use our function factory to create two new functions — one that adds 5 to its argument, and one that adds 10.

add5 and add10 are both closures. They share the same function body definition, but store different environments. In add5's environment, x is 5. As far as add10 is concerned, x is 10.

**Another Example**

Here we have an example, we our closure allows us to keep track of our `counter` variable, increasing it every time we invoke our returned function.

```javascript
function petCounter(pet) {
  let counter = 0;

  return function() {
    console.log(`You have ${counter} ${pet}`);
    counter += 1;
  }
}

const kittenCounter = petCounter('kittens');
const dogCounter = petCounter('dogs');

kittenCounter();  // You have 0 kittens
kittenCounter();  // You have 1 kittens
kittenCounter();  // You have 2 kittens

dogCounter();     // You have 0 dogs
dogCounter();     // You have 1 dogs
dogCounter();     // You have 2 dogs
```

**Practical Closures**

That's the theory of closures — but are closures actually useful? Let's consider their practical implications. A closure lets you associate some data (the environment) with a function that operates on that data. This has obvious parallels to object oriented programming, where objects allow us to associate some data (the object's properties) with one or more methods.

Consequently, you can use a closure anywhere that you might normally use an object with only a single method.

Situations where you might want to do this are particularly common on the web. Much of the code we write in web JavaScript is event-based — we define some behavior, then attach it to an event that is triggered by the user (such as a click or a keypress). Our code is generally attached as a callback: a single function which is executed in response to the event.

**Emulating private methods with closures**

Languages such as Java provide the ability to declare methods private, meaning that they can only be called by other methods in the same class.

JavaScript does not provide a native way of doing this, but it is possible to emulate private methods using closures. Private methods aren't just useful for restricting access to code: they also provide a powerful way of managing your global namespace, keeping non-essential methods from cluttering up the public interface to your code.

Here's how to define some public functions that can access private functions and variables, using closures which is also known as the module pattern:

```javascript
const counter = (function() {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  // return interface
  return {
    increment() {
      changeBy(1);
    },
    decrement() {
      changeBy(-1);
    },
    value() {
      return privateCounter;
    }
  };
})();
```

**ES6**

If you're using ES6 modules then there would be no need to implement this pattern. In ES6, each module has its own scope, thus anything you declare there will be "private" unless you export it.

**References**

* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
