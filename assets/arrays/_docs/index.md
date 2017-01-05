
## Array

An array is a low-level data structure that holds an ordered collection of elements. Each position in the array has an index, starting with 0.

Confusingly, in JavaScript (and some other languages), there is a high-level, list-like, data structure called an "array" which has a few additional features.

In a low level array, you must specify the size of your array when you instantiate it:

```java
// instantiate an array to hold 10 integers
int gasPrices[] = new int[10];

gasPrices[0] = 346;
gasPrices[1] = 360;
gasPrices[2] = 354;
```

Arrays are efficient for looking up the element at an index, because if you know the address where an array starts in memory, it's simple math to find the address of any index. This gives arrays an O(1) lookup time.

Low level arrays are the foundation of many other data structures, like dynamic arrays, stacks, and objects.

A dynamic array doesn't require you to specify the length, and allows you to seamlessly (although sometimes with time and space costs) insert and delete elements at any index.

In JavaScript, you can simply say:

```javascript
const gasPrices = [];

gasPrices[0] = 346;
gasPrices[1] = 360;
gasPrices[2] = 354;
```

### Array Iteration

Before ES5 and ES6, array iteration was commonly done using a simple `for loop`. With ES5 and ES6, however, we have some much nicer methods for iteration. Generally speaking, `Array.forEach()` can and should replace the `for loop` in many cases, but there's a few things to keep in mind.

**`for loop`**

```javascript
// old school but flexible
for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
```

One limitation is that `Array.forEach()` cannot be short-circuited. As in, you cannot `break` or return a value in the middle of execution without throwing an exception. A `for loop` can be short-circuited however.

**`Array.forEach()`**

```javascript
// access to item, index and array
myArray.forEach((item, index, array) => {
  console.log(item, index);
});

// cannot short-circuit
myArray.forEach((item, index, array) => {
  if (item === 'something') return true; // throws error
});

myArray.forEach((item, index, array) => {
  if (item === 'something') break; // throws error
});
```

In other cases, we may want to use array iterators, such as `Array.entries()`, `Array.values()`, `Array.keys()`. The iterable protocol allows JavaScript objects to define or customize their iteration behavior, such as what values are looped over in a `for...of` construct.

Arrays have a built-in iterable with a default iteration behavior. When you `for...of` an array, it's `@@iterator` method is called with no arguments, and the returned iterator is used to obtain the values to be iterated.

All iterables implement the iterator protocol. This defines a standard way to produce a sequence of values (either finite or infinite).

An object is an iterator when it implements a **next()** method with the following semantics:

- done (boolean)
- value (any Javascript value)

**`for...of`**

```javascript
// grabs the Array.values() iterator object by default
const myArray = ['a', 'b', 'c'];
for (let value of myArray) {
  console.log(value);  // 'a', 'b', 'c'
}
```

```javascript
// or we can specify the keys() iterator, which gives us the index
const myArray = ['a', 'b', 'c'];
for (let index of myArray.keys()) {
  console.log(index); // 0, 1, 2
}
```

```javascript
// the entries() iterator, which gives us both keys and values
const myArray = ['a', 'b', 'c'];
for (let [index, value] of myArray.entries()) {
  console.log(index, value); // 0, 'a', 1, 'b', 2, 'c'
}

// or you can directly grab the iterator
const it = myArray.entries();
console.log(it.next());

// {
//   done: false,
//   value: [0, 'a']
// }
```

### Complicated Iteration

**Two Pointer - Current and Next**

```javascript
const myArray = ['a', 'b', 'c', 'c'];

for (let i = 0; i < myArray.length - 1; i += 1) {
  let current = myArray[i];
  let next = myArray[i + 1];

  if (current === next) console.log('match');
}
```

**Two Pointer - Inward**

```javascript
const myArray = ['a', 'b', 'c'];
let start = 0;
let end = myArray.length - 1;

while (start < end) {
  // some work here...
  if (myArray[start] === myArray[end]) console.log('match');

  // move indices
  start += 1;
  end -= 1
}
```

**Nested Loops - Every i, j (Except i === j)**

```javascript
const myArray = ['a', 'b', 'c'];

for (let i = 0; i < myArray.length; i += 1) {
  for (let j = 0; j < myArray.length; j += 1) {
    if (i === j) continue; // exclude own index
    console.log([myArray[i], myArray[j]]);
  }
}

// ['a', 'b']
// ['a', 'c']
//
// ['b', 'a']
// ['b', 'c']
//
// ['c', 'a']
// ['c', 'b']
```

**Nested Loops, Every i - (n - 1)**

```javascript
const myArray = ['a', 'b', 'c'];
for (let i = 0; i < myArray.length; i += 1) {
  for (let j = i; j < myArray.length; j += 1) {
    console.log(myArray[j]);
  }
  console.log('break');
}

// 'a'
// 'b'
// 'c'
// 'break'
//
// 'b'
// 'c'
// 'break'
//
// 'c'
// 'break'
```

### Matrices

Matrices can be used to represent transformations of objects in space. In javascript, we can achieve this with 2 dimensional arrays.

```javascript
const board = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ];

console.log(board.join('\n') + '\n\n');

// Move King's Pawn forward 2
board[4][4] = board[6][4];
board[6][4] = ' ';
console.log(board.join('\n'));
```

### Array Problems

<table>
  <!-- header -->
  <tr>
    <th>Question</th>
    <th>Difficulty</th>
    <th>Tags</th>
    <th>References</th>
    <th>Tested</th>
  </tr>

  <!-- entries -->
  <tr>
    <td><a href="../questions/zero_matrix/zero_matrix.js">Zero Matrix</a></td>
    <td>Easy</td>
    <td>Matrix</td>
    <td>LeetCode #73, CCI #1.8</td>
    <td>:thumbsup:</td>
  </tr>

  <tr>
    <td><a href="../questions/two_sum/two_sum.js">Two Sum</a></td>
    <td>Easy</td>
    <td>Map, Classic</td>
    <td>LeetCode #1</td>
    <td>:thumbsup:</td>
  </tr>

  <tr>
    <td><a href="../questions/single_riffle_shuffle/single_riffle_shuffle.js">Single Riffle Shuffle</a></td>
    <td>Medium</td>
    <td></td>
    <td></td>
    <td>:thumbsup:</td>
  </tr>

  <tr>
    <td><a href="../questions/rotate_matrix/rotate_matrix.js">Rotate Matrix</a></td>
    <td>Medium</td>
    <td>Matrix</td>
    <td>CCI #1.7</td>
    <td>:thumbsup:</td>
  </tr>

  <tr>
    <td><a href="../questions/rotate_array/rotate_array.js">Rotate Array</a></td>
    <td>Medium</td>
    <td></td>
    <td>LeetCode #189</td>
    <td>:thumbsup:</td>
  </tr>

  <tr>
    <td><a href="../questions/move_zeros/move_zeros.js">Move Zeros</a></td>
    <td>Easy</td>
    <td>Two Pointer</td>
    <td>LeetCode #283</td>
    <td>:thumbsup:</td>
  </tr>

  <tr>
    <td><a href="../questions/inflight_entertainment/inflight_entertainment.js">Inflight Entertainment</a></td>
    <td>Easy</td>
    <td>Map, Classic</td>
    <td></td>
    <td>:thumbsup:</td>
  </tr>

</table>

### Resources

- [MDN - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN - Matrices](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
