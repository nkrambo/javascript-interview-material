
/**
* Module
*
* Modules are an integral piece of any robust application's architecture and
* typically help in keeping the units of code for a project both cleanly separated
* and organized.
*
* In JavaScript, there are several options for implementing modules. These include:
*
* - Object literal notation
* - The Module pattern
* - AMD and CommonJS modules
* - ES6 Modules
*/

/**
* Object literal module
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
* The Module pattern
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
*/

const basket = (() => {



  // public interface
  return {

  };
})();

export { objectModule, counterModule };
