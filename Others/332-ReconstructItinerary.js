class Vertex {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
    this.children.sort((A, B) => A.value > B.value ? 1 : -1);
  }
}

class Graph {
  constructor() {
    this.vertices = {};
    this.edgesCount = 0;
  }

  addVertex(value) {
    this.vertices[value] = this.vertices[value] || new Vertex(value);
  }

  addEdge(from, to) {
    if (!this.vertices[from]) this.addVertex(from);
    if (!this.vertices[to]) this.addVertex(to);
    this.vertices[from].addChild(this.vertices[to]);
    this.edgesCount++;
  }
}

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
const findItinerary = (tickets) => {

  const graph = new Graph();

  for (let [from, to] of tickets) {
    graph.addEdge(from, to);
  }

  let itinerary;
  const backtrack = (vertex, path = ['JFK']) => {

    if (itinerary) return;
    if (path.length === graph.edgesCount + 1) {
      itinerary = [...path];
      return;
    }

    for (let i = 0; i < vertex.children.length; i++) {
      const node = vertex.children[i];
      vertex.children.splice(i, 1);
      path.push(node.value);
      backtrack(node, path);
      path.pop();
      vertex.children.splice(i, 0, node);
    }

  }

  backtrack(graph.vertices['JFK']);

  return itinerary;
}

console.log(findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]));
console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]));
console.log(findItinerary([["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]));

