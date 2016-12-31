
import { expect } from 'chai';
import getMaxProfit from '../stock_market';

describe('getMaxProfit()', () => {
  it('should return the maximum profit from price data', () => {
    expect(getMaxProfit([10, 7, 5, 8, 11, 9])).to.equal(6);
    expect(getMaxProfit([10, 20])).to.equal(10);
  });

  it('should throw an error if pricesYesterday is less than 2', () => {
    expect(function(){ getMaxProfit([10]); }).to.throw (Error);
  });
});
