
import { expect } from 'chai';
import { DFS, BFS } from '../graph_search';
import Graph from '../../../class/graph/graph';

const graph = new Graph();
graph.insert(0);
graph.insert(1);
graph.insert(2);
graph.insert(3);
graph.insert(4);
graph.insert(5);

graph.insertEdge(0, 1);
graph.insertEdge(0, 4);
graph.insertEdge(0, 5);

graph.insertEdge(1, 3);
graph.insertEdge(1, 4);

graph.insertEdge(2, 1);

graph.insertEdge(3, 2);
graph.insertEdge(3, 4);

describe('DFS()', () => {
  // it('should do a DFS of a graph', () => {
  //   const dfs = DFS(root);
  //
  //   expect(dfs).to.be.a('array');
  // });
});

describe('BFS()', () => {
  it('should return the correct build order of projects', () => {

    // 0, 1, 4, 5, 3, 2
    const bfs = BFS(graph.nodes[0]);

    expect(bfs).to.be.a('array');
    expect(bfs.length).to.equal(6);

    expect(bfs[0]).to.equal(0);
    expect(bfs[1]).to.equal(1);
    expect(bfs[2]).to.equal(4);
    expect(bfs[3]).to.equal(5);
    expect(bfs[4]).to.equal(3);
    expect(bfs[5]).to.equal(2);
  });
});
