
/**
* Singleton
*
* The singleton pattern restricts the instantiation of a class to one object.
* This is useful when exactly one object is needed to coordinate actions across
* the system.
*
* A singleton can be implemented by creating a class with a method that creates
* a new instance of the class if one doesn't exist. In the event of an instance
* already existing, it simply returns a reference to that object.
*
* In JavaScript, singletons serve as a shared resource namespace which isolate
* implementation code from the global namespace so as to provide a single point
* of access for functions.
*
* Singletons differ from static classes (or objects) as we can delay their initialization,
* generally because they require some information that may not be available during
* initialization time. This is called lazy allocation and initialization, which
* means the singleton can be constructed without the need for resources or memory
* until it's actually needed.
*
* On the other hand, if we have a static object that can be initialized directly,
* we need to ensure the code is always executed in the same order and this doesn't
* scale when you have a large number of source files. Hence, singletons have this
* advantage over static objects.
*
* Whilst the Singleton has valid uses, often when we find ourselves needing it in
* JavaScript it's a sign that we may need to re-evaluate our design.
*
* They're often an indication that modules in a system are either tightly coupled
* or that logic is overly spread across multiple parts of a codebase. Singletons
* can be more difficult to test due to issues ranging from hidden dependencies,
* the difficulty in creating multiple instances, difficulty in stubbing dependencies
* and so on.
*
* So, in summary. An implementation of the singleton pattern must:
*
* - ensure that only one instance of the singleton class ever exists; and
*
* - provide global access to that instance.
*
* Common uses:
*
* - State objects are often singletons, like the Redux state object.
*
* - Facade objects are often singletons because only one facade is required.
*
* - Singletons are often preferred to global variables because they do not pollute
*   the global namespace. Also, they permit lazy allocation and initialization,
*   whereas global variables in many languages will always consume resources.
*/

const singleton = (() => {
  // store a reference to the singleton
  let instance;

  function init() {
    // private methods and variables
    const privateVariable = 'Im private';
    const privateRandomNumber = Math.random();

    function privateMethod() {
      return privateVariable;
    }

    // public methods and variables
    return {
      publicProperty: 'I am public',

      publicMethod() {
        return 'The public can also see me!';
      },

      getRandomNumber() {
        return privateRandomNumber;
      }
    };
  };

  return {
    // get the singleton instance if one exists
    // or create one if it doesn't
    getInstance() {
      if (!instance) instance = init();

      return instance;
    }
  };
})();

/**
* ES6 Singleton
*/

class SingletonNoInstance {
  constructor(enforcer) {
    throw new Error('Cannot construct singleton');
  }

  static singletonMethod() {
    return 'singletonMethod';
  }

  static staticMethod() {
    return 'staticMethod';
  }
}

export default singleton;
