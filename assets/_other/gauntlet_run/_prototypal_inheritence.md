
## Prototypal Inheritance

Classical and prototypal inheritance are fundamentally and semantically distinct.

There are some defining characteristics between classical inheritance and prototypal inheritance. For any of this article to make sense, you must keep these points in mind:

In class inheritance, instances inherit from a blueprint (the class), and create sub-class relationships. In other words, you can’t use the class like you would use an instance. You can’t invoke instance methods on a class definition itself. You must first create an instance and then invoke methods on that instance.

In prototypal inheritance, instances inherit from other instances. Using delegate prototypes (setting the prototype of one instance to refer to an examplar object), it’s literally Objects Linking to Other Objects, or OLOO.

- A class is a blueprint.
- A prototype is an object instance.

There are several right ways to create objects in JavaScript. The first and most common is an object literal. It looks like this (in ES6):

```javascript
// ES6 / ES2015, because 2015.

let mouse = {
  furColor: 'brown',
  legs: 4,
  tail: 'long, skinny',
  describe () {
    return `A mouse with ${this.furColor} fur,
      ${this.legs} legs, and a ${this.tail} tail.`;
  }
};
```

