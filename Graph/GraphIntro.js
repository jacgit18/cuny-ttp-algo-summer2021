//Graphs
class Vertex {
  constructor(id) {
    this.id = id !== undefined ? id : null;
    this.edges = [];
  }
}

// Generate graph from int and array of arrays
function deserialize(node, edges) {
  let vertices = {};
  while (node--) {
    vertices[node] = new Vertex(node);
     try {
      console.log( vertices[node])

    } catch (error) {
      
    }
  }
  let v1;
  let v2;
  edges.forEach((edge) => {
    // console.log(`test ${edge}`)
    v1 = edge[0];
    v2 = edge[1];
    vertices[v1].edges.push(vertices[v2]);
    vertices[v2].edges.push(vertices[v1]);
  });

  return vertices[0];
}

/* Let's build the following graph
 *
 *              2
 *            /   \
 *    0 ~~~ 1       4  ~~~ 5 ~~~ 3
 *            \   /   \   /
 *              7       6
 */

let num = 8;
let array = [
  [0, 1],
  [1, 2],
  [2, 4],
  [3, 5],
  [4, 5],
  [1, 7],
  [4, 6],
  [4, 7],
  [5, 6],
];

let graph = deserialize(num, array);

//1. Breadth First Search
function bfs(vertex) {
  let result = [];
  let queue = [vertex];
  let current;
  let visited = new Set();

  visited.add(vertex);

  while (queue.length > 0) {
    current = queue.shift();

    current.edges.forEach((edge) => {
      if (!visited.has(edge)) {
        queue.push(edge);
        visited.add(edge);
      }
    });

    result.push(current.id);
  }
  return result;
}
console.log("BFS:", bfs(graph));

//2. Depth First Search
function dfs(vertex) {
  let result = [];
  let stack = [vertex];
  let current;

  let visited = new Set();
  visited.add(vertex);

  while (stack.length > 0) {
    current = stack.pop();

    current.edges.forEach((edge) => {
      if (!visited.has(edge)) {
        stack.push(edge);
        visited.add(edge);
      }
    });

    result.push(current.id);
  }
  return result;
}
console.log("DFS:", dfs(graph));
