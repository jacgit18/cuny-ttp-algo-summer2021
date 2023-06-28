function createDirectedGraph(edges, numNodes) {
    const graph = {};
    const outgoingPointers = {};
    const incomingPointers = {};
  
    // Initialize the graph with empty arrays for each node
    for (let i = 1; i <= numNodes; i++) {
      graph[i] = [];
      outgoingPointers[i] = [];
      incomingPointers[i] = [];
    }
  
    // Add the edges to the graph and pointers
    edges.forEach(([sourceNode, targetNode]) => {
      // Add targetNode to sourceNode's outgoing pointers
      graph[sourceNode].push(targetNode);
      outgoingPointers[sourceNode].push(targetNode);
      // Add sourceNode to targetNode's incoming pointers
      incomingPointers[targetNode].push(sourceNode);
    });
  
    console.log('Outgoing Pointers:');
    Object.entries(outgoingPointers).forEach(([sourceNode, targets]) => {
      const arrows = targets.length ? ' -> ' + targets.join(' -> ') : '';
      console.log(`${sourceNode}${arrows}`);
    });
  
    console.log('Incoming Pointers:');
    Object.entries(incomingPointers).forEach(([targetNode, sources]) => {
      const arrows = sources.length ? ' <- ' + sources.join(' <- ') : '';
      console.log(`${targetNode}${arrows}`);
    });
  
    return graph;
  }
  
  // Example usage:
  const edges = [[1, 2], [1, 3], [2, 4], [3, 4]];
  const numNodes = 4;
  
  const graph = createDirectedGraph(edges, numNodes);
  console.log('Graph:');
  console.log(graph);
  