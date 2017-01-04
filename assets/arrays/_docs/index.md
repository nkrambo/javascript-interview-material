
## Arrays

> [MDN - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

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

Here, the details about the array's length are abstracted out for you. You can add as many prices as you'd like.

Fun fact: strings are almost always implemented as arrays of characters.

### Array Iteration

Before ES5, array iteration was commonly done using a simple `for` loop.

**`for` loop**

```javascript
for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
```

With ES5 and ES6, however, we have some much nicer methods for iteration.

**Array.forEach()**

```javascript
myArray.forEach((item, index, array) => {
  console.log(item, index);
});
```

**for...of**

```javascript
for (let value of myArray) {
  console.log(value);
}
```

```javascript
for (let [index, value] of myArray) {
  console.log(index, value);
}
```

```javascript
for (let [index, value] of myArray) {
  console.log(index, value);
}
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
    <td>LeetCode #73</td>
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
    <td></td>
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
