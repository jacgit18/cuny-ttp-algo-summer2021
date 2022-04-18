  
const log = (pre="", arg="", post="") => { try {
  console.log(`${pre} ${arg} ${post} `) } catch (e) {}

}
const info = (pre="", arg="", post="") => {console.info(`${pre} ${arg} ${post} `)}
const warn = (pre="", arg="", post="") => {console.warn(`${pre} ${arg} ${post} `)}
const error = (pre="", arg="", post="") => {console.error(`${pre} ${arg} ${post} `)}
const table = (pre="", arg="", post="") => {console.table(`${pre} ${arg} ${post} `)}

class Vertex {
    constructor(id) {
      this.id = id !== undefined ? id : null;
      this.edges = [];
  
    }
  }

    

   const ArrayGraphDeserialize = (nodeIdx, edges) =>{
    let vertices = {};
    // while (nodeIdx--) {

    while (nodeIdx >= 0) {

      // if(nodeIdx > 0){
        vertices[nodeIdx] = new Vertex(nodeIdx);
        nodeIdx--;
        
        // edges.length

      // } 
      
      // else if(edges.contains(0)){
      //   vertices[nodeIdx] = new Vertex(nodeIdx);

      // }
    }
    let v1;
    let v2;

    

    edges.forEach((edge) => {
      // [2,4] row 1
      v1 = edge[0]; // assign to first rowCOl [2]
      v2 = edge[1]; // assign to second row [4] might act as column



      vertices[v1].edges.push(vertices[v2]); 
      // accees key of v1 or 2 intially to push to edge v2 or 4 
      vertices[v2].edges.push(vertices[v1]);
      // does vice versa process
      // 2 > 4 / 4 > 2

    }
    
    );
  
    return vertices[0];
  }

  

  let GraphArray = [[2,4],[1,3],[2,4],[1,3]];
let id = 4;

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

// const stuructureMaker = new NodeConstructor();

  let graph1 =  ArrayGraphDeserialize(idGraphIndex, GraphRelationshipArray)
  // let graph1 =  ArrayGraphDeserialize(id, GraphArray)
  log(graph1)


// console.log(Object.keys(graph1).length)
// console.log(Object.entries(graph1))


// for (const [key, value] in Object.keys(graph1)) {
//   console.log(`${key}: ${value}`);
// }
// console.log(graph1.entries(graph1));

// var get_keys = graph1.keys(this.id);
 
    // iterate over the vertices
    // for (var i in get_keys)
// {
        // great the corresponding adjacency list
        // for the vertex
        // var get_values = this.AdjList.get(i);
        // var get_values = graph1.values(graph1.edges)

        // var conc = "";
 
        // iterate over the adjacency list
        // concatenate the values into a string
        // for (var j in get_values)
            // conc += j + " ";
 
        // print the vertex and its adjacency list
        // console.log(i + " -> " + conc);
    // }

  
  // console.log(ArrayGraphDeserialize(id, GraphArray));




  
