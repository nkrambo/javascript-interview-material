
## Immutability

### The Problem

First of all, why is immutability important? Well, mutating data can produce code that's hard to read and error prone. For primitive values (like numbers and strings), it is pretty easy to write 'immutable' code, because primitive values cannot be mutated themselves. Variables containing primitive types always point to the actual value. If you pass it to another variable, the other variable will get a fresh copy of that value.

Objects (and arrays) are a different story, they are passed by reference. This means that if you would pass an object to another variable, they will both refer to the same object. If you would then mutate the object from either variable, they will both reflect the changes. Example:

```javascript
const person = {
  name: 'John',
  age: 28,
};

const newPerson = person;
newPerson.age = 30;

console.log(newPerson === person); // true
console.log(person);               // { name: 'John', age: 30 }
```

Can you see the problem here? When we change `newPerson`, we also automatically change the old `person` variable. This is because they refer to the same object. In most cases this is unwanted behaviour and bad practice. Let’s see how we can solve this.

### Going immutable

Instead of passing the object and mutating it, we will be better off creating a completely new object:

```javascript
const person = {
  name: 'John',
  age: 28,
};

const newPerson = Object.assign({}, person, {
  age: 30,
});

console.log(newPerson === person); // false
console.log(person);               // { name: 'John', age: 28 }
console.log(newPerson);            // { name: 'John', age: 30 }
```

`Object.assign` is an ES6 feature that takes objects as parameters. It will merge all objects you pass it into the first one. You are probably wondering why the first parameter is an empty object `{}`. If the first parameter would be 'person' we would still mutate person. If it would be `{ age: 30 }`, we'd overwrite 30 with 28 again because that would be coming after. This solution works, we kept person intact, we treated it as immutable!

However, ECMAScript actually has a special syntax that enables us to do this even more easily. It's the spread operator.

```javascript
const person = {
  name: 'John',
  age: 28,
};

const newPerson = {
  ...person,
  age: 30,
};

console.log(newPerson === person); // false
console.log(newPerson);            // { name: 'John', age: 30 }
```

Again, same result. This time, even cleaner code. First, the 'spread' operator (`...`), copies all the properties from person to the new object. Then we define a new ‘age’ property that overrides the old one. Note that order matters, if `age: 30` would be defined above `...person`, it would be overridden by `age: 28`.

### Removing

How about removing an item? No we won't use delete, this would again, mutate the object. This actually is a bit harder, you can do it as follows:

```javascript
const person = {
  name: 'John',
  password: '123',
  age: 28,
};

const newPerson = Object.keys(person).reduce((obj, key) => {
  if (key !== property) {
    return { ...obj, [key]: person[key] };
  }

  return obj;
}, {});
```

As you can see we pretty much have to code the whole operation ourselves. You could put this functionality in a central place as a generic utility.

### Arrays

Let's do a little example of how you could add an item to an array in a mutating way:

```javascript
const characters = ['Obi-Wan', 'Vader'];
const newCharacters = characters;
newCharacters.push('Luke');

console.log(characters === newCharacters); // true :-(
```

The same problem as with objects. We're desperately failing in creating a new array, we just mutated the old one. We can use the spread operator here too.

```javascript
const characters = ['Obi-Wan', 'Vader'];
const newCharacters = [...characters, 'Luke'];

console.log(characters === newCharacters); // false
console.log(characters);                   // ['Obi-Wan', 'Vader']
console.log(newCharacters);                // ['Obi-Wan', 'Vader', 'Luke']
```
Nice, that was easy! We created a new array containing the old characters plus 'Luke', leaving the old array intact.

Let's see how to do some other operations on arrays, without mutating the original one:

```javascript
const characters = ['Obi-Wan', 'Vader', 'Luke'];

// Removing Vader
const withoutVader = characters.filter(char => char !== 'Vader');
console.log(withoutVader); // ['Obi-Wan', 'Luke']

// Changing Vader to Anakin
const backInTime = characters.map(char => char === 'Vader' ? 'Anakin' : char);
console.log(backInTime); // ['Obi-Wan', 'Anakin', 'Luke']

// All characters uppercase
const shoutOut = characters.map(char => char.toUpperCase());
console.log(shoutOut); // ['OBI-WAN', 'VADER', 'LUKE']

// Merging two character sets
const otherCharacters = ['Yoda', 'Finn'];
const moreCharacters = [...characters, ...otherCharacters];
console.log(moreCharacters); // [ 'Obi-Wan', 'Vader', 'Luke', 'Yoda', 'Finn' ]
```

### A word on performance

What about performance, isn't creating new objects time and memory consuming? Well, true, it comes with a bit more overhead. But that disadvantage is very small compared to the advantages.

One of the more complicated operations in Javascript is tracking if an object changed. Solutions like `Object.observe(object, callback)` are pretty heavy. However, if you keep your state immutable you can just rely on `oldObject === newObject` to check if state changed or not, this is way less CPU demanding.

Second big advantage is code quality. Making sure your state is immutable forces you to think better of your application structure. It encourages programming in a more functional way, makes your code easy to follow and reduces the possibility of nasty bugs.

### Immutable JS to the Rescue

Immutable.js, built by Facebook, provides many Persistent Immutable data structures including: List, Stack, Map, OrderedMap, Set, OrderedSet and Record.

These data structures are highly efficient on modern JavaScript VMs by using structural sharing via hash maps tries and vector tries as popularized by Clojure and Scala, minimizing the need to copy or cache data.

### References

- [Immutable JS](https://facebook.github.io/immutable-js/)
- [Immutable Data and React](https://www.youtube.com/watch?v=I7IdS-PbEgI&feature=youtu.be)
