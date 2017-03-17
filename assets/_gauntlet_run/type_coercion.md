
## Type Coercion

### What is the difference between `==` and `===`?

JavaScript has two sets of equality operators archived under comparison operators:

equality == & inequality != strict equality === & strict inequality !== We use these operators when comparing 2 operands. They differ on what type of operands are being compared to against.

For example, equality == or inequality != signs compares 2 values without type conversion. While strict equality === or strict inequality !== signs compares 2 values with type conversion.

```javascript
'1' == 1      // true < all it matters is the value
'1' === 1     // false < they are not the same type

1 == true     // true
'1' == true   // true

1 === true    // false
'1' === true  // false
```

**References**
 * [Does it matter which equals operator (== vs ===) I use in JavaScript comparisons?](http://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons)
 * [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
