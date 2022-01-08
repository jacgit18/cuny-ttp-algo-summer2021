// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


const isValid = (s) =>{
  let stack = []

  for (let i = 0; i < s.length; i++) {
      
      if(s[i] === "{" || s[i] === "[" || s[i] === "(") {
          stack.push(s[i])
      } 
      
      if (s[i] === "}") {
          if (stack.pop() === "{") {
              
          } else return false
      }
      
      if (s[i] === "]") {
          if (stack.pop() === "[") {
              
          } else return false
      }
      
      if (s[i] === ")") {
          if (stack.pop() === "(") {
              
          } else return false
      }
  }
  if (stack.length === 0) {
      return true
  } else return false
}


console.log(isValid("()"));

try {
  module.exports = isValid;
} catch (error) {}