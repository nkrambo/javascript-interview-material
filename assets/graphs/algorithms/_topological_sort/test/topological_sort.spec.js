
// import Graph from '../../../../class/graph/graph'
// import { kahnSort, dfsSort } from '../topological_sort';

describe.skip('kahnSort()', () => {
  test('should return the topological sort of nodes', () => {
    // const graph = new Graph();
    //
    // graph.insert('A');
    // graph.insert('B');
    // graph.insert('C');
    // graph.insert('D');
    // graph.insert('E');
    // graph.insert('F');
    // graph.insert('G');
    //
    // graph.insertEdge('F', 'C');
    // graph.insertEdge('F', 'A');
    // graph.insertEdge('F', 'B');
    // graph.insertEdge('C', 'A');
    // graph.insertEdge('B', 'A');
    // graph.insertEdge('B', 'E');
    // graph.insertEdge('A', 'E');
    // graph.insertEdge('D', 'G');
    //
    // const sort = kahnSort(graph);
    //
    // expect(sort.length).toBe(7);
    //
    // expect(sort[0]).toBe('D');
    // expect(sort[1]).toBe('F');
    // expect(sort[2]).toBe('G');
    // expect(sort[3]).toBe('C');
    // expect(sort[4]).toBe('B');
    // expect(sort[5]).toBe('A');
    // expect(sort[6]).toBe('E');
  });

  test('should return an error if graph is not a DAG', () => {
    // const graph = new Graph();
    //
    // graph.insert('A');
    // graph.insert('B');
    // graph.insert('C');
    //
    // graph.insertEdge('A', 'B');
    // graph.insertEdge('B', 'C');
    // graph.insertEdge('C', 'A');
    //
    // expect(function(){ kahnSort(graph); }).toThrow (Error);
  });
});

describe.skip('dfsSort()', () => {
  test('should return the topological sort of nodes', () => {
    // const graph = new Graph();
    //
    // graph.insert('A');
    // graph.insert('B');
    // graph.insert('C');
    // graph.insert('D');
    // graph.insert('E');
    // graph.insert('F');
    // graph.insert('G');
    //
    // graph.insertEdge('F', 'C');
    // graph.insertEdge('F', 'A');
    // graph.insertEdge('F', 'B');
    // graph.insertEdge('C', 'A');
    // graph.insertEdge('B', 'A');
    // graph.insertEdge('B', 'E');
    // graph.insertEdge('A', 'E');
    // graph.insertEdge('D', 'G');
    //
    // const sort = dfsSort(graph);
    //
    // expect(sort).to.be.a('array');
    // expect(sort.length).toBe(7);
    //
    // expect(sort[0]).toBe('D');
    // expect(sort[1]).toBe('F');
    // expect(sort[2]).toBe('G');
    // expect(sort[3]).toBe('C');
    // expect(sort[4]).toBe('B');
    // expect(sort[5]).toBe('A');
    // expect(sort[6]).toBe('E');
  });

  test('should return an error if graph is not a DAG', () => {
    // const graph = new Graph();
    //
    // graph.insert('A');
    // graph.insert('B');
    // graph.insert('C');
    //
    // graph.insertEdge('A', 'B');
    // graph.insertEdge('B', 'C');
    // graph.insertEdge('C', 'A');
    //
    // expect(function(){ dfsSort(graph); }).toThrow (Error);
  });
});
