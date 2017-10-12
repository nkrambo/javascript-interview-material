
import twoMovies from '../inflight_entertainment';

describe('twoMovies()', () => {
  const flightTime = 320;

  test('should return true if 2 movie lengths equal the flight time', () => {
    const movies = [90, 145, 200, 110, 120];
    expect(twoMovies(movies, flightTime)).toBeTruthy();
  });

  test('should return false if no 2 movie lengths equal the flight time', () => {
    const movies = [90, 145, 205, 110, 120];
    expect(twoMovies(movies, flightTime)).toBeFalsy();
  });
});
