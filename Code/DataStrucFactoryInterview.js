// Basic List Data Structures //

// Stack & Queue main difference is pop which removes last index and dequeue which shifts or removes first index
// Stack LIFO(Last In First Out) - a Stack of plates 
const stackMaker = (stackOfPlates) => {
  let stack = [];
  for (let i = 0; i < stackOfPlates.length; i++){
    stack.push(stackOfPlates[i]); 
  }
  return stack;
}
let stack = stackMaker([2,3,1,4,3,2,6,5]);
stack.pop();
console.log(stack)



// Queue FIFO(First In First Out) - a line(queue)/ticket 
const queMaker = (waitingLine) => {
  let queue = [];
  if(waitingLine.length <= 1 ){ 
    queue.push(waitingLine[0]);
  }
  for (let i = 0; i < waitingLine.length; i++){
    queue.push(waitingLine[i]); // push acts as enqueue
  }
  return queue;
}
let queue = queMaker([2,3,1,4,3,2,6,5]);
let dequeue = queue.shift();
console.log(queue)



// // Set
// let mySet = new Set();
// mySet.add(3);
// mySet.add(10);
// mySet.delete(3);


// // End of Section //


// // Are these the same
// // class compare {
// //   mymethod() {
// //      return;
// //     }
// // }

// // const compare = {
// //   mymethod: function(){
// //     return ;
// //   }
// // }
// //////////
//   class ListNode {
//     constructor(value = null) {
//       this.value = value;
//       this.next = null;
//     }
//   }


//   class TreeNode {
//     constructor(value){
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   // Vertex − Each node of the graph is represented as a vertex. In the following example, the labeled circle represents vertices. 
//   // Thus, A to G are vertices. We can represent them using an array as shown in the following image. Here A can be identified by index 0.
//   //  B can be identified using index 1 and so on.
// class Vertex {
//     constructor(id) {
//   // Adjacency − Two node or vertices are adjacent if they are connected to each other through an edge. 
//   // In the following example, B is adjacent to A, C is adjacent to B, and so on.
//       this.id = id !== undefined ? id : null;
//       this.edges = [];
//   // Edge − Edge represents a path between two vertices or a line between two vertices. 
//   // In the following example, the lines from A to B, B to C, and so on represents edges.
//   // We can use a two-dimensional array to represent an array as shown in the following image. 
//   // Here AB can be represented as 1 at row 0, column 1, BC as 1 at row 1, column 2 and so on, keeping other combinations as 0.
//     }
//   }

    
//   function ArrayLinkListDeserialize(arr) {
//     if (arr.length === 0) { return null; }
//     let head = new ListNode(arr[0]);
//     let current = head;
//     for (let i = 1; i < arr.length; i++) {
//       // Path − Path represents a sequence of edges between the two vertices. In the following example, ABCD represents a path from A to D
//       current.next = new ListNode(arr[i]);
//       current = current.next;
//     }
//     return head;
//   }
  
//   function ArrayTreeDeserialize(arr) {
//     if (arr.length === 0) { return null; }
//     let root = new TreeNode(arr[0]);
//     let queue = [root];
//     for(let i = 1; i < arr.length; i += 2) {
//       let current = queue.shift();
//       if (arr[i] !== null) {
//         current.left = new TreeNode(arr[i]);
//         queue.push(current.left);
//       }
//       if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
//         current.right = new TreeNode(arr[i + 1]);
//         queue.push(current.right);
//       }
//     }
//     return root;
//   }


//   function ArrayGraphDeserialize(nodeIdx, edges) {
//     let vertices = {};
//     while (nodeIdx--) {
//       vertices[nodeIdx] = new Vertex(nodeIdx);
  
//     }
//     let v1;
//     let v2;
  
//     edges.forEach((edge) => {
 
//       v1 = edge[0];
//       v2 = edge[1];

//       vertices[v1].edges.push(vertices[v2]); 
//       vertices[v2].edges.push(vertices[v1]);
  
//     }
    
//     );
  
//     return vertices[0];
//   }


//   let LinkListArray = [1,5,7,10];

//   let TreeArray = [4, 2, 5, 1, 3, null, 7, null, null, null, null, 6, 8]


//   let idGraphIndex = 8;
//   let GraphRelationshipArray = [
//     [0, 1],
//     [1, 2],
//     [2, 4],
//     [3, 5],
//     [4, 5],
//     [1, 7],
//     [4, 6],
//     [4, 7],
//     [5, 6],
//   ];


//   let linkedList = console.log(ArrayLinkListDeserialize(LinkListArray));
//   let tree = console.log(ArrayTreeDeserialize(TreeArray));
//   let graph = console.log(ArrayGraphDeserialize(idGraphIndex, GraphRelationshipArray));


  
  
  

