function createBidirectionalGraph(edges, numNodes) {
    const graph = {};
  
    // Initialize the graph with empty arrays for each node
    for (let i = 1; i <= numNodes; i++) {
      graph[i] = [];
    }
  
    // Add the edges to the graph
    edges.forEach(([nodeA, nodeB]) => {
      // Add nodeB to nodeA's adjacent nodes
      graph[nodeA].push(nodeB);
      // Add nodeA to nodeB's adjacent nodes
      graph[nodeB].push(nodeA);
    });
  
    console.log('Graph:');
    Object.entries(graph).forEach(([node, adjacentNodes]) => {
      const outgoingArrows = adjacentNodes.length ? ' -> ' + adjacentNodes.join(' -> ') : '';
      const incomingArrows = graph[node].length ? ' <- ' + graph[node].join(' <- ') : '';
      console.log(`${node}${outgoingArrows}${incomingArrows}`);
    });
  
    return graph;
  }
  
  // Example usage:
  const edges = [[1, 2], [1, 3], [2, 4], [3, 4]];
  const numNodes = 4;
  
  const graph = createBidirectionalGraph(edges, numNodes);
  