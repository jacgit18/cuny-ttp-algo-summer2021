const countSubstrings = (subStringEx) => {

  const helper = (low, high) => {
    while (
      low >= 0 &&
      high <= subStringEx.length &&
      subStringEx[low] === subStringEx[high]
    ) {
      count++;
      low--;
      high++;
    }
  };
  
  let count = 0;
  for (let start = 0; start < subStringEx.length; start++) {
    helper(start, start);
    helper(start, start + 1);
  }
  return count;
};

console.log(countSubstrings("abc"));
console.log(countSubstrings("aaa"));

try {
  module.exports = countSubstrings;
} catch (error) {}
