
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
*
* The Observer pattern requires that the observer (or object) wishing to receive
* topic notifications must subscribe this interest to the object firing the event
* (the subject).
*
* The Publish/Subscribe pattern however uses a topic/event channel which sits
* between the objects wishing to receive notifications (subscribers) and the object
* firing the event (the publisher). This event system allows code to define
* application specific events which can pass custom arguments containing values
* needed by the subscriber. The idea here is to avoid dependencies between the
* subscriber and publisher.
*
* This differs from the Observer pattern as it allows any subscriber implementing
* an appropriate event handler to register for and receive topic notifications
* broadcast by the publisher.
*
* The Observer and Publish/Subscribe patterns encourage us to think hard about
* the relationships between different parts of our application. This helps to
* break down an application into smaller, more loosely coupled blocks to improve
* code management, scalability and potentials for re-use.
*
* Publish/Subscribe fits in very well in JavaScript ecosystems, largely because
* at the core, ECMAScript implementations are event driven. This is particularly
* true in browser environments as the DOM uses events as its main interaction API
* for scripting.
*
* Consequently, some of the issues with these patterns actually stem from their
* main benefits. By decoupling publishers from subscribers, it can sometimes become
* difficult to obtain which subscribers are listening to which publishers.
*/

class PubSub {
  constructor() {
    this.handlers = [];
  }

  subscribe(event, handler, context) {
    if (typeof context === 'undefined') context = handler;

    this.handlers.push({event, handler: handler.bind(context)});
  }

  unsubscribe() { }

  publish(event, args) {
    this.handlers.forEach((topic) => {
      if (topic.event === event) {
        topic.handler(args);
      }
    });
  }
}

// https://joshbedo.github.io/JS-Design-Patterns/

export { Subject, Observer, PubSub };
