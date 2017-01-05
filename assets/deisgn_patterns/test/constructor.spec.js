
import { expect } from 'chai';
import { BasicCar, ProtoCar } from '../constructor';

describe('BasicCar()', () => {
  it('should construct a basic object', () => {
    const model3 = new BasicCar('Tesla Model 3', 2017, 0);
    expect(model3.toString()).to.equal('Tesla Model 3 has done 0 miles');
  });
});

describe('ProtoCar()', () => {
  it('should construct an object with methods on the prototype', () => {
    const modelY = new ProtoCar('Tesla Model Y', 2018, 0);
    expect(modelY.toString()).to.equal('Tesla Model Y has done 0 miles');
  });
});
