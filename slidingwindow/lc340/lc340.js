// Problem Statement #

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// You can assume that K is less than or equal to the length of the given string.

/**
 *
 * Input:
 * Output:
 *
 * Naive Brute Force Approach
 * ---------------
 * Variables:
 *
 * */

function longest_substring_with_k_distinct(str, k) {
  // console.log(`------ Test Cases ------`)
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    // console.log(str[windowEnd]); // you can loop through substrings

    const rightChar = str[windowEnd];
    // console.log(!(rightChar in charFrequency))

    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;
    // console.log(Object.keys(charFrequency).length)

    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart += 1; // shrink the window
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "araaci",
    2
  )}`
);

console.log(`------- Edge Cases ---------`);

console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    'araaci',
    1
  )}`
);
// console.log(
//   `Length of the longest substring: ${longest_substring_with_k_distinct(
//     'cbbebi',
//     3
//   )}`
// );

/**
 *  Optimal Approach
 * -----------------
 *  Variables:
 *
 *
 */

// Solution
// -----
// let windowStart = 0,
// maxLength = 0,
// charFrequency = {};

// // in the following loop we'll try to extend the range [window_start, window_end]
// for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
// const rightChar = str[windowEnd];
// if (!(rightChar in charFrequency)) {
//   charFrequency[rightChar] = 0;
// }
// charFrequency[rightChar] += 1;
// // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
// while (Object.keys(charFrequency).length > k) {
//   const leftChar = str[windowStart];
//   charFrequency[leftChar] -= 1;
//   if (charFrequency[leftChar] === 0) {
//     delete charFrequency[leftChar];
//   }
//   windowStart += 1; // shrink the window
// }
// // remember the maximum length so far
// maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
// }

// return maxLength;
