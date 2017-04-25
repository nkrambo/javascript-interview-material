
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

    expect(build).to.be.a('array');
    expect(build.length).to.equal(7);

    expect(build[0]).to.equal('D');
    expect(build[1]).to.equal('F');
    expect(build[2]).to.equal('G');
    expect(build[3]).to.equal('C');
    expect(build[4]).to.equal('B');
    expect(build[5]).to.equal('A');
    expect(build[6]).to.equal('E');
  });

  it('should return an error if graph is not a DAG', () => {
    const projects = ['A', 'B', 'C'];
    const deps = [['B', 'A'],
                  ['C', 'B'],
                  ['A', 'C']];
                  
    expect(function(){ buildOrder(projects, deps); }).to.throw (Error);
  });
});
