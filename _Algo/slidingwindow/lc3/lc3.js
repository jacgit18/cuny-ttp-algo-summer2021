
// Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.


const lengthOfLongestSubstring = (s) =>{
    //iterate through string push to array or other string that if we passed we return current letter count
    if(s.length < 2) return s.length;
    let char_set = new Set(s[0]); // initially just add the first char to the set.
    let left_char_index = 0;
    let longest_substring_length = 0;

    for (let right_char_index = 1; right_char_index < s.length; right_char_index++) {
        // Check for duplicates, remove them, update left pointer
        while (char_set.has(s[right_char_index])) {
            char_set.delete(s[left_char_index]);
            left_char_index++;
        }
        char_set.add(s[right_char_index]); 
        longest_substring_length = Math.max(longest_substring_length, char_set.size);
    }
    return longest_substring_length;

   
};


const lengthOfLongestSubstring2 = function(s) {
    const n = s.length
    const set = new Set()
    let l = 0
    let r = 0
    let max = 0
    while(r < n) {
        const char = s[r]
        if(set.has(char)) {
            set.delete(s[l++])
        } else {
           set.add(char)
           max = Math.max(set.size, max)
           r++
        }
    }
    
    return max
};

let edgecase1 = "abcabcbb"; // 3
let edgecase2 = "bbbbb"; // 1
let edgecase3 = "pwwkew"; // 3
let edgecase4 = ""; // 0

// console.log(`${lengthOfLongestSubstring(edgecase1)}`);
// console.log(`${lengthOfLongestSubstring(edgecase2)}`);
// console.log(`${lengthOfLongestSubstring(edgecase3)}`);
// console.log(`${lengthOfLongestSubstring(edgecase4)}`);
console.time("Pair time");
lengthOfLongestSubstring(edgecase1);
// lengthOfLongestSubstring(edgecase2);
// lengthOfLongestSubstring(edgecase3);
// lengthOfLongestSubstring(edgecase4);
console.timeEnd("Pair time");

console.time("Pair time2");

lengthOfLongestSubstring2(edgecase1);

console.timeEnd("Pair time2");

module.exports = lengthOfLongestSubstring;