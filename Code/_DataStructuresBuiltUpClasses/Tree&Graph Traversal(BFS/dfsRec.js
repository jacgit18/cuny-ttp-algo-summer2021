class Vertex {
    constructor(id) {
      this.id = id !== undefined ? id : null;
      this.edges = [];
  
    }
  }

    

   const ArrayGraphDeserialize = (nodeIdx, edges) =>{
    let vertices = {};
     
    while (nodeIdx--) {

        vertices[nodeIdx] = new Vertex(nodeIdx);

    }
     
    let v1;
    let v2;


    edges.forEach((edge) => {
      v1 = edge[0]; 
      v2 = edge[1]; 

      vertices[v1].edges.push(vertices[v2]); 
      vertices[v2].edges.push(vertices[v1]);


    }


    
    );
  
    return vertices[0];
  }

  let idGraphIndex = 8;
  let GraphRelationshipArray = [
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

  let graph1 =  ArrayGraphDeserialize(idGraphIndex, GraphRelationshipArray)


function dfsRec(vertex) {
    let result = [];
    let visited = new Set();
    //  let stack = [vertex]; 
    // let current;
    // since recursion no need for stack and storing vertex
    // in current vairiable and reasigning it to stack.pop()


    function helper(current) {
     if(visited.has(current)) return;
    //  curr = stack.pop();


     visited.add(current);
     result.push(current.id);
 
      for (let edge of current.edges){
        // stack.push(edge);

        helper(edge)
        
      }

    }

    helper(vertex)
    
    
    return result;
  }

//   DFSRec: [
//     0, 1, 2, 4,
//     5, 3, 6, 7
//   ]


// DFSRec: [
//     3, 6, 5, 7,
//     4, 2, 1, 0
//   ]
 
  console.log("DFSRec:", dfsRec(graph1));  