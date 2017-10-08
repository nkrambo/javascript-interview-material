
import { expect } from 'chai';
import Graph from '../graph';

describe('Graph', () => {
  test('should insert a node', () => {
    const graph = new Graph();
    graph.insert('A');
    graph.insert('B');
    graph.insert('C');

    expect(graph.nodes).to.be.a('array');
    expect(graph.nodes.length).to.equal(3);
  });

  test('should find a node', () => {
    const graph = new Graph();
    graph.insert('A');
    graph.insert('B');
    graph.insert('C');

    const A = graph.find('A');
    expect(A).to.be.a('object');
    expect(A.value).to.equal('A');

    expect(graph.find('D')).to.equal(undefined);
  });

  test('should insert an edge', () => {
    const graph = new Graph();
    graph.insert('A');
    graph.insert('B');
    graph.insert('C');

    // insert edge A -> B
    graph.insertEdge('A', 'B');

    expect(graph.nodes[0].edges[0].value).to.equal('B');
  });
});
