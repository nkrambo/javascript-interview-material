
import { expect } from 'chai';
import { objectModule } from '../__module';

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
describe('patternModule', () => {
  it('should', () => {});
});
