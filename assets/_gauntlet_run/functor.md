
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

**In summary:** A functor is an object that has a map method. Arrays in JavaScript implement map and are therefore functors. Promises, Streams and Trees often implement map in functional languages, and when they do, they are considered functors. The map method of the functor takes it’s own contents and transforms each of them using the transformation callback passed to map, and returns a new functor, which contains the structure as the first functor, but with the transformed values.

### References

- [Eric Elliot](https://medium.com/javascript-scene/functors-categories-61e031bac53f#.efshrxr1q)
- [Fun Fun Function - Part 1](https://www.youtube.com/watch?v=YLIH8TKbAh4)
- [Fun Fun Function - Part 2](https://www.youtube.com/watch?v=DisD9ftUyCk&t=26s)
- [Wiki](https://en.wikipedia.org/wiki/Functor)
- [Functional Javascript](http://functionaljavascript.blogspot.se/2013/07/functors.html)
