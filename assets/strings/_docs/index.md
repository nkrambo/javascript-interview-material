
## Strings

JavaScript's String type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values. Each element in the String occupies a position in the String. The first element is at index 0, the next at index 1, and so on. The length of a String is the number of elements in it.

Unlike in languages like C, JavaScript strings are **immutable**. This means that once a string is created, it is not possible to modify it. However, it is still possible to create another string based on an operation on the original string. For example, concatenation of two strings using the concatenation operator (+) or String.concat().

### String Iteration

Strings are a built-in iterable so we can simply `for...of` a string to pull out values at each index. Simple right. Of course we can also still use a `for loop` for cases where we need access to the index.

```javascript
const hello = 'hello';

for (char of hello) {
  console.log(char);
}

// 'h'
// 'e'
// 'l'
// 'l'
// 'o'
```

### Character Encoding
