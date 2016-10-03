// import { expect } from 'chai';
// import Graph from '../../graph/graph';
// import routeBetweenNodes from '../cracking/4.1';
//
// describe('route between nodes', () => {
//
//   const myGraph = new Graph();
//
//   // add nodes
//   myGraph.add('A');
//   myGraph.add('B');
//   myGraph.add('C');
//   myGraph.add('D');
//   myGraph.add('E');
//
//   // add edge
//   myGraph.addEdge('E', 'A');
//
//   // grab start and end nodes
//   const E = myGraph.find('E');
//   const A = myGraph.find('A');
//   const C = myGraph.find('C');
//
//   it('should return the expect result, true', () => {
//     expect(routeBetweenNodes(myGraph, E, A)).to.equal(true);
//   });
//
//   it('should return the expect result, false', () => {
//     expect(routeBetweenNodes(myGraph, C, A)).to.equal(false);
//   });
// });