// Given two strings s and p, return an array of all the start indices of p's 
// anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a 
// different word or phrase, typically using all the original letters exactly once.




const findAnagrams = (s,p) =>{

}



console.log(findAnagrams("cbaebabacd","abc")); //  [0,6]

// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".


// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".


try {
  module.exports = findAnagrams;
} catch (error) {}