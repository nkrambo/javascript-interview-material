
## __proto__

```javascript
const cat = {
  breed: 'Munchkin'
};

const myCat = {
  name: 'Fluffykins'
};

// set prototype
Object.setPrototypeOf(myCat, cat);

// now myCat has...
console.log(myCat);
// [object Object] {
//   breed: "Munchkin",
//   name: "Fluffykins"
// }

// It's __proto__ is a reference to the same 'cat' object and NOT an instance
console.log(myCat.__proto__);
// [object Object] {
//   breed: "Munchkin"
// }



```

Prototypal inheritance is much a simpler model than class inheritance and instances. Objects simply delegate to other objects. In fact, calling it prototypal "inheritance" is a little misleading, because it's actually prototypal "delegation".

Imagine that you are a student. You have a paper due today but have no pen to complete it.

You turn to your friend, John, who sits at the desk on the right and ask to borrow a pen. John checks for a pen and doesn't have one. John then turns to his right and asks his friend, Ringo, for a pen. Ringo checks for a pen has has one.
Ringo passes his pen to John, who passes it to you.

### References

- [Fun Fun Function](https://www.youtube.com/watch?v=DqGwxR_0d1M)
- [MDN - __proto__](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
