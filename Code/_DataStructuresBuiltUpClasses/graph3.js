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
  
    return graph;
  }
  
  // Example usage:
  const edges = [[1, 2], [1, 3], [2, 4], [3, 4]];
  const numNodes = 4;
  
  const graph = createBidirectionalGraph(edges, numNodes);
  console.log(graph);
  
  
  
  
  
  function createDirectedGraph(edges, numNodes) {
    const graph = {};
  
    // Initialize the graph with empty arrays for each node
    for (let i = 1; i <= numNodes; i++) {
      graph[i] = [];
    }
  
    // Add the edges to the graph
    edges.forEach(([sourceNode, targetNode]) => {
      // Add targetNode to sourceNode's adjacent nodes
      graph[sourceNode].push(targetNode);
    });
  
    return graph;
  }
  
  // Example usage:
  const edges1 = [[1, 2], [1, 3], [2, 4], [3, 4]];
  const numNodes1 = 4;
  
  const graph1 = createDirectedGraph(edges1, numNodes1);
  console.log(graph);
  