const graph = require('../../_DataStructuresBuiltUpClasses/Tree&Graph Traversal(BFS/Graphs')

class Node {
    constructor(id) {

      this.id = id !== undefined ? id : null;
      this.edges = [];

    }
  }

var cloneGraph = function(node) {
      let start = node; 
      console.log(start.val)

      if (start === null) return null;
      const vertexMap = new Map(); 
      
      
      const queue = [start]

      vertexMap.set(start, new Node(start.val)); 

     
      
      while (queue.length > 0) {
          const currentVertex = queue.shift(); 
          for (const neighbor of currentVertex.neighbors) {
              if (!vertexMap.has(neighbor)) {
                 
                  vertexMap.set(neighbor, new Node(neighbor.val))
                  queue.push(neighbor); 
              }
              
             
              vertexMap.get(currentVertex).neighbors.push(vertexMap.get(neighbor)); 
          }
      }
     return vertexMap.get(start); 
    }

//   const ArrayGraphDeserialize = (nodeIdx, edges) => {
//         let vertices = {};
//         while (nodeIdx--) {
//           vertices[nodeIdx] = new Vertex(nodeIdx);
      
//         }
//         let v1;
//         let v2;
      
//         edges.forEach((edge) => {
     
//           v1 = edge[0];
//           v2 = edge[1];
    
//           vertices[v1].edges.push(vertices[v2]); 
//           vertices[v2].edges.push(vertices[v1]);
      
//         }
        
//         );
      
//         return vertices[0];
//       }
    

//       let idGraphIndex = 4;
//       let GraphRelationshipArray = [
//         [2,4],[1,3],[2,4],[1,3]
//       ];

// let adjList = ArrayGraphDeserialize(idGraphIndex,GraphRelationshipArray)
const myGraph = new graph();

  myGraph.addVertex('1');
  myGraph.addVertex('2');
  myGraph.addVertex('3');
  myGraph.addVertex('4');

  myGraph.addEdge('1', '2'); 
  myGraph.addEdge('2', '3'); 
  myGraph.addEdge('4', '1'); 
  myGraph.addEdge('3', '4'); 

// console.log(myGraph)

// let adjList = myGraph

    console.log(cloneGraph(myGraph))