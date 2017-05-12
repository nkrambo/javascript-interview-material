//
// import { expect } from 'chai';
// import Graph from '../../../../class/graph/graph'
// import { kahnSort, dfsSort } from '../topological_sort';
//
// describe('kahnSort()', () => {
//   it('should return the topological sort of nodes', () => {
//     const graph = new Graph();
//
//     graph.insert('A');
//     graph.insert('B');
//     graph.insert('C');
//     graph.insert('D');
//     graph.insert('E');
//     graph.insert('F');
//     graph.insert('G');
//
//     graph.insertEdge('F', 'C');
//     graph.insertEdge('F', 'A');
//     graph.insertEdge('F', 'B');
//     graph.insertEdge('C', 'A');
//     graph.insertEdge('B', 'A');
//     graph.insertEdge('B', 'E');
//     graph.insertEdge('A', 'E');
//     graph.insertEdge('D', 'G');
//
//     const sort = kahnSort(graph);
//
//     expect(sort).to.be.a('array');
//     expect(sort.length).to.equal(7);
//
//     expect(sort[0]).to.equal('D');
//     expect(sort[1]).to.equal('F');
//     expect(sort[2]).to.equal('G');
//     expect(sort[3]).to.equal('C');
//     expect(sort[4]).to.equal('B');
//     expect(sort[5]).to.equal('A');
//     expect(sort[6]).to.equal('E');
//   });
//
//   it('should return an error if graph is not a DAG', () => {
//     const graph = new Graph();
//
//     graph.insert('A');
//     graph.insert('B');
//     graph.insert('C');
//
//     graph.insertEdge('A', 'B');
//     graph.insertEdge('B', 'C');
//     graph.insertEdge('C', 'A');
//
//     expect(function(){ kahnSort(graph); }).to.throw (Error);
//   });
// });
//
// describe('dfsSort()', () => {
//   it('should return the topological sort of nodes', () => {
//     const graph = new Graph();
//
//     graph.insert('A');
//     graph.insert('B');
//     graph.insert('C');
//     graph.insert('D');
//     graph.insert('E');
//     graph.insert('F');
//     graph.insert('G');
//
//     graph.insertEdge('F', 'C');
//     graph.insertEdge('F', 'A');
//     graph.insertEdge('F', 'B');
//     graph.insertEdge('C', 'A');
//     graph.insertEdge('B', 'A');
//     graph.insertEdge('B', 'E');
//     graph.insertEdge('A', 'E');
//     graph.insertEdge('D', 'G');
//
//     const sort = dfsSort(graph);
//
//     expect(sort).to.be.a('array');
//     expect(sort.length).to.equal(7);
//
//     expect(sort[0]).to.equal('D');
//     expect(sort[1]).to.equal('F');
//     expect(sort[2]).to.equal('G');
//     expect(sort[3]).to.equal('C');
//     expect(sort[4]).to.equal('B');
//     expect(sort[5]).to.equal('A');
//     expect(sort[6]).to.equal('E');
//   });
//
//   it('should return an error if graph is not a DAG', () => {
//     const graph = new Graph();
//
//     graph.insert('A');
//     graph.insert('B');
//     graph.insert('C');
//
//     graph.insertEdge('A', 'B');
//     graph.insertEdge('B', 'C');
//     graph.insertEdge('C', 'A');
//
//     expect(function(){ dfsSort(graph); }).to.throw (Error);
//   });
// });
