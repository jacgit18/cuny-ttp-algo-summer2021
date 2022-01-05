// const countSubstrings = (subStringEx) => {

//   const helper = (low, high) => {
//     while (
//       low >= 0 &&
//       high <= subStringEx.length &&
//       subStringEx[low] === subStringEx[high]
//     ) {
//       count++;
//       low--;
//       high++;
//     }
//   };
  
//   let count = 0;
//   for (let start = 0; start < subStringEx.length; start++) {
//    let callOne = helper(start, start);// odd length
//    let callTwo = helper(start, start + 1);// even length
//   }
//   return count;
// };


const countSubstrings = (s) => {
	let total = 0;

	for (var i = 0; i <= s.length - 1; i++) {
		// Single letter to fan out from
		total += fanOut(i, i, s);
		// Double letter to fan out from
		total += fanOut(i, i + 1, s);
	}

	return total;
};

const fanOut = (left, right, s) => {
	let count = 0;

	// Fanning out
	while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
		count++;
		left--;
		right++;
	}

	return count;
};

console.log(countSubstrings("abc"));
console.log(countSubstrings("aaa"));

try {
  module.exports = countSubstrings;
} catch (error) {}
