
## Monad

Monads are a type of Functor. Remember that a functor is an object that implements `map`. A monad is a more powerful monad that also implements `flatMap`.

So... what is `flatMap`? First, let's implement a simple stream using bacon.js.

```javascript
const Bacon = require('baconjs');
const stream = new Bacon.Bus();

stream
  .onValue(word => console.log(word));

stream.push('cat');
stream.push('meal');
stream.push('trumpet');

// 'cat'
// 'meal'
// 'trumpet'
```
Nothing special going on here. We first require bacon.js and new up a `Bus` stream. Then, when the stream receives a value, we `console.log` the value. Finally, we push 3 values onto our stream.

Remember that streams are functors, and that means that we can `map` them. Let's take our above example and `map` our incoming values before logging them, like so.

```javascript
stream
  .map(word => word.toUpperCase())
  .onValue(word => console.log(word));
```

That's easy enough.

Let's say that we want to use the Google translate API to translate these words to Portuguese?

First, let's write a function that would translate a single word to Portuguese using this API.

```javascript
function getInPortuguese(word) {
  // Google Translate API is a paid (but dirt cheap) service. This is my key
  // and will be disabled by the time the video is out. To generate your own,
  // go here: https://cloud.google.com/translate/v2/getting_started
  const apiKey = 'AIzaSyB4DyRHIsNhogQXmH16YKbZfR-lTXrQpq0';
	const url = `https://www.googleapis.com/language/translate/v2?key=${apiKey}&source=en&target=pt&q=${encodeURIComponent(word)}`;

  const promise = fetch(url)
 		.then(response => response.json())
	  .then(parsedResponse =>
    	parsedResponse
      	.data
        .translations[0]
        .translatedText;
    );

  const stream = Bacon.fromPromise(promise);
  return stream;
}

getInPortuguese('meal')
  .onValue(word => console.log(word)); // refeição
```

Ok... Let's try and tie this to our stream now.

```javascript
const stream = new Bacon.Bus();

stream
  .map(word => getInPortuguese(word))
  .onValue(word => console.log(word));

stream.push('cat');
stream.push('meal');
stream.push('trumpet');

// Bacon.fromPromise({})
// Bacon.fromPromise({})
// Bacon.fromPromise({})
```

This is not what we were expecting! Map is just giving us the individual stream items but we wanted the translated words. This is where monads can help us out. Again, a monad is a more powerful functor that also has `flatMap`.

### flatMap

`flatMap` works just like `map` but it will also flatten the streams to return the values also contained within the streams. So let's update our code to use `flatMap` instead.

```javascript
stream
  .flatMap(word => getInPortuguese(word))
  .onValue(word => console.log(word));

// gato
// refeição
// trombeta
```

So `flatMap` will takes `word`, which is actually an individual stream and first resolves it. That is, flattens it into its returned value, and then it passes it on.

### What About Promises?

Some people say that Promises are monads, but by our definition monads must have `flatMap`, which Promises do not, right? Well, they do actually but it's not called `flatMap`, it's called `then`. This is one of those things that make monads seem more complicated then they actually are. `flatMap` goes by many names. Other names include `bind` and `chain`, but it is the same idea and implementation, it's just a different name.

**Summary:** A monad is a functor, like stream for instance, that implements `flatMap` in addition to `map`, which all functors implement.

### References

- [reactive.io - flatmap](http://reactivex.io/documentation/operators/flatmap.html)
- [Fun Fun Function](https://www.youtube.com/watch?v=9QveBbn7t_c&t=28s)
- [JR Sinclair](http://jrsinclair.com/articles/2016/marvellously-mysterious-javascript-maybe-monad/)
- [Curiosity Driven](https://curiosity-driven.org/monads-in-javascript)
- [Wiki](https://en.wikipedia.org/wiki/Monad_(functional_programming))
