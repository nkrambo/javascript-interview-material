
/**
* Uses two different queues one for dogs and one for cats. Each entry is
* assigned a unique identifier which allows dequeueAny to determine which of
* the two queues to dequeue an item from.
*/

// class AnimalShelter {
//   constructor() {
//     this.dogs = [];
//     this.cats = [];
//     this.id = 0;
//   }
//
//   enqueueCat(name) {
//     this.cats.push({
//       name: name,
//       id: this.id += 1
//     });
//   }
//
//   enqueueDog(name) {
//     this.dogs.push({
//       name: name,
//       id: this.id += 1
//     });
//   }
//
//   dequeueAny() {
//     let dogId = this.dogs.length > 0 ? this.dogs[0].id : Number.POSITIVE_INFINITY;
//     let catId = this.cats.length > 0 ? this.cats[0].id : Number.POSITIVE_INFINITY;
//
//     if (dogId !== Number.POSITIVE_INFINITY || catId !== Number.POSITIVE_INFINITY) {
//       return dogId < catId ? this.dogs.shift().name : this.cats.shift().name;
//     }
//   }
//
//   dequeueCat() {
//     return this.cats.shift().name;
//   }
//
//   dequeueDog() {
//     return this.dogs.shift().name;
//   }
// }
//
// export default AnimalShelter;
