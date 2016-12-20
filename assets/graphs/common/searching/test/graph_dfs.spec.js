
import { expect } from 'chai';
import dfs from '../graph_dfs';
import Graph from '../../../class/graph/graph';

describe('dfs()', () => {
  it('should return an array of values of a graph in order of a DFS', () => {
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

    // 0, 5, 4, 1, 3, 2
    const order = dfs(graph.nodes[0]);

    expect(order).to.be.a('array');
    expect(order.length).to.equal(6);

    expect(order[0]).to.equal(0);
    expect(order[1]).to.equal(5);
    expect(order[2]).to.equal(4);
    expect(order[3]).to.equal(1);
    expect(order[4]).to.equal(3);
    expect(order[5]).to.equal(2);
  });
});
