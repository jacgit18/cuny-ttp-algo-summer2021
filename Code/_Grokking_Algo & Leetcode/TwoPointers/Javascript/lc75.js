// Problem Statement #

// Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, 
// we can’t count 0s, 1s, and 2s to recreate the array.The flag of the Netherlands consists of three colors: red, white 
// and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.

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

const dutch_flag_sort = function (arr) {


};


console.log(dutch_flag_sort([2,0,2,1,1,0])); 

console.log(dutch_flag_sort([2, 0, 1]));

// Solution
// -----
// function dutch_flag_sort(arr) {
//   // all elements < low are 0, and all elements > high are 2
//   // all elements from >= low < i are 1
//   let low = 0,
//     high = arr.length - 1,
//     i = 0;
//   while (i <= high) {
//     if (arr[i] === 0) {
//       [arr[i], arr[low]] = [arr[low], arr[i]]; // swap
//       // increment 'i' and 'low'
//       i += 1;
//       low += 1;
//     } else if (arr[i] === 1) {
//       i += 1;
//     } else { // the case for arr[i] === 2
//       [arr[i], arr[high]] = [arr[high], arr[i]]; // swap
//       // decrement 'high' only, after the swap the number at index 'i' could be 0, 1, or 2
//       high -= 1;
//     }
//   }
// }

// -----

// Time complexity #
// The time complexity of the above algorithm will be O(N) as we are iterating the input array only once.

// Space complexity #
// The algorithm runs in constant space O(1).
