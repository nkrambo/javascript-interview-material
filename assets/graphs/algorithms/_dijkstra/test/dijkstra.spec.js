
import { expect } from 'chai';
// import { uniformCostSearch, singleSource } from '../dijkstra';
import singleSource from '../dijkstra';
import Graph from '../../../data_structures/graph/graph';

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
*    (6)   A   (2)            A: 0
*        ↙  ↘                 B: 5
*       B  ←  C   (3)         C: 2
*        ↘   ↙                D: 6
*    (1)   D   (5)
*/

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

describe('singleSource()', () => {
  // source
  const source = weighted.find('A');

  it('should return the shortest path costs from source to all nodes', () => {
    const result = singleSource(source, weighted);
    expect(result).to.be.a('array');
    expect(result.length).to.equal(4);

    expect(result[0].node).to.equal('A');
    expect(result[0].cost).to.equal(0);

    expect(result[1].node).to.equal('B');
    expect(result[1].cost).to.equal(5);

    expect(result[2].node).to.equal('C');
    expect(result[2].cost).to.equal(2);

    expect(result[3].node).to.equal('D');
    expect(result[3].cost).to.equal(6);
  });
});

// describe('uniformCostSearch()', () => {
//   it('should return the shortest path from start to end node', () => {
//     const start = weighted.find('A');
//     const end = weighted.find('D');
//
//     const result = uniformCostSearch(start, end);
//
//     expect(result.to.be.a('object'));
//   });
// });
