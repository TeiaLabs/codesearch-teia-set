// Priority Queue Helper functions
// Get the parent node of the current node
function getParentPosition (position) {
  return Math.floor((position - 1) / 2)
}

// Get the children nodes of the current node
function getChildrenPosition (position) {
  return [2 * position + 1, 2 * position + 2]
}

// Priority Queue class using Minimum Binary Heap
class PriorityQueue {
  constructor () {
    this._heap = []
    this.keys = {}
  }

  // Checking if the heap is empty
  isEmpty () {
    return this._heap.length === 0
  }

  // Adding element to the queue (equivalent to add)
  push (key, priority) {
    this._heap.push([key, priority])
    this.keys[key] = this._heap.length - 1
    this._shiftUp(this.keys[key])
  }

  // Removing the element with least priority (equivalent to extractMin)
  pop () {
    this._swap(0, this._heap.length - 1)
    const [key] = this._heap.pop()
    delete this.keys[key]
    this._shiftDown(0)
    return key
  }

  // Check if a given key is present in the queue
  contains (key) {
    return (key in this.keys)
  }

  // Update the priority of the given element (equivalent to decreaseKey)
  update (key, priority) {
    const currPos = this.keys[key]
    this._heap[currPos][1] = priority
    const parentPos = getParentPosition(currPos)
    const currPriority = this._heap[currPos][1]
    let parentPriority = Infinity
    if (parentPos >= 0) {
      parentPriority = this._heap[parentPos][1]
    }
    const [child1Pos, child2Pos] = getChildrenPosition(currPos)
    let [child1Priority, child2Priority] = [Infinity, Infinity]
    if (child1Pos < this._heap.length) {
      child1Priority = this._heap[child1Pos][1]
    }
    if (child2Pos < this._heap.length) {
      child2Priority = this._heap[child2Pos][1]
    }

    if (parentPos >= 0 && parentPriority > currPriority) {
      this._shiftUp(currPos)
    } else if (child2Pos < this._heap.length &&
      (child1Priority < currPriority || child2Priority < currPriority)) {
      this._shiftDown(currPos)
    }
  }

  // Helper function to shift up a node to proper position (equivalent to bubbleUp)
  _shiftUp (position) {
    let currPos = position
    let parentPos = getParentPosition(currPos)
    let currPriority = this._heap[currPos][1]
    let parentPriority = Infinity
    if (parentPos >= 0) {
      parentPriority = this._heap[parentPos][1]
    }

    while (parentPos >= 0 && parentPriority > currPriority) {
      this._swap(currPos, parentPos)
      currPos = parentPos
      parentPos = getParentPosition(currPos)
      currPriority = this._heap[currPos][1]
      try {
        parentPriority = this._heap[parentPos][1]
      } catch (error) {
        parentPriority = Infinity
      }
    }
    this.keys[this._heap[currPos][0]] = currPos
  }

  // Helper function to shift down a node to proper position (equivalent to bubbleDown)
  _shiftDown (position) {
    let currPos = position
    let [child1Pos, child2Pos] = getChildrenPosition(currPos)
    let [child1Priority, child2Priority] = [Infinity, Infinity]
    if (child1Pos < this._heap.length) {
      child1Priority = this._heap[child1Pos][1]
    }
    if (child2Pos < this._heap.length) {
      child2Priority = this._heap[child2Pos][1]
    }
    let currPriority
    try {
      currPriority = this._heap[currPos][1]
    } catch {
      return
    }

    while (child2Pos < this._heap.length &&
      (child1Priority < currPriority || child2Priority < currPriority)) {
      if (child1Priority < currPriority && child1Priority < child2Priority) {
        this._swap(child1Pos, currPos)
        currPos = child1Pos
      } else {
        this._swap(child2Pos, currPos)
        currPos = child2Pos
      }
      [child1Pos, child2Pos] = getChildrenPosition(currPos)
      try {
        [child1Priority, child2Priority] = [this._heap[child1Pos][1], this._heap[child2Pos][1]]
      } catch (error) {
        [child1Priority, child2Priority] = [Infinity, Infinity]
      }

      currPriority = this._heap[currPos][1]
    }
    this.keys[this._heap[currPos][0]] = currPos
    if (child1Pos < this._heap.length && child1Priority < currPriority) {
      this._swap(child1Pos, currPos)
      this.keys[this._heap[child1Pos][0]] = child1Pos
    }
  }

  // Helper function to swap 2 nodes
  _swap (position1, position2) {
    [this._heap[position1], this._heap[position2]] = [this._heap[position2], this._heap[position1]]
    this.keys[this._heap[position1][0]] = position1
    this.keys[this._heap[position2][0]] = position2
  }
}

// Weighted Undirected Graph class
class GraphWeightedUndirectedAdjacencyList {
  constructor () {
    this.connections = {}
  }

  // Function to add a node to the graph (connection represented by set)
  addNode (node) {
    this.connections[node] = {}
  }

  // Function to add an edge (adds the node too if they are not present in the graph)
  addEdge (node1, node2, weight) {
    if (!(node1 in this.connections)) { this.addNode(node1) }
    if (!(node2 in this.connections)) { this.addNode(node2) }
    this.connections[node1][node2] = weight
    this.connections[node2][node1] = weight
  }

  // Prim's Algorithm to generate a Minimum Spanning Tree (MST) of a graph
  PrimMST (start) {
    const distance = {}
    const parent = {}
    const priorityQueue = new PriorityQueue()
    // Initialization
    for (const node in this.connections) {
      distance[node] = (node === start.toString() ? 0 : Infinity)
      parent[node] = null
      priorityQueue.push(node, distance[node])
    }
    // Updating 'distance' object
    while (!priorityQueue.isEmpty()) {
      const node = priorityQueue.pop()
      Object.keys(this.connections[node]).forEach(neighbour => {
        if (priorityQueue.contains(neighbour) && distance[node] + this.connections[node][neighbour] < distance[neighbour]) {
          distance[neighbour] = distance[node] + this.connections[node][neighbour]
          parent[neighbour] = node
          priorityQueue.update(neighbour, distance[neighbour])
        }
      })
    }

    // MST Generation from the 'parent' object
    const graph = new GraphWeightedUndirectedAdjacencyList()
    Object.keys(parent).forEach(node => {
      if (node && parent[node]) {
        graph.addEdge(node, parent[node], this.connections[node][parent[node]])
      }
    })
    return graph
  }
}

function main () {
  const graph = new GraphWeightedUndirectedAdjacencyList()
  graph.addEdge(1, 2, 1)
  graph.addEdge(2, 3, 2)
  graph.addEdge(3, 4, 1)
  graph.addEdge(3, 5, 100) // Removed in MST
  graph.addEdge(4, 5, 5)
  console.log(graph.PrimMST(1))
}

main()
