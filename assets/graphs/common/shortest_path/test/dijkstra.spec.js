
import { expect } from 'chai';
import dijkstra from '../dijkstra';
import Graph from '../../../class/graph/graph';

describe('dijkstra()', () => {
  const graph = new Graph();

  // nodes
  graph.insert('A');
  graph.insert('B');
  graph.insert('C');
  graph.insert('D');

  // edges
  graph.insertEdge('A', 'B');
  graph.insertEdge('A', 'C');
  graph.insertEdge('C', 'B');
  graph.insertEdge('B', 'D');
  graph.insertEdge('C', 'D');

  // weights

  it('should return the shortest path of a weighted DAG', () => {
    
  });
});
