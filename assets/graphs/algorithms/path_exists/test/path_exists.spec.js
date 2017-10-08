
import { expect } from 'chai';
import pathExists from '../path_exists';
import Graph from '../../../data_structures/graph/graph';

/**
*     A  →  B    G
*     ↓            ↘
*     F  →  D →  E → C
*/

const graph = new Graph();

// nodes
graph.insert('A');
graph.insert('B');
graph.insert('G');
graph.insert('F');
graph.insert('D');
graph.insert('E');
graph.insert('C');

// edges
graph.insertEdge('A', 'B');
graph.insertEdge('G', 'C');
graph.insertEdge('A', 'F');
graph.insertEdge('F', 'D');
graph.insertEdge('D', 'E');
graph.insertEdge('E', 'C');

describe('pathExists()', () => {
  test('should return true if a path exists between two nodes', () => {
    expect(pathExists(graph.find('A'), graph.find('C'))).to.be.true;
    expect(pathExists(graph.find('A'), graph.find('A'))).to.be.true;
  });

  test('should return false if no path exists between two nodes', () => {
    const start = graph.find('A');
    const end = graph.find('G');
    expect(pathExists(start, end)).to.be.false;
  });
});
