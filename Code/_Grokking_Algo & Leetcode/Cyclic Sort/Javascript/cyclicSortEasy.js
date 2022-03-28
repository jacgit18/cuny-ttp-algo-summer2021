// Problem Statement #

// We are given an array containing ‘n’ objects. Each object, when created, was assigned a unique number from 1 to ‘n’ 
// based on their creation sequence. This means that the object 
// with sequence number ‘3’ was created just before the object with sequence number ‘4’.

// Write a function to sort the objects in-place on their creation sequence number in O(n) and
//  without any extra space. For simplicity, let’s assume we are passed an integer array containing 
//  only the sequence numbers, though each number is actually an object.


/**
 * Input: Unorder array
 * Output: Sorted array
 * 
 * while current index less then array length if 
 * current index not equal to index
 * 
 * next index  equals current index - 1
 * 
 * then inddex  equals next index
 * 
 * else iterate over array and return sorted array
 */

// using pointers sort for when you no were things are espicially for a range of numbers

// const log = (preString, arg, postString) => {
//   preString?.length ||postString?.length ||  preString?.length && postString?.length 
//   ?  console.log(`${preString + arg + postString}`)
//   : false


// }

// const log = (preString="", arg, postString="") => {
//   preString?.length ||postString?.length 
//   ?   console.log(`${preString + arg + postString}`)
//   : false


// }


const log = (preString="", arg="", postString="") => {
    console.log(`${preString} ${arg} ${postString} `)


}

const info = (arg) => console.info(arg)
const warn = (arg) => console.warn(arg)
const error = (arg) => console.error(arg)
const table = (arg) => console.table(arg)



const cyclic_sort = function (nums) {
let index = 0;
let count = 0;

while (index < nums.length){
  let y = nums[index] -1; 
  // log(y)
  if (y != index){
    // log("index atfer if", nums[index])

    let nextIndex = nums[index] - 1; 
    // log("index atfer nextIndex", nums[index] - 1)


    let x = nums[index];


    nums[index] = nums[nextIndex];
    // log("index update", nums[index])
    // log("nextIndex before update", nums[nextIndex])
    // log("x before update", x)
    

    nums[nextIndex] = x; 
    // log("nextIndex atfer update", nums[nextIndex])
    // log(`\n`)
    // log("Pre", nums, "Post")


  } else{

    index++;

  }
  // log("Pre", nums, "Post")
// log("", ++count, "")
}
 

  return nums;
};


log(cyclic_sort([3, 1, 5, 4, 2]))

// console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`);
// console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`);
// console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`);

// Solution
// -----
// function cyclic_sort(nums) {
//   let i = 0;
//   while (i < nums.length) {
//     const j = nums[i] - 1;
    // if (nums[i] !== nums[j]) {
//       [nums[i], nums[j]] = [nums[j], nums[i]]; // swap array destructuring
//     } else {
//       i += 1;
//     }
//   }
//   return nums;
// }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(n). Although we are not incrementing the index i when swapping the numbers, this will result in more than ‘n’ iterations of the loop, but in the worst-case scenario, the while loop will swap a total of ‘n-1’ numbers and once a number is at its correct index, we will move on to the next number by incrementing i. So overall, our algorithm will take O(n) + O(n-1) which is asymptotically equivalent to O(n).

// Space complexity #
// The algorithm runs in constant space O(1).
