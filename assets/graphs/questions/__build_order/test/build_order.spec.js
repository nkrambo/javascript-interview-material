
import { expect } from 'chai';
import buildOrder from '../build_order';

describe('buildOrder()', () => {
  it('should return the correct build order of projects', () => {
    const projects = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const deps = [['C', 'F'],
                  ['B', 'F'],
                  ['A', 'F'],
                  ['A', 'C'],
                  ['A', 'B'],
                  ['E', 'B'],
                  ['E', 'A'],
                  ['G', 'D']];

    const build = buildOrder(projects, deps);
  });
});
