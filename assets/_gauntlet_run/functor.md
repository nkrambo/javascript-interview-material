
## Functor

A functor is an object that has a map method. Arrays in JavaScript implement map and are therefore functors. Promises, Streams and Trees often implement map in functional languages, and when they do, they are considered functors. The map method of the functor takes it’s own contents and transforms each of them using the transformation callback passed to map, and returns a new functor, which contains the structure as the first functor, but with the transformed values.

Lets have a look at the Functor that we all know and love, Array, and look at what it does that makes it qualify as a functor.

```javascript
const dragons = [
  { name: 'Fluffykins', health: 70  },
  { name: 'Deathlord', health: 65000 },
  { name: 'Little pizza', health: 2 },
];

const names = dragons.map(dragon => dragon.name);

console.log(names); // [Fluffykins', 'Deathlord', 'Little pizza']
```

So here we have an array of dragon objects, and we use map to just get the names of the dragons. Again, we should stress here that map itself is not what we refer to with the word Functor, it is Array that is a Functor because it has a map method.

In order to qualify as a Functor, objects must meet some criteria.

### 1. Transformation of contents

The basic idea is that the map method of the functor takes the contents of the Functor and transforms each of them using the transformation callback passed to map. In this case, this function here is the transformation callback — it transforms a dragon object into just a dragon name. This is the first barrier of entry that Array passes in order to be called a Functor.

Promises are often functors. The promises built into ES6 do not have a map method, but most promise libraries do, for example, if you use Bluebird, you can do this:

```javascript
import Promise from 'bluebird';

const whenDragonLoaded = new Promise((resolve, reject) => {
  // fake loading
  setTimeout(() => {
    resolve({
      { name: ‘Fluffykins’, health: 70  }
    }, 2000);
  });
});

const names =
    whenDragonLoaded
        .map(dragon => dragon.name)
        .then(name => console.log(name));
```

If we look at this code, we create a Promise that yields a dragon object after two seconds. When we have it, we map the name, and then write it to the console.

Note that the map callback is exactly the same as in the previous example. In that example, we saw an array functor shielding the transformation callback from the complex reality that there are more dragons than one, while the Promise functor protects the transformation callback from the complex reality that there isn’t any dragon until later.

### 2. Maintain structure

The second thing that Array#map does in order qualify Array for the title of Functor is that it maintains structure. If you call .map on an array that is three long, it returns an array that is three long. It never changes the length of the array, it doesn’t return null. Like you see in the example, we transform the individual values contained in the array, and even change their types, but map cannot alter the structure of the array itself.

### 3. Returns a new functor

The third and final thing that Array#map does in order to be functor-material is, the value that map returns must be a functor of the same type. Because of this, we can chain map calls like this:

```javascript
const dragons = [
  { name: 'Fluffykins', health: 70  },
  { name: 'Deathlord', health: 65000 },
  { name: 'Little pizza', health: 2 },
];

const nameLengths =
    dragons
        .map(dragon => dragon.name)
        .map(dragonName => dragonName.length);

console.log(nameLengths); // [ 10, 9, 12 ]
```

Here we have the same array of dragons, but after we extract the names, we get the length of each name. Because the first map function returns a functor, we can keep calling map on it. You can also do map map map map chaining with promises, or any other functor.

A functor is an object that has a map method. Arrays in JavaScript implement map and are therefore functors. Promises, Streams and Trees often implement map in functional languages, and when they do, they are considered functors. The map method of the functor takes it’s own contents and transforms each of them using the transformation callback passed to map, and returns a new functor, which contains the structure as the first functor, but with the transformed values.

### Building Our Own Functor

Here's a simple example of a functor:

```javascript
const Identity = value => ({
  map: fn => Identity(fn(value))
});
```

As you can see, it satisfies the functor laws:

```javascript
// trace() is a utility to let you easily inspect
// the contents.
const trace = x => {
  console.log(x);
  return x;
};
const u = Identity(2);

// Identity law
u.map(trace);             // 2
u.map(x => x).map(trace); // 2
const f = n => n + 1;
const g = n => n * 2;

// Composition law
const r1 = u.map(x => f(g(x)));
const r2 = u.map(g).map(f);
r1.map(trace); // 5
r2.map(trace); // 5
```

Now you can map over any data type, just like you can map over an array.

That's about as simple as a functor can get in JavaScript, but it's missing some features we expect from data types in JavaScript. Let's add them. Wouldn't it be cool if the `+` operator could work for number and string values?

To make that work, all we need to do is implement `.valueOf()` -- which also seems like a convenient way to unwrap the value from the functor:

```javascript
const Identity = value => ({
  map: fn => Identity(fn(value)),
  valueOf: () => value,
});

const ints = (Identity(2) + Identity(4));
trace(ints); // 6

const hi = (Identity('h') + Identity('i'));
trace(hi); // "hi"
```

Nice. But what if we want to inspect an `Identity` instance in the console? It would be cool if it would say `"Identity(value)"`, right. Let's add a `.toString()` method:

```javascript
toString: () => `Identity(${value})`,
```

Cool. We should probably also enable the standard JS iteration protocol. We can do that by adding a custom iterator:

```javascript
[Symbol.iterator]: () => {
   let first = true;
   return ({
     next: () => {
       if (first) {
         first = false;
         return ({
           done: false,
           value
         });
       }
       return ({
         done: true
       });
     }
   });
 },
```

Now this will work:

```javascript
// [Symbol.iterator] enables standard JS iterations:
const arr = [6, 7, ...Identity(8)];
trace(arr); // [6, 7, 8]
```

What if you want to take an `Identity(n)` and return an array of Identities containing `n + 1`, `n + 2`, and so on? Easy, right?

```javascript
const fRange = (
  start,
  end
) => Array.from(
  { length: end - start + 1 },
  (x, i) => Identity(i + start)
);
```

Ah, but what if you want this to work with any functor? What if we had a spec that said that each instance of a data type must have a reference to its constructor? Then you could do this:

```javascript
const fRange = (
  start,
  end
) => Array.from(
  { length: end - start + 1 },

  // change `Identity` to `start.constructor`
  (x, i) => start.constructor(i + start)
);

const range = fRange(Identity(2), 4);
range.map(x => x.map(trace)); // 2, 3, 4
```

What if you want to test to see if a value is a functor? We could add a static method on `Identity` to check. We should throw in a static `.toString()` while we're at it:

```javascript
Object.assign(Identity, {
  toString: () => 'Identity',
  is: x => typeof x.map === 'function'
});
```

Let's put all this together:

```javascript
const Identity = value => ({
  map: fn => Identity(fn(value)),

  valueOf: () => value,

  toString: () => `Identity(${value})`,
  [Symbol.iterator]: () => {
    let first = true;
    return ({
      next: () => {
        if (first) {
          first = false;
          return ({
            done: false,
            value
          });
        }
        return ({
          done: true
        });
      }
    });
  },

  constructor: Identity
});

Object.assign(Identity, {
  toString: () => 'Identity',
  is: x => typeof x.map === 'function'
});
```

Note you don't need all this extra stuff for something to qualify as a functor or an endofunctor. It’s strictly for convenience. All you need for a functor is a `.map()` interface that satisfies the functor laws.

### References

- [Eric Elliot](https://medium.com/javascript-scene/functors-categories-61e031bac53f#.efshrxr1q)
- [Fun Fun Function - Part 1](https://www.youtube.com/watch?v=YLIH8TKbAh4)
- [Fun Fun Function - Part 2](https://www.youtube.com/watch?v=DisD9ftUyCk&t=26s)
- [Wiki](https://en.wikipedia.org/wiki/Functor)
- [Functional Javascript](http://functionaljavascript.blogspot.se/2013/07/functors.html)
