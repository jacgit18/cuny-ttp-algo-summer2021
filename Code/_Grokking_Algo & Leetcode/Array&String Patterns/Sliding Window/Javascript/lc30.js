// You are given a string s and an array of strings words of the same length. 
// Return all starting indices of substring(s) in s that is a concatenation 
// of each word in words exactly once, in any order, and without any intervening characters.

// You can return the answer in any order.



const findSubstring = (letters, words) =>{
   
  
  }
  
  
  let s = "barfoothefoobarman", words = ["foo","bar"];
  console.time("Sliding")
  console.log(findSubstring(s, words))
  console.timeEnd("Sliding")
  
  
  console.time("Pointer")
  console.log(findSubstring(s, words))

  console.timeEnd("Pointer")
  
  
  try {
    module.exports = findSubstring;
  } catch (error) {}
  
  
  
 
  