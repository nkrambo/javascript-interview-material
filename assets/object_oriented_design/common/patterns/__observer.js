
/**
* Observer
*
* The Observer is a design pattern where an object (known as a subject) maintains
* a list of objects depending on it (observers), automatically notifying them of
* any changes to state.
*
* When a subject needs to notify observers about something interesting happening,
* it broadcasts a notification to the observers (which can include specific data
* related to the topic of the notification).
*
* When we no longer wish for a particular observer to be notified of changes by
* the subject they are registered with, the subject can remove them from the list
* of observers.
*
* This pattern is mainly used to implement distributed event handling systems but
* also can be a key part in MVC architectural pattern.
*/

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      return this.observers[index].notify(index);
    }
  }

  notifyAll() {
    this.observers.forEach((observer, index) => {
      observer.notify(index);
    });
    return 'All observers notified.';
  }
}

class Observer {
  constructor() {}

  notify(index) {
    return `Observer ${index + 1} is notified!`;
  }
}

/**
* Publish / Subscribe Pattern
*
* In JavaScript, we commonly implement a variation of the Observer pattern known
* as the Publish/Subscribe pattern. They are similar, but there are some important
* differences between these patterns.
*/
//
// var pubsub = {};
//
// (function(myObject) {
//
//     // Storage for topics that can be broadcast
//     // or listened to
//     var topics = {};
//
//     // An topic identifier
//     var subUid = -1;
//
//     // Publish or broadcast events of interest
//     // with a specific topic name and arguments
//     // such as the data to pass along
//     myObject.publish = function( topic, args ) {
//
//         if ( !topics[topic] ) {
//             return false;
//         }
//
//         var subscribers = topics[topic],
//             len = subscribers ? subscribers.length : 0;
//
//         while (len--) {
//             subscribers[len].func( topic, args );
//         }
//
//         return this;
//     };
//
//     // Subscribe to events of interest
//     // with a specific topic name and a
//     // callback function, to be executed
//     // when the topic/event is observed
//     myObject.subscribe = function( topic, func ) {
//
//         if (!topics[topic]) {
//             topics[topic] = [];
//         }
//
//         var token = ( ++subUid ).toString();
//         topics[topic].push({
//             token: token,
//             func: func
//         });
//         return token;
//     };
//
//     // Unsubscribe from a specific
//     // topic, based on a tokenized reference
//     // to the subscription
//     myObject.unsubscribe = function( token ) {
//         for ( var m in topics ) {
//             if ( topics[m] ) {
//                 for ( var i = 0, j = topics[m].length; i < j; i++ ) {
//                     if ( topics[m][i].token === token ) {
//                         topics[m].splice( i, 1 );
//                         return token;
//                     }
//                 }
//             }
//         }
//         return this;
//     };
// }(pubsub));

export { Subject, Observer };
