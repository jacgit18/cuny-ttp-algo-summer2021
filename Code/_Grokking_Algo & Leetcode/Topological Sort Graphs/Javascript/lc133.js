
// const Graph = require("../../../_DataStructuresBuiltUpClasses/Tree&Graph Traversal(BFS/Graphs");


class Graph { 
    constructor() { 
      this.numberOfNodes = 0; 
      this.adjacentList = {}; 
    } 
    addVertex(node)  { 
      this.adjacentList[node] = []; 
      this.numberOfNodes++;
    } 
    addEdge(node1, node2) { 
      //uniderected Graph 
      this.adjacentList[node1].push(node2); 
      this.adjacentList[node2].push(node1); 
    } 
    showConnections() { 
      const allNodes = Object.keys(this.adjacentList); 
      for (let node of allNodes) { 
        let nodeConnections = this.adjacentList[node]; 
        let connections = ""; 
        let vertex;
        for (vertex of nodeConnections) {
          connections += vertex + " ";
        } 
        console.log(node + "--> " + connections); 
      } 
  } 
  } 

const myGraph = new Graph();

let GraphArray = [[2,4],[1,3],[2,4],[1,3]];
let id = 4;
// let node = myGraph.ArrayGraphDeserialize(id, GraphArray);
myGraph.addVertex('1');
  myGraph.addVertex('2');
  myGraph.addVertex('3');
  myGraph.addVertex('4');

  myGraph.addEdge('1', '2'); 
  myGraph.addEdge('2', '3'); 
  myGraph.addEdge('4', '1'); 
  myGraph.addEdge('3', '4'); 

console.log(myGraph)



const cloneGraph = function(node, map={}) {
    if (!node) return null;
     if (!map[node.val]) {
       map[node.val] = new Graph(node.val);
       map[node.val].neighbors = node.neighbors.map((n) => cloneGraph(n, map));
     }
     return map[node.val];
   

};


console.log(cloneGraph([[2,4],[1,3],[2,4],[1,3]]));