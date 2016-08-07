
// There are three native ways to list/traverse object properties

// for...in loops
// This method traverses all enumerable properties of an object and its prototype chain

for (variable in object) {

}

// Object.keys(o)
// This method returns an array with all the own (not in the prototype chain) enumerable properties' names ("keys") of an object o.

// Object.getOwnPropertyNames(o)
// This method returns an array containing all own properties' names (enumerable or not) of an object o.