
##Bits

At a deep level, your computer works with bits—1s and 0s. But these get bundled
up into more human readable things, like characters and arrays. This is called **abstraction**.

While abstractions are nice, sometimes we want to work directly with bits. You can
do this with **bit manipulation**, which involves **bitwise operations**.

###Bitwise operations

**Bitwise operators** treat their operands as a sequence of 32 bits (zeroes and ones),
rather than as decimal numbers. For example, the decimal number nine has a binary
representation of ```1001```. Bitwise operators perform their operations on such
binary representations, but they return standard JavaScript numerical values.

Bitwise operations include AND, OR, XOR, NOT, and Bit Shifts.

AND, for example, takes two sets of bits. For each pair of bits (two bits at the
same index in each set) it returns 1 _only if both_ bits are 1. Otherwise, it
returns 0. OR would return 1 if _either_ of the bits were 1.

**AND**

The AND bitwise operation takes two sets of bits and for each pair of bits (the two bits
at the same index in each set) returns 1 if both bits are 1. Otherwise, it returns 0.

```javascript
1 & 1 // 1
1 & 0 // 0
0 & 1 // 0
0 & 0 // 0
```

Think of it like a hose with two knobs. Both knobs must be set to on for water to come out.
When performing AND on two integers, only the digit columns shared by both integers remain:

```javascript
5 & 6
// gives 4

// at the bit level:
//     0101  (5)
//   & 0110  (6)
//   = 0100  (4)
```

