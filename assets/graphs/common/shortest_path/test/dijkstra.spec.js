
import { expect } from 'chai';
import dijkstra from '../dijkstra';
import Graph from '../../../class/graph/graph';

class Weighted extends Graph {
  constructor() {
    super();
  }

  insertEdge(start, end, weight) {
    const startNode = this.find(start);
    const endNode = this.find(end);

    // error if they don't exist
    if (!startNode || !endNode) {
      throw new Error('Both nodes need to exist');
    }

    // push edge
    endNode.weight = weight;
    startNode.edges.push(endNode);
  }
}

describe('dijkstra()', () => {

  const weighted = new Weighted();

  // nodes
  weighted.insert('A');
  weighted.insert('B');
  weighted.insert('C');
  weighted.insert('D');

  // edges with weights
  weighted.insertEdge('A', 'B', 6);
  weighted.insertEdge('A', 'C', 2);
  weighted.insertEdge('C', 'B', 3);
  weighted.insertEdge('B', 'D', 1);
  weighted.insertEdge('C', 'D', 5);

  it('should return the shortest path of a weighted DAG', () => {
    
  });
});
