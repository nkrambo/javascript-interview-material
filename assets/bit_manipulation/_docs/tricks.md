
if you prefix '0b' to a binary number

In simple words, a binary string is a sequence of 1's and 0's. Javascript is loaded with rich features to manipulate the raw binary data in lower level.

In the past, this had to be simulated by treating the raw data as a string and using the charCodeAt() method to read the bytes from the data buffer.

However, this is slow and error-prone, due to the need for multiple conversions (especially if the binary data is not actually byte-format data, but, for example, 32-bit integers or floats).

JavaScript typed arrays provide a mechanism for accessing raw binary data much more efficiently.


var number = 9;
var result = number.toString(2);

console.log(result); // 1001

