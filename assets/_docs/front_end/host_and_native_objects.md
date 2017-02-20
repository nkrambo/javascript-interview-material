
# Host and Native Objects

Host Objects are objects supplied by a certain environment. They are not always the same because each environment differs and contains host objects that accommodates execution of ECMAScript. For example, the browser environment supplies objects such as window, XMLHttpRequest, document, setTimeout, location. While a node.js environment supplies objects such as NodeList and Global.

Native Objects or Built-in Objects are standard built-in objects provided by Javascript. Native objects is sometimes referred to as 'Global Objects' since they are objects Javascript has provided natively available for use. Native objects: Object (constructor), Date, Math, parseInt, eval, string methods like indexOf and replace, array methods etc...

User objects are anything the user defines. When you create a new object that is not directly a native object, you've made a user object. So if you create a new string ("Hello world") you created a native object, but if you create an instance of an object you've defined (new Cat()) then it’s a user object.

**References**

* [MDN] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
