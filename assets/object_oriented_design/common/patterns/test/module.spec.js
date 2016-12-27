
import { expect } from 'chai';
import { objectModule, counterModule, basketModule, revealingModule } from '../module';

// object literal module
describe('objectModule', () => {
  it('should encapsulate methods and properties', () => {
    expect(objectModule.saySomething()).to.equal('You\'re learning modules yo!')
    expect(objectModule.reportMyConfig()).to.equal('Caching is: enabled');

    // update config
    objectModule.updateMyConfig({
      language: 'fr',
      useCaching: false
    });

    expect(objectModule.reportMyConfig()).to.equal('Caching is: disabled');
  });
});

// module pattern
describe('counterModule', () => {
  it('should give us access to counter and reset methods', () => {
    // increment count
    expect(counterModule.incrementCounter()).to.equal(1);
    expect(counterModule.incrementCounter()).to.equal(2);
    expect(counterModule.incrementCounter()).to.equal(3);

    // reset
    counterModule.resetCounter();

    // increment again from 0
    expect(counterModule.incrementCounter()).to.equal(1);
  });
});

// module pattern
describe('basketModule', () => {
  it('should be able to add items to the cart and apply discount', () => {
    // add items
    basketModule.addItem({desc: 'jumper', price: 15.95});
    basketModule.addItem({desc: 'lollies', price: 4.95});

    // check cart
    expect(basketModule.getTotal()).to.equal(20.90);
    expect(basketModule.getItemCount()).to.equal(2);

    // discount
    basketModule.applyCoupon('TAKE20OFF');

    // check cart
    expect(basketModule.getTotal()).to.equal(16.72);
    expect(basketModule.getItemCount()).to.equal(2);
  });
});

// module pattern
describe('revealingModule', () => {
  it('should give us access to start, increment and count methods', () => {
    revealingModule.start();
    expect(revealingModule.count()).to.equal(1);
    revealingModule.increment();
    expect(revealingModule.count()).to.equal(2);
  });
});

