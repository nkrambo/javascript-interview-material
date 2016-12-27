
import { expect } from 'chai';
import { objectModule, counterModule } from '../__module';

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
  it('should give us', () => {
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
