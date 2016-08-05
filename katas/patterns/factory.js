
// Any function can create new objects.
// When it's not a constructor function, it's called a factory function.


const fullName = (state) => ({ // short-hand for returning an object
  fullName: () => {
    console.log(`${state.firstName} ${state.lastName}`);
  }
})

const Person = function(firstName, lastName, age) {

  state = {
    firstName: firstName,
    lastName: lastName,
    age: age
  }

  return Object.assign(
    {},
    fullName(state)
  )
}

const nick = new Person('Nick', 'Krambo', 32);

nick.fullName();

