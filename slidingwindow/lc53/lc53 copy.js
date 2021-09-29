

function max_subarray_size_k(k, nums) {
  let window_size = Number.MAX_VALUE // defining variables and pointers
	let sum = 0, i, left=0;            
    
    for( i=0; i < nums.length; i++ ){
        
        sum = sum + nums[i]       // doing sum of elements
        
        while( sum >= k ){        // if it exceeds the target, then update the windowsize
                                  
								  // LOGIC FOR UPDATING WINDOW IS :-
                                  // Increment rightMost side : automatically done by forLoop
                                  // Decrement leftMost side  : subtract left's value from sum
                                  //                            and update the leftpointer
            
            window_size = Math.min( window_size, i+1 - left ) //updating window size & storing minimum value of windowsize
															  
            
            sum = sum - nums[left]
            left ++;
            
        }
    }
    
    return (window_size== Number.MAX_VALUE) ? 0 : window_size

}

// just we can change "windowsize = maxvalue" (line 2)
// and "windowsize = math.max..." right?? (line 7)


console.time("answer time");


console.log(
  `Maximum sum of a subarray of size K: ${max_subarray_size_k(
    3,
    [2, 1, 5, 1, 3, 2]
  )}`
);
console.timeEnd("answer time");



