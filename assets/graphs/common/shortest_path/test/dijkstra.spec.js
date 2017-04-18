
import { expect } from 'chai';
import dijkstra from '../_dijkstra';
import Graph from '../../../class/graph/graph';

class Weighted extends Graph {
  constructor() {
    super();
  }

  insert(value) {
    this.nodes.push({
      value,
      edges: []
    });
  }

  insertEdge(start, end, cost) {
    const startNode = this.find(start);
    const endNode = this.find(end);

    // error if they don't exist
    if (!startNode || !endNode) {
      throw new Error('Both nodes need to exist');
    }

    // push edge
    startNode.edges.push({endNode, cost});
  }
}

/**
*    (6)   A   (2)            A -> B: 6 mins
*        ↙  ↘                 A -> C: 2 mins
*       B  ←  C   (3)         C -> B: 3 mins
*        ↘   ↙                B -> D: 1 mins
*    (1)   D   (5)            C -> D: 5 mins
*/

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

  const start = weighted.find('A');
  const finish = weighted.find('D');

  // A -> C -> B -> D, cost: 6
  it('should return the shortest path of a weighted DAG', () => {
    // const shortest = dijkstra(start, finish);
    // expect(shortest).to.be.a('object');
  });
});
