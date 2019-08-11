const { expect } = require('chai');
const { Graph } = require('../src/graph-adj-list-map');

describe('Graph - Adjacency List with Maps', () => {
	it('should add a node', () => {
		let g = new Graph();
		g.addNode(1);
		expect(g.nodes.size).to.equal(1);
		expect(g.nodes.get(1)).to.equal(1);
	});

	it('should add one direction edge', () => {
		let g = new Graph();
		g.addNode('1');
		g.addNode('2');
		g.addEdge('1', '2');
		let e1 = g.getEdges('1');
		let e2 = g.getEdges('2');
		expect(e1.length).to.equal(1);
		expect(e2.length).to.equal(0);
		expect(e1[0]).to.equal('2');
	});
});
