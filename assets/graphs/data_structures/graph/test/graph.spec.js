
import Graph from '../graph';

describe('Graph', () => {
  test('should insert a node', () => {
    const graph = new Graph();
    graph.insert('A');
    graph.insert('B');
    graph.insert('C');

    expect(graph.nodes.length).toBe(3);
  });

  test('should find a node', () => {
    const graph = new Graph();
    graph.insert('A');
    graph.insert('B');
    graph.insert('C');

    const A = graph.find('A');
    expect(A.value).toBe('A');

    expect(graph.find('D')).toBeUndefined();
  });

  test('should insert an edge', () => {
    const graph = new Graph();
    graph.insert('A');
    graph.insert('B');
    graph.insert('C');

    // insert edge A -> B
    graph.insertEdge('A', 'B');

    expect(graph.nodes[0].edges[0].value).toBe('B');
  });
});
