
/**
* Module
*
* Modules are an integral piece of any robust application's architecture and
* typically help in keeping the units of code for a project both cleanly separated
* and organized.
*
* Different pieces of software are usually developed in isolation until some requirement
* needs to be satisfied by a previously existing piece of software. The concepts
* of encapsulation and dependency allows these pieces of software to work together,
* without conflicts.
*
* Building modules and handling dependencies with Javascript was cumbersome in the
* past. Newer solutions, in the form of libraries or ES6 modules, have taken most
* of the pain away. Starting a new module or project today, ES6 Modules is the
* right way to go. However, we'll cover several options for implementing modules
* to show the journey of how we eventually got to standardized ES6 modules.
*
* These include:
*
* - Object Literal Notation
* - The Module Pattern
* - The Revealing Module Pattern
* - AMD and CommonJS Modules
* - ES6 Modules
*/

/**
* Object Literal Module
*
* The most basic form of module can be defined with a simple object literal.
* Properties and methods are easily added and extensible and there's no need for
* instantiation using the new operator. Object literals by themselves can assist
* in encapsulating and organizing your code.
*
* That said, if we're opting for this technique, we may be equally as interested
* in the Module pattern. It still uses object literals but only as the return value
* from a scoping function.
*/

const objectModule = {
  // we can define a further object for module configuration:
  myConfig: {
    useCaching: true,
    language: 'en'
  },

  myProperty: 'someValue',

  // basic method
  saySomething() {
    return 'You\'re learning modules yo!'
  },

  // output a value based on the current configuration
  reportMyConfig() {
    return `Caching is: ${this.myConfig.useCaching ? 'enabled' : 'disabled'}`;
  },

  // override the current configuration
  updateMyConfig(newConfig) {
    if (typeof newConfig === 'object') {
      this.myConfig = newConfig;
    }
  }
};

/**
* The Module Pattern
*
* The Module pattern is used to emulate the concept of classes in such a way that
* we're able to include both public/private methods and variables inside a single
* object, thus shielding particular parts from the global scope.
*
* Privacy
*
* The Module pattern encapsulates "privacy", state and organization using closures.
* It provides a way of wrapping a mix of public and private methods and variables,
* protecting pieces from leaking into the global scope and accidentally colliding
* with another developer's interface. With this pattern, only a public API is returned,
* keeping everything else within the closure private.
*
* This gives us a clean solution for shielding logic doing the heavy lifting whilst
* only exposing an interface we wish other parts of our application to use. The
* pattern is quite similar to an immediately-invoked functional expression (IIFE),
* except that an object is returned rather than a function.
*
* It should be noted that there isn't really an explicitly true sense of "privacy"
* inside JavaScript because unlike some traditional languages, it doesn't have
* access modifiers. Variables can't technically be declared as being public nor
* private and so we use function scope to simulate this concept. Within the Module
* pattern, variables or methods declared are only available inside the module itself
* thanks to closure. Variables or methods defined within the returning object however
* are available to everyone.
*/

/**
* Counter Module
*
* Here, other parts of the code are unable to directly read the value of our
* incrementCounter() or resetCounter(). The counter variable is actually fully
* shielded from our global scope so it acts just like a private variable would -
* its existence is limited to within the module's closure so that the only code
* able to access its scope are our two functions.
*/

const counterModule = (() => {
  // private count variable
  let count = 0;

  // public interface
  return {
    incrementCounter() {
      return count += 1;
    },

    resetCounter() {
      count = 0;
    }
  };
})();

/**
* Basket Module
*
* Below we can see a shopping basket implemented using this pattern. The module
* itself is completely self-contained in a global variable called basketModule.
* The basket array in the module is kept private and so other parts of our application
* are unable to directly read it. It only exists with the module's closure and so
* the only methods able to access it are those with access to its scope (ie. addItem(),
* getItemCount() etc).
*
* The methods are effectively namespaced inside basketModule.
*
* The scoping function that wraps around all of our functions, allows us to have
* private functions and private members which can only be consumed by our module.
* As they aren't exposed to the rest of the page (only our exported API is),
* they're considered truly private.
*/

const basketModule = (() => {
  const basket = [];
  let redeemed = false;

  function validateCoupon(coupon) {
    if (coupon === 'TAKE20OFF' && !redeemed) {
      basket.forEach((item) => {
        item.price -= (item.price * 0.2);
        redeemed = true;
      });
    }
  }

  // public interface
  return {
    addItem(value) {
      basket.push(value);
    },

    getItemCount() {
      return basket.length;
    },

    applyCoupon(coupon) {
      validateCoupon(coupon);
    },

    getTotal() {
      let itemCount = this.getItemCount();
      let total = 0;

      while (itemCount--) {
        total += basket[itemCount].price;
      }

      return total;
    }
  };
})();

/**
* The Revealing Module Pattern
*
* The revealing module pattern is a slightly improved version of the module pattern
* above.
*
* With the module pattern we have to repeat the name of the main object when we
* want to call one public method from another or access public variables. Also,
* we have to switch to object literal notation for the things we wish to make public.
*
* The revealing module pattern lets us simply define all functions and variables
* in the private scope and return an anonymous object with pointers to the private
* functionality we want revealed as public.
*
* This pattern allows the syntax of our scripts to be more consistent. It also makes
* it more clear at the end of the module which of our functions and variables may
* be accessed publicly which eases readability.
*/

const revealingModule = (() => {
  let privateCounter = 0;

  function privateFunction() {
    privateCounter += 1;
  }

  function publicFunction() {
    publicIncrement();
  }

  function publicIncrement() {
    privateFunction();
  }

  function publicGetCount() {
    return privateCounter;
  }

  // reveal public pointers to
  // private functions and properties
  return {
    start: publicFunction,
    increment: publicIncrement,
    count: publicGetCount
  };
})();

/**
* AMD and CommonJS Modules
*
* With the development of Node.js came the birth of the CommonJS and then AMD
* projects to make modular Javascript a little easier than the above solutions.
*
* CommonJS is a broad project that actually defines a series of specifications to
* help in server-side JavaScript application development. One area being modules.
*
* AMD was born out of a group of developers that were displeased with the direction
* adopted by CommonJS. In fact, AMD was split from CommonJS early in its development.
* The main difference between AMD and CommonJS lies in its support for asynchronous
* module loading.
*
* Which ever one of these you used, it was considered a huge improvement over other
* patterns for modularity. These tools gained so much popularity that eventually
* they had a huge influence on the ES6 specification for modules, which we'll look
* at next. ES6 took the best of both of these two projects and rolled them into
* the specification, ultimately replacing the need for these in the long run.
*/

/**
* ES6 Modules
*
* The ECMA team behind the standardization of JavaScript decided to finally tackle
* the issue of modules. The new module feature is syntactically pleasing and compatible
* with both synchronous and asynchronous modes of operation.
*
* This solution, by virtue of being integrated in the language, lets runtimes pick
* the best loading strategy for modules. In other words, when asynchronous loading
* gives benefits, it can be used by the runtime.
*
* The 'import' directive can be used to bring modules into the namespace. The 'export'
* directive, on the other hand, can be used to explicitly make elements public.
* All in all, a very simple syntax.
*
* Unfortunately, support for ES6 Modules is still not wide. However, now with
* transpilers, like Babel, we can have support for ES6 modules easily. ES6 modules
* are definitely the right approach when beginning any modern Javascript project.
*/

export { objectModule, counterModule, basketModule, revealingModule };
