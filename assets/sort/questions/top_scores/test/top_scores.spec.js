
import topScores from '../top_scores';

describe('topScores()', () => {
  test('should return a sorted array of scores', () => {
    expect(topScores([37, 89, 41, 65, 91, 53], 100)).toEqual([37, 41, 53, 65, 89, 91]);
    expect(topScores([60, 70], 100)).toEqual([60, 70]);
    expect(topScores([70, 60], 100)).toEqual([60, 70]);
  });
});
