
// Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

class LongestSubstring{

 lengthOfLongestSubstring = (substring) =>{
    //iterate through string push to array or other string that if we passed we return current letter count
    if(substring.length < 2) return substring.length; // because 1 character isnt enough

    let dupFilter = new Set(substring[0]); // initially just add the first char to the set.
    let left = 0;
    let maxSubarraySize = 0;
    let count = 0;


    for (let right = 1; right < substring.length; right++) {
        // Check for duplicates, remove them, update left pointer
        let dupcheck = dupFilter.has(substring[right]);
        while (dupFilter.has(substring[right])) {            
            dupFilter.delete(substring[left]);
            left++;
        }
        console.log(dupcheck, count++ )

        dupFilter.add(substring[right]); 
        console.log(dupFilter)

        maxSubarraySize = Math.max(maxSubarraySize, dupFilter.size);
    }
    console.log(maxSubarraySize)
    return maxSubarraySize;

   
};

            

 lengthOfLongestSubstring2 = function(substring) {
    const stringSize = substring.length
    const dupFilter = new Set()
    let left = 0
    let right = 0
    let maxSubarraySize = 0
    let count = 0;

    while(right < stringSize) {
        const char = substring[right]
        let dupcheck = dupFilter.has(char);

        if(dupFilter.has(char)) {
            dupFilter.delete(substring[left++])
        } else {
            dupFilter.add(char)
            maxSubarraySize = Math.max(dupFilter.size, maxSubarraySize)
           right++
           console.log(dupFilter)
        }
        console.log(dupcheck, count++)

    }
    console.log(maxSubarraySize)
    
    return maxSubarraySize
};

 methodRunner = () =>{
     let edgecase1 = "abcabcbb"; // 3
let edgecase2 = "bbbbb"; // 1
let edgecase3 = "pwwkew"; // 3
let edgecase4 = ""; // 0

// console.log(`${lengthOfLongestSubstring(edgecase1)}`);
// console.log(`${lengthOfLongestSubstring(edgecase2)}`);
// console.log(`${lengthOfLongestSubstring(edgecase3)}`);
// console.log(`${lengthOfLongestSubstring(edgecase4)}`);

console.time("Pair time");

this.lengthOfLongestSubstring(edgecase1);
// lengthOfLongestSubstring(edgecase2);
// lengthOfLongestSubstring(edgecase3);
// lengthOfLongestSubstring(edgecase4);

console.timeEnd("Pair time");

console.time("Pair time2");
console.log("------------------^");

this.lengthOfLongestSubstring2(edgecase1);

console.timeEnd("Pair time2");
console.log("------------------^");
}


}

const longClass = new LongestSubstring();
longClass.methodRunner();

// module.exports = longClass;
module.exports = new LongestSubstring();