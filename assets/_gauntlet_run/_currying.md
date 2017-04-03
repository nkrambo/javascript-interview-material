
## Currying

### Normal Function

```javascript
let dragon = (name, size, element) =>
  `${name} is a ${size} dragon that breathes ${element}!`;

console.log(dragon('Poopey', 'small', 'bad breath'));
// "Poopey is a small dragon that breathes bad breath!"
```

### Currying

Instead of accepting all of it's arguments immediately, a currying function returns a new function for each argument and finally returns the final function with all the arguments. At each return, the function expects its next dependency until all dependencies have been fulfilled and the final value is returned.

```javascript
let dragon =
  name =>
    size =>
      element =>
        `${name} is a ${size} dragon that breathes ${element}!`;

console.log(dragon('Pepe')('tiny')('salsa'));
// "Pepe is a tiny dragon that breathes salsa!"
```

### But Why?

The idea with currying is that your function can pass the application and gradually receive it's arguments that it needs. That is, you can add some arguments at one level, then add some more arguments in another part of the application and then finally grab your output.

### Make Functions Curry

Our example above has written the function to be curryable. But, we can take normal functions and add currying to them using many types of libraries.

**Using Lodash**

```javascript
import _ from 'lodash';

let dragon = (name, size, element) =>
  `${name} is a ${size} dragon that breathes ${element}!`;

dragon = _.curry(dragon);
```

[(http://img.youtube.com/vi/iZLP4qOwY8I&t/0.jpg)](http://www.youtube.com/watch?v=iZLP4qOwY8I&t "Currying")
