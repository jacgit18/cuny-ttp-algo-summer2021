// Trees
// Node class for a binary tree node
class TreeNode {
    constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Generate tree from array
  function deserialize(arr) {
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
  
  /*  Let's build the following tree with deserialize:
   *
   *              4
   *            /   \
   *          2       5
   *        /   \       \
   *      1       3       7
   *                    /   \
   *                  6      8
   */
  
  let array = [4, 2, 5, 1, 3, null, 7, null, null, null, null, 6, 8]
  let tree = deserialize(array)
  
  // 1. Breadth First Search
  function bfs(node) {
    let queue = [node];
    let current;
    let result = [];
    while(queue.length>0) {
      current = queue.shift();
      if(current.left !== null) {
        queue.push(current.left);
      }
      if(current.right !== null) {
        queue.push(current.right);
      }
      result.push(current.value);
    }
    return result;
  }


  // console.log("BFS:", bfs(tree));
  


  
  
  
  //2. Depth First Search - Pre
let resultPre = [];
function dfsPre(node) {
  if (node === null) { return; }
  resultPre.push(node.value); //A
  dfsPre(node.left); //L
  dfsPre(node.right); //R
  return resultPre;
}
console.log("DFS Pre:", dfsPre(tree));

//3. Depth First Search - In-order
let resultIn = [];
function dfsIn(node) {
  if (node === null) { return; }
  dfsIn(node.left); //L
  resultIn.push(node.value); //A
  dfsIn(node.right); //R
  return resultIn;
}
console.log("DFS In:", dfsIn(tree));

//4. Depth First Search - Post
let resultPost = [];
function dfsPost(node) {
  if (node === null) { return; }
  dfsPost(node.left); //L
  dfsPost(node.right); //R
  resultPost.push(node.value); //A
  return resultPost;
}
console.log("DFS Post:", dfsPost(tree));
  

