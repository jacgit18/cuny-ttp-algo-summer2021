// Problem Statement #

// Given an array of positive numbers and a positive number ‘S,’ find the length 
// of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

/**
 * 
 * BRUTE Force (proably nested loop or mayb)
 * pre condition empty array
  let windowSize = 2;
  for loop {
    iterate through array length 
    // window condition if array[index] >= target return length of numbers in tha addition 
    
    or 
    [prefered outcome because we want the smallest subarray]
    if subarry is >=
    // target return length basically if one number meets condition return that subarray length without addition
    /

  }
 

  alt 

  loop while intial index and next index sum less than target ...
 * 
 * 
 */

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

function smallest_subarray_with_given_sum(s, arr) {
  console.log(`------ Test Cases ------`)
  // Properties: head, next pointer, Node value, null, current position, next position, last position
  
  // Pre-Condition: if list empty or only has null
  // 
  // Conditions: while current head not equal to null

  let winSum = 0, 
  minLength = Infinity,
  windowSizeStart = 0;

  for (let start = 0; start < arr.length; start++){
    console.log(`\n winSum value ${winSum}`)

    winSum += arr[start];
    console.log(`winSum value Before next for loop iteration ${winSum}`)

    while (winSum >= s){
      console.log(`winSum value start of while ${winSum}`)

      console.log(`minLength value before ${minLength}`)
      minLength = Math.min(minLength, start - windowSizeStart +1);
      console.log(`minLength after ${minLength}`)

      winSum -= arr[windowSizeStart];
      console.log(`winSum value before next start of while ${winSum}`)

      windowSizeStart += 1;

    }

  }
  console.log(`WinSum value end ${winSum}`)

  console.log(`minLength value end ${minLength}`)

  if(minLength === Infinity){
    return 0;
  }
return minLength;



}

console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    7,
    [2, 1, 5, 2, 3, 2]
  )}\n`
);
console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    7,
    [2, 1, 5, 2, 8]
  )}\n`
);
console.log(
  `Smallest subarray length should be: ${smallest_subarray_with_given_sum(
    8,
    [3, 4, 1, 1, 6]
  )}\n`
);


    /**
   *  Optimal Approach
   * -----------------
   *  Variables: 
   * 
   * 
   */