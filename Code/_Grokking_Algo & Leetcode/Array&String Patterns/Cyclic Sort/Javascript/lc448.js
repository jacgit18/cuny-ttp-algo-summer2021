// Problem Statement #

// We are given an unsorted array containing numbers taken 
// from the range 1 to ‘n’. The array can have duplicates, which
//  means some numbers will be missing. Find all those missing numbers.

// Given an array nums of n integers where nums[i] is in the range [1, n], 
// return an array of all the integers in the range [1, n] that do not appear 
// in nums.



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

const findDisappearedNumbers = function(nums) {
  missingNumbers = [];
  // TODO: Write your code here
  return missingNumbers;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])); // [5,6]
console.log(findDisappearedNumbers([2, 4, 1, 2]));// [2]


// Solution
// -----
// function find_missing_numbers(nums) {
//   let i = 0;
//   while (i < nums.length) {
//     const j = nums[i] - 1;
//     if (nums[i] !== nums[j]) {
//       [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
//     } else {
//       i += 1;
//     }
//   }
//   missingNumbers = [];

//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] !== i + 1) {
//       missingNumbers.push(i + 1);
//     }
//   }

//   return missingNumbers;
// }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(n).

// Space complexity #
// Ignoring the space required for the output array, the algorithm runs in constant space O(1).
