
/**
* Call Center
*
* Imagine you have a call center with 3 levels of employees: respondent, manager,
* and director. An incoming telephone call must be first allocated to a respondent
* who is free. If the respondent can't handle the call, he or she must escalate
* the call to a manager. If the manager is not free or not able to handle it, then
* the call should be escalated to a director.
*
* Design the classes and data structures for this problem. Implement a method
* dispatchCall() which assigns a call to the first available employee.
*/

// class CallCenter {
//   constructor() {
//     this.levels = 3;
//     this.numRespondents = 10;
//     this.numManagers = 4;
//     this.numDirectors = 2;
//   }
//
//   getHandlerForCall(call) {}
// }
//
// class Call {
//   constructor(caller) {
//     this.caller = caller;   // person calling
//     this.rank = null;       // minimal rank
//     this.handler = null;
//   }
//
//   setHandler(employee) {
//     this.hander = employee;
//   }
//
//   reply(message) {}
//
//   getRank() {
//     return this.rank;
//   }
//
//
//
//   disconnect() {}
// }
//
// class Employee {
//   constructor(firstName, lastName, age, gender, phone, status) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.gender = gender;
//     this.phone = phone;
//     this.status = status;
//     this.currentCall = null;
//     this.rank = null;
//   }
//
//   // start conversation
//   receiveCall(call) {}
//
//   // issue resolved, finish call
//   callCompleted() {}
//
//   // issue not resolved, escalate and reassign new call
//   escalateAndReassign() {}
//
//   // assign new call if employee is free
//   assignNewCall() {}
//
//   // is employee free
//   isFree() {
//     return this.currentCall === null;
//   }
//
//   // get rank
//   getRank() {
//     return this.rank;
//   }
// }
//
// class Director extends Employee {
//
// }
//
// class Manager extends Employee {
//
// }
//
// class Respondent extends Employee {
//
// }
//
// export default CallCenter;
