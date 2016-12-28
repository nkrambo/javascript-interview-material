
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
