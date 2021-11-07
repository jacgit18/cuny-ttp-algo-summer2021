
  class ListNode {
    constructor(value = null) {
      this.value = value;
      this.next = null;
    }
  }


  class TreeNode {
    constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  

class Vertex {
    constructor(id) {
      this.id = id !== undefined ? id : null;
      this.edges = [];
    }
  }


    
  function ArrayLinkListDeserialize(arr) {
    if (arr.length === 0) { return null; }
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
    return head;
  }
  
  function ArrayTreeDeserialize(arr) {
    if (arr.length === 0) { return null; }
    let root = new TreeNode(arr[0]);
    let queue = [root];
    for(let i = 1; i < arr.length; i += 2) {
      let current = queue.shift();
      if (arr[i] !== null) {
        current.left = new TreeNode(arr[i]);
        queue.push(current.left);
      }
      if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
        current.right = new TreeNode(arr[i + 1]);
        queue.push(current.right);
      }
    }
    return root;
  }


  function ArrayGraphDeserialize(nodeIdx, edges) {
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


  let LinkListArray = [1,5,7,10];

  let TreeArray = [4, 2, 5, 1, 3, null, 7, null, null, null, null, 6, 8]


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


  let linkedList = console.log(ArrayLinkListDeserialize(LinkListArray));
  let tree = console.log(ArrayTreeDeserialize(TreeArray));
  let graph = console.log(ArrayGraphDeserialize(idGraphIndex, GraphRelationshipArray));


  
  
  

