const treeSetter = require("../../../../_DataStructuresBuiltUpClasses/Trees/BinaryTreeRecursive");
const treeGetter = new treeSetter();
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function 
// to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// class Node {
//     constructor(data, left = null, right = null) {
//       this.data = data;
//       this.left = left;
//       this.right = right;
//     }
//   }


  class Node
  {
      constructor(data) {
         this.left = null;
         this.right = null;
         this.data = data;
      }
  }
   

const search = (nums, target) =>{
    let lo = 0, hi = nums.length-1;
    while (lo < hi) {
        let mid = lo + Math.floor((hi-lo+1)/2);
        if (target < nums[mid]) {
            hi = mid - 1
        } else {
            lo = mid; 
        }
    }
    return nums[lo]==target?lo:-1;
};

//  treeGetter.add(-1)
//  treeGetter.add(0)
//  treeGetter.add(3)
//  treeGetter.add(5)
//  treeGetter.add(9)
//  treeGetter.add(12)
//  console.log(treeGetter)

var sortedArrayToBST = function(nums) {
    return traverse(nums,0,nums.length-1); // recursively parse through array
};

function traverse(nums,start,end){
    if(start>end){                        // if start>end means left tree or right subtree is not possible so return null
        return null;
    }
    let mid = Math.floor((start+end)/2);       // get the mid index
    let root = new Node(nums[mid]);        // make a new node
    root.left = traverse(nums,start,mid-1);    // now recursively generate left subtree
    root.right = traverse(nums,mid+1,end);     // similarly generate right subtree
    return root;                               // return the root
}


// let tree= sortedArrayToBST([-1,0,3,5,9,12]); 
//                  alt
//      3           -1
//    /  \          /  \
//  -1    9        0    3
// / \  / \       / \  /
//   0 5   12    5  9  12

let root;
     
// Function to insert nodes in level order
function insertLevelOrder(arr, root, i)
{
    // Base case for recursion
    if (i < arr.length) {
        let temp = new Node(arr[i]);
        root = temp;

        // insert left child
        root.left = insertLevelOrder(arr, root.left,
                                         2 * i + 1);

        // insert right child
        root.right = insertLevelOrder(arr, root.right,
                                           2 * i + 2);
    }
    return root;
}

// Function to print tree nodes in InOrder fashion
function inOrder(root)
{
    if (root != null) {
        inOrder(root.left);
        console.log(root.data + " ");
        inOrder(root.right);
    }
}
 
// let arr = [-1,0,3,5,9,12];
// root = insertLevelOrder(arr, root, 0);
// console.log(root);
// inOrder(root);
console.log(search([-1,0,3,5,9,12], 9)); // output index were 9 is  so 4
console.log(search([-1,0,3,5,9,12], 2)); // output no 2 so return - 1
// console.log(search(root, 9)); // output index were 9 is  so 4 dont work
// console.log(search(root, 2)); // output no 2 so return - 1