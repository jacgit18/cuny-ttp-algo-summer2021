

  class TreeNode {
    constructor(value = null){
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

function  ArrayBinaryTreeDeserialize(arr) {
    if (arr.length === 0) { return null; }
    // could get mid and put it as root 
    let root = new TreeNode(arr[0]); // BFS levelOrder Push
    let queue = [root];
    for(let i = 1; i < arr.length; i += 2) {
      let current = queue.shift();

      // should do recursive
      if (arr[i] !== null && arr[i]) {

    //   if (arr[i] !== null && arr[i] < root.value ) {
        // if val less then root then parent node or one node up
        current.left = new TreeNode(arr[i]);
        // current.left = null;


        // if (queue < arr[i]){
            // current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        // }

       
      }

    //   console.log(root)

    //   if (arr[i + 1] !== null && arr[i + 1] !== undefined  && arr[i+1] > root.value) {

      if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
                // if val greater then root then parent node or one node up
                current.right = new TreeNode(arr[i + 1]);
                // current.right = null;


                // if (queue > arr[i]){
                    // current.right = new TreeNode(arr[i + 1]);
                    queue.push(current.right);
                // }

      }

    }
    return root;
  
}



console.log(ArrayBinaryTreeDeserialize([9,2,4,7,6]))


//              9
//            /   \ 
//           2     4
//         /  \   /  \
//        7   6
//                
//                