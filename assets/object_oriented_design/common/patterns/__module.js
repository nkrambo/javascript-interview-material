
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

export { objectModule };
