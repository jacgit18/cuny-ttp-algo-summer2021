// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.



const checkInclusion = (s1, s2) =>{
   
  
}


let s1 = "ab", s2 = "eidbaooo", s3 = "eidboaoo"; // swap a with a for s3 would be false
console.time("Sliding")
console.log(checkInclusion(s1, s2)) //true one instance of ab = ba permutation a variation of a variation of the sring
console.timeEnd("Sliding")


console.time("Pointer")
console.log(checkInclusion(s1, s2))

console.timeEnd("Pointer")


try {
  module.exports = checkInclusion;
} catch (error) {}




