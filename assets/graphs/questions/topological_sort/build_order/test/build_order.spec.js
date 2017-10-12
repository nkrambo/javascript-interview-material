
import buildOrder from '../build_order';

describe('buildOrder()', () => {
  test('should return the correct build order of projects', () => {
    const projects = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const deps = [
      ['C', 'F'],
      ['B', 'F'],
      ['A', 'F'],
      ['A', 'C'],
      ['A', 'B'],
      ['E', 'B'],
      ['E', 'A'],
      ['G', 'D']];

    const build = buildOrder(projects, deps);

    expect(build.length).toBe(7);

    expect(build[0]).toBe('D');
    expect(build[1]).toBe('F');
    expect(build[2]).toBe('G');
    expect(build[3]).toBe('C');
    expect(build[4]).toBe('B');
    expect(build[5]).toBe('A');
    expect(build[6]).toBe('E');
  });

  test('should return an error if graph is not a DAG', () => {
    const projects = ['A', 'B', 'C'];
    const deps = [
      ['B', 'A'],
      ['C', 'B'],
      ['A', 'C']];

    expect(() => { buildOrder(projects, deps); }).toThrow(Error);
  });
});
