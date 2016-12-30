
import { expect } from 'chai';
import { Subject, Observer } from '../__observer';

describe('observer pattern', () => {
  it('should', () => {
    const subject = new Subject();

    const observer1 = new Observer();
    const observer2 = new Observer();
    const observer3 = new Observer();

    subject.subscribe(observer1);
    subject.subscribe(observer2);
    subject.subscribe(observer3);

    expect(subject.notifyObserver(observer2)).to.equal('Observer 2 is notified!');
    expect(subject.notifyAll()).to.equal('All observers notified.');
  });
});

describe('pubsub pattern', () => {
  it('should', () => {
    const pubsub = new Subject();
  });
});

// /*
//  * Simple ChatRoom Class
//  * uses the PubSub Class to notify other users when a message is sent.
//  */
// class ChatRoom {
//   constructor() {
//     this.pubsub = new PubSub();
//     this.pubsub.subscribe('message', this.emitMessage, this);
//   }
//
//   emitMessage(msg) {
//     console.group('PubSub')
//     console.log('user sent message!', msg);
//     console.groupEnd();
//   }
//
//   sendMessage() {
//     this.pubsub.publish('message', 'Hey, how are you?');
//   }
//
// }
//
// var room = new ChatRoom();
// room.sendMessage();

