// Problem Statement #
// Given an array of unsorted numbers and a target number, find a triplet in the array 
// whose sum is as close to the target number as possible, return the sum of the triplet. 
// If there are more than one such triplet, return the sum of the triplet with the smallest sum.

/**
 * 
 * Input: array, targetSUm
 * Output: 
 *  
 * Naive Approach
 * --------------- 
 * Variables: 
 * 
 
 * 
 */

const triplet_sum_close_to_target =  (arr, targetSum) =>{
  // console.log(arr)

  arr.sort((a, b) => {
    a-b;

    // console.log(`Sort  ${a - b}`)
    // console.log(a,b)
    // console.log(arr)


  });
  // console.log(" ")

  let closest_difference = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1; // always next value
    let right = arr.length - 1;

      // console.log(`Left ${left[arr]}`)
      // console.log(`Right ${right}`)

    while (left < right) {
      const target_diff = targetSum - arr[i] - arr[left] - arr[right];

      if (target_diff === 0) { // we've found a triplet with an exact sum
        return targetSum - target_diff; // return sum of all the numbers
      }
  
      if (Math.abs(target_diff) < Math.abs(closest_difference)) {
        closest_difference = target_diff; // save the closest difference
      }
      // the second part of the following 'if' is to handle the smallest sum when we have more than one solution
      if (Math.abs(target_diff) < Math.abs(closest_difference) ||
        (Math.abs(target_diff) === Math.abs(closest_difference) && target_diff > closest_difference)) {
        closest_difference = target_diff; // save the closest and the biggest difference
      }
  
      if (target_diff > 0) {
        left += 1; // we need a triplet with a bigger sum
      } else {
        right -= 1; // we need a triplet with a smaller sum
      }

    }
  }
  return targetSum - closest_difference;

};

console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2))
// console.log(`Edge Cases`)
// console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
// console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));



/**
 *  Optimal Approach
 * -----------------
 *  Variables: root, root. left, root.right, index, array to store the root essentially a stack, TotalSum
 * 
 * 
 */


// Solution
// -----
// arr.sort((a, b) => a - b);
// let closest_difference = Infinity;
// for (let i = 0; i < arr.length - 2; i++) {
//   let left = i + 1,
//     right = arr.length - 1;
//   while (left < right) {
//     const target_diff = targetSum - arr[i] - arr[left] - arr[right];
//     if (target_diff === 0) { // we've found a triplet with an exact sum
//       return targetSum - target_diff; // return sum of all the numbers
//     }

//     if (Math.abs(target_diff) < Math.abs(closest_difference)) {
//       closest_difference = target_diff; // save the closest difference
//     }
//     // the second part of the following 'if' is to handle the smallest sum when we have more than one solution
//     if (Math.abs(target_diff) < Math.abs(closest_difference) ||
//       (Math.abs(target_diff) === Math.abs(closest_difference) && target_diff > closest_difference)) {
//       closest_difference = target_diff; // save the closest and the biggest difference
//     }

//     if (target_diff > 0) {
//       left += 1; // we need a triplet with a bigger sum
//     } else {
//       right -= 1; // we need a triplet with a smaller sum
//     }
//   }
// }
// return targetSum - closest_difference;

// -----

// Time complexity #
// Sorting the array will take O(N* logN). Overall, the function will take O(N * logN + N^2), which is asymptotically equivalent to O(N^2).

// Space complexity #
// The above algorithm’s space complexity will be O(N), which is required for sorting.
