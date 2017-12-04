
import rotate from '../rotate_image';

describe('rotate()', () => {
  test('should return a rotated matrix 90CW', () => {
    const matrix = [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4, 4]];
    const rotated = [[4, 3, 2, 1], [4, 3, 2, 1], [4, 3, 2, 1], [4, 3, 2, 1]];

    rotate(matrix);

    expect(matrix).toEqual(rotated);
  });

  test('should return an unchanged 1, 1 matrix', () => {
    const smallMatrix = [[0]];
    expect(rotate(smallMatrix)).toEqual(smallMatrix);
  });
});
