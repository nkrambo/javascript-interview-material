
import { expect } from 'chai';
import mergeTimes from '../merge_meeting_times';

describe('mergeTimes()', () => {
  test('should return an array of merged meeting times.', () => {
    const meetings = [{ startTime: 0, endTime: 1 },
                      { startTime: 3, endTime: 5 },
                      { startTime: 4, endTime: 8 },
                      { startTime: 10, endTime: 12 },
                      { startTime: 9, endTime: 10 }];

    const merged = [{ startTime: 0, endTime: 1 },
                    { startTime: 3, endTime: 8 },
                    { startTime: 9, endTime: 12 }];

    expect(mergeTimes(meetings)).to.deep.equal(merged);
  });
});
