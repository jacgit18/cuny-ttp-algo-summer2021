const treeSetter = require("../../../../_DataStructuresBuiltUpClasses/Trees/BinaryTreeRecursive");
const treeGetter = new treeSetter();
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function 
// to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

class Node {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
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


let tree= sortedArrayToBST([-1,0,3,5,9,12]); 

//      3
//    /  \
//  -1    9
// / \  / \
//   0 5   12
console.log(search([-1,0,3,5,9,12], 9)); // output index were 9 is  so 4
console.log(search([-1,0,3,5,9,12], 2)); // output no 2 so return - 1