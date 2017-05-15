
import { expect } from 'chai';
import canCompleteCicuit from '../gas_station';

describe('canCompleteCicuit()', () => {
  // it('should return the starting index of the station if the cicuit can be completed', () => {
  //   const gas = [10, 20, 10, 30, 5];
  //   const cost = [];
  //   expect(canCompleteCicuit(gas, cost)).to.equal();
  // });

  it('should return -1 if the cicuit can NOT be completed', () => {
    const gas = [10, 10, 10, 10];
    const cost = [10, 15, 10, 10];
    expect(canCompleteCicuit(gas, cost)).to.equal(-1);
  });
});
