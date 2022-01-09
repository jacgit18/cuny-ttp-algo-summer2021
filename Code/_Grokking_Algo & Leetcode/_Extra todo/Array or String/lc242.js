// Given a string s, return true if it is a palindrome, or false otherwise.

// short version
// var isAnagram = (s, t) => s.split('').sort().join('') === t.split('').sort().join('');

// Build sorted array (char[] ) of s and t
// Compare poped element from a and b array
// After loop return true if there are no remaining in a or b else return false

const isAnagram = (s, t) =>{
  const a = s.split('').sort(),
        b = t.split('').sort();
    while (a.length && b.length) {
        if (a.pop() !== b.pop()) {
            return false;
        }
    }
    return a.length || b.length ? false : true;
}


console.log(isAnagram("anagram", "nagaram" )); // returns true 

try {
  module.exports = isAnagram;
} catch (error) {}