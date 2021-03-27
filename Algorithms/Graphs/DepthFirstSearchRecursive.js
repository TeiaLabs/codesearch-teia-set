// Unweighted Undirected Graph class
class GraphUnweightedUndirected {
  constructor () {
    this.connections = {}
  }

  // Function to add a node to the graph (connection represented by set)
  addNode (node) {
    this.connections[node] = new Set()
  }

  // Function to add an edge (adds the node too if they are not present in the graph)
  addEdge (node1, node2) {
    if (!(node1 in this.connections)) { this.addNode(node1) }
    if (!(node2 in this.connections)) { this.addNode(node2) }
    this.connections[node1].add(node2)
    this.connections[node2].add(node1)
  }

  // DFS Function recursive to search if a node with the given value is present in the graph
  // checking if the searching node has been found
  DFSRecursive (node, value, visited = new Set()) {
    if (node === value) { return true }
    // adding the current node to the visited set
    visited.add(node)
    // calling the helper function recursivly for all unvisited nodes
    for (const neighbour of this.connections[node]) {
      if (!visited.has(neighbour)) {
        if (this.DFSRecursive(neighbour, value, visited)) { return true }
      }
    }
    return false
  }
}

function main () {
  const graph = new GraphUnweightedUndirected()
  graph.addEdge(1, 2)
  graph.addEdge(2, 3)
  graph.addEdge(2, 4)
  graph.addEdge(3, 5)
  console.log(graph.DFSRecursive(5, 1))
  console.log(graph.DFSRecursive(5, 100))
}

main()
