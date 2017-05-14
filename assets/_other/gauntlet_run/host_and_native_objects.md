
## Host and Native Objects

Host Objects are objects supplied by a certain environment. They are not always the same because each environment differs and contains host objects that accommodates execution of ECMAScript. For example, the browser environment supplies objects such as window, XMLHttpRequest, document, setTimeout, location. While a node.js environment supplies objects such as NodeList and Global.

Native Objects or Built-in Objects are standard built-in objects provided by Javascript. Native objects is sometimes referred to as 'Global Objects' since they are objects Javascript has provided natively available for use. Native objects: Object (constructor), Date, Math, parseInt, eval, string methods like indexOf and replace, array methods etc...

User objects are anything the user defines. When you create a new object that is not directly a native object, you've made a user object. So if you create a new string ("Hello world") you created a native object, but if you create an instance of an object you've defined (new Cat()) then it’s a user object.

**References**

* [MDN] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)


### Why is extending built-in JavaScript objects not a good idea?

**How to Extend a Built-In Object**

Extending built-in JavaScript objects is easily done through attaching functionality to an object's `prototype`. For example:

```javascript
Array.prototype.first = function() {
  return this[0];
}

const temp = [1, 2, 3];
temp.first(); // returns 1
```

At first glance, this might seem like a great feature, but it is not a recommended practice.

**Why Extending is a Bad Practice**

It depends on who you ask. This is one of those "JS standards" - unlike most of the questions that have a clear answer, this one has a bit more opinion.

The main argument against doing this is: if, in future, a browser decides to implement its own version of your method, your method might get overridden (silently) and the browser’s implementation (which is probably different from yours) would take over. So not extending in the first place is future proofing your code.

On the flip side, if you decide to overwrite the browsers definition, any future developer working on your code won't know about the change. They'll have a harder time getting up to speed.

Generally it's safer to move your particular changes into a library (as with underscore.js). That way your particular methods are clearly marked and there's no chance of conflict.

**But...**

It might be a good idea to add an extension for functionality that became available in later versions, but isn't guaranteed to be available in your particular browser. You can read more about this kind of polyfill on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#Polyfill).

**References**

* [Perfection Kills](http://perfectionkills.com/extending-native-builtins/)
* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#Polyfill)
* [More on what extending objects is](https://www.kirupa.com/html5/extending_built_in_objects_javascript.htm)
