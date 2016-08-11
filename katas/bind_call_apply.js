
// The bind() method creates a new function that, when called, has its this keyword
// set to the provided value, with a given sequence of arguments preceding any
// provided when the new function is called.

const dog = {
  name: 'Fido',
  sound: 'woof',
  bark: function() {
    console.log(this.sound);
  }
}

const applyAction = function(action) {
  console.log(`${this.name} won't ${action} you!`);
}

// 'call' applies the function to the object, which is the first
// argument with the argument to the function that we're applying.
applyAction.call(dog, 'bite');

// 'apply' is the same as call except that it takes an array
// of arguments for those functions that have multiple parameters
applyAction.apply(dog, ['bite']);

// 'bind' actually binds the context of the dog object.
const fidoAction = applyAction.bind(dog);
fidoAction('poo on');

