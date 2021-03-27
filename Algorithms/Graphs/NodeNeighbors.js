// Generic graph: the algorithm works regardless of direction or weight
class Graph {
  constructor () {
    this.edges = []
  }

  // Adding edges to the graph
  addEdge (node1, node2) {
    this.edges.push({
      node1,
      node2
    })
  }

  // Returns an array with all of the node neighbors
  nodeNeighbors (node) {
    const neighbors = new Set()
    for (const edge of this.edges) {
      // Checks if they have an edge between them and if the neighbor is not
      // already in the neighbors array
      if (edge.node1 === node && !(neighbors.has(edge.node2))) {
        neighbors.add(edge.node2)
      } else if (edge.node2 === node && !(neighbors.has(edge.node1))) {
        neighbors.add(edge.node1)
      }
    }
    return neighbors
  }
}

(() => {
  const graph = new Graph()
  graph.addEdge(1, 2)
  graph.addEdge(2, 3)
  graph.addEdge(3, 5)
  graph.addEdge(1, 5)
  console.log(graph.nodeNeighbors(1))
})()
