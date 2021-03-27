/*
Measure the density of a network 
measure of how many edges exist proportional to
how many edges would exist in a complete network (where all possible edges).
*/
function density (numberOfNodes, numberOfEdges, isDirected = false) {
  const multi = isDirected ? 1 : 2
  return (multi * numberOfEdges) / (numberOfNodes * (numberOfNodes - 1))
}

console.log(density(10, 2))
