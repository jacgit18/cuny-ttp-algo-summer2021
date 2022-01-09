// Given a string s, return true if it is a palindrome, or false otherwise.

// short version
// var isAnagram = (s, t) => s.split('').sort().join('') === t.split('').sort().join('');

// Build sorted array (char[] ) of s and t
// Compare poped element from a and b array
// After loop return true if there are no remaining in a or b else return false

const isAnagram = (s, t) =>{
  let hash = {};
  for (let char of s) {
      hash[char] = hash[char]+1||1;
  }
  for (let char of t) {
      if (!hash[char]) return false;
      hash[char]--;
      if (hash[char] == 0) delete hash[char];
  }
  return [...Object.keys(hash)].length==0
}


console.log(isAnagram("anagram", "nagaram" )); // returns true 

try {
  module.exports = isAnagram;
} catch (error) {}