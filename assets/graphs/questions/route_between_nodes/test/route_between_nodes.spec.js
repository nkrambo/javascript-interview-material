
import { expect } from 'chai';
import Graph from '../../../class/graph/graph';
import routeBetweenNodes from '../route_between_nodes';

describe('routeBetweenNodes()', () => {
  const graph = new Graph();
  graph.insert('A');
  graph.insert('B');
  graph.insert('C');

  // insert edge A -> B
  graph.insertEdge('A', 'B');
  graph.insertEdge('B', 'C');

  const A = graph.find('A');
  const B = graph.find('B');
  const C = graph.find('C');

  it('should return true if there is a route between nodes', () => {
    expect(routeBetweenNodes(A, C)).to.be.true;
    expect(routeBetweenNodes(A, B)).to.be.true;
    expect(routeBetweenNodes(B, C)).to.be.true;
  });

  it('should return false if there is no route between nodes', () => {
    expect(routeBetweenNodes(C, A)).to.be.false;
    expect(routeBetweenNodes(B, A)).to.be.false;
  });
});
