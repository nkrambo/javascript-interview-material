
##Bitwise operations

At a deep level, your computer works with bits — 1s and 0s. But these get bundled
up into more human readable things, like characters and arrays. This is called **abstraction**.

While abstractions are nice, sometimes we want to work directly with bits. You can
do this with **bit manipulation**, which involves **bitwise operations**.

**Bitwise operators** treat their operands as a sequence of 32 bits (zeroes and ones),
rather than as decimal numbers. For example, the decimal number nine has a binary
representation of ```1001```. Bitwise operators perform their operations on such
binary representations, but they return standard JavaScript numerical values.

Bitwise operations include AND, OR, XOR, NOT, and Bit Shifts.

AND, for example, takes two sets of bits. For each pair of bits (two bits at the
same index in each set) it returns 1 _only if both_ bits are 1. Otherwise, it
returns 0. OR would return 1 if _either_ of the bits were 1.

###AND

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

###OR

The OR bitwise operation takes two sets of bits and for each pair of bits (the two bits
at the same index in each set) returns 11 if either of the bits are 1. Otherwise, it returns 0.

```javascript
1 | 1 // 1
1 | 0 // 1
0 | 1 // 1
0 | 0 // 0
```

Think of it like a bucket with two holes in it. If both holes are closed, no water
comes out. If either hole is open, or if both are open, water comes out.

When performing OR on two integers, all digit columns used by either of the
integers remain:

```javascript
5 | 6
// gives 7

// at the bit level:
//     0101  (5)
//   | 0110  (6)
//   = 0111  (7)
```

###XOR

The XOR bitwise operation (or exclusive or) takes two sets of bits, and for each
pair (the two bits at the same index in each bit set) returns 1 only if one but
not both of the bits is 11. Otherwise, it returns 0

```javascript
1 ^ 1 // 0
1 ^ 0 // 1
0 ^ 1 // 1
0 ^ 0 // 0
```

Think of it like a bag of chips where only one hand can fit in at a time. If no
one reaches for chips, no one gets chips, and if both people reach for chips,
they can't fit and no one gets chips either!

When performing XOR on two integers, only digit columns used by one but not both
integers remain:

```javascript
5 ^ 6
// gives 3

// at the bit level:
//     0101  (5)
//   ^ 0110  (6)
//   = 0011  (3)
```

###NOT

The NOT bitwise operation takes one set of bits, and for each bit returns 0 if
the bit is 1, and 1 if the bit is 0.

```javascript
~ 1 // 0
~ 0 // 1
```

When performing NOT on an integer, each bit of the integer is inverted.

```javascript
~ 5
// gives -6

// at the bit level:
//   ~ 0000 0101  (5)
//   = 1111 1010  (-6)
```

If you're unsure why the resulting number is negative in this example, it's
because numbers are represented using two's complement.

###Bit Shifts

A bit shift moves each digit in a set of bits left or right. The last bit in the
direction of the shift is lost, and a 0 bit is inserted on the other end.

```javascript
0010 << // 0100
1011 >> // 0101
```

Bit shifts can optionally take a number of times to shift:

```javascript
1010110 << 2 // 1011000
1011010 >> 3 // 0001011
```

A single left shift multiplies a binary number by 2:

```javascript
// 0010 is 2
0010 << // 0100, which is 4
```

Two left shifts multiplies by 4. Three left shifts multiplies by 8.

And similarly, shifting right divides by 2, throwing out any remainders.

