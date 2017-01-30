
import { expect } from 'chai';
import singleton from '../singleton';

describe('singleton()', () => {
  it('should return a single instance of the singleton', () => {
    const singleA = singleton.getInstance();
    const singleB = singleton.getInstance();
    expect(singleA.getRandomNumber() === singleB.getRandomNumber()).to.be.true;
  });

  it('should have public properties and methods', () => {
    const singleC = singleton.getInstance();
    expect(singleC.publicProperty).to.equal('I am public');
    expect(singleC.publicMethod()).to.equal('The public can also see me!');
    expect(singleC.getRandomNumber()).to.be.a('number');
  });

  it('should have private properties and methods with no access', () => {
    const singleD = singleton.getInstance();
    expect(function(){ singleD.privateMethod()}).to.throw(Error);
  });
});
