
import bellmanFord from '../bellman_ford';
import Graph from '../../../data_structures/graph/graph';

class Weighted extends Graph {
  insert(value) {
    this.nodes.push({
      value,
      edges: [],
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
    startNode.edges.push({ endNode, cost });
  }
}

/*
*    (-6)  A   (2)            A: 0
*        ↙  ↘                 B: -6
*       B  ←  C   (3)         C: 2
*        ↘   ↙                D: -7
*    (-1)  D   (5)
*/

const weighted = new Weighted();

// nodes
weighted.insert('A');
weighted.insert('B');
weighted.insert('C');
weighted.insert('D');

// edges with weights
weighted.insertEdge('A', 'B', -6);
weighted.insertEdge('A', 'C', 2);
weighted.insertEdge('C', 'B', 3);
weighted.insertEdge('B', 'D', -1);
weighted.insertEdge('C', 'D', 5);

describe('bellmanFord()', () => {
  const source = weighted.find('A'); // source

  test('should return the shortest path for all nodes from source', () => {
    const result = bellmanFord(source, weighted);

    expect(result.length).toBe(4);

    expect(result[0].node).toBe('A');
    expect(result[0].cost).toBe(0);

    expect(result[1].node).toBe('B');
    expect(result[1].cost).toBe(-6);

    expect(result[2].node).toBe('C');
    expect(result[2].cost).toBe(2);

    expect(result[3].node).toBe('D');
    expect(result[3].cost).toBe(-7);
  });
});
