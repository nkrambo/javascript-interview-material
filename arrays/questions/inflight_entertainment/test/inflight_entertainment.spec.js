
import { expect } from 'chai';
import twoMovies from '../inflight_entertainment';

describe('twoMovies()', () => {
  const flightTime = 320;

  it('should return true if 2 movie lengths equal the flight time', () => {
    const movies = [90, 145, 200, 110, 120];
    expect(twoMovies(flightTime, movies)).to.be.true;
  });

  it('should return false if no 2 movie lengths equal the flight time', () => {
    const movies = [90, 145, 205, 110, 120];
    expect(twoMovies(flightTime, movies)).to.be.false;
  });
});
