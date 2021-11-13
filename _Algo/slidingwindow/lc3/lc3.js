
// Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.


const lengthOfLongestSubstring = (s) =>{
    console.log(s)

   
};


let edgecase1 = "abcabcbb"; // 3
let edgecase2 = "bbbbb"; // 1
let edgecase3 = "pwwkew"; // 3
let edgecase4 = ""; // 0

console.log(`${lengthOfLongestSubstring(edgecase1)}`);
console.log(`${lengthOfLongestSubstring(edgecase2)}`);
console.log(`${lengthOfLongestSubstring(edgecase3)}`);
console.log(`${lengthOfLongestSubstring(edgecase4)}`);


module.exports = lengthOfLongestSubstring;