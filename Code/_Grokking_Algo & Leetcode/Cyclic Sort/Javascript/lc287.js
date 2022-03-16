// Problem Statement #

// We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’.
//  The array has only one duplicate but it can be repeated multiple times. Find that duplicate 
//  number without using any extra space. You are, however, allowed to modify the input array.



/* 

Problem/Notes:


I/O:

EdgeCase:{

}

Naïve-Approach:


Constraints:


Variables:


Control flow
         TestCase: {

          Pre-Condition:

         Conditions:

         Termination-Conditions:

         Post-Conditions:

}        switch case()



 Steps:
 1.
 2.


To Leverage & Rule out

 DataStructure&Algo :


 Functions:





 
 
*/

const find_duplicate = function(nums) {
  // TODO: Write your code here
  return -1;
};

console.log(find_duplicate([1,3,4,2,2]));// 2
console.log(find_duplicate([3,1,3,4,2]));// 3


// Solution
// -----
// function find_duplicate(nums) {
//   let i = 0;
//   while (i < nums.length) {
//     if (nums[i] !== i + 1) {
//       j = nums[i] - 1;
//       if (nums[i] !== nums[j]) {
//         [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
//       } else { // we have found the duplicate
//         return nums[i];
//       }
//     } else {
//       i += 1;
//     }
//   }
//   return -1;
// }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(n).

// Space complexity #
// The algorithm runs in constant space O(1) but modifies the input array.
