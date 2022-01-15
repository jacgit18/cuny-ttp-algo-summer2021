// You are given a string s and an integer k. You can choose any character of the string and change it to any 
// other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.





const characterReplacement = (s,k) =>{
  let [windowStart, windowEnd] = [0, 0]
  let [currentLetter, nextLetter] = [s[windowStart], s[windowStart + 1]]
  let maxRepeatStringLength = 0;
  let repeatString = ""


  if(s.length === 0 || k < 1) return 0

  while(windowStart < s.length && k !== 0){

    if(currentLetter === nextLetter  ){
      repeatString += currentLetter;
      // repeatString.replace(repeatString.substring(''), currentLetter); 
      maxRepeatStringLength = Math.max(maxRepeatStringLength, repeatString.length);
      windowStart++;

    }
    // let nextLetter = s[windowStart + 1]
    // let currentLetter = s[windowStart]
    if(currentLetter !== nextLetter) {
      currentLetter = nextLetter
      // console.log(currentLetter, nextLetter)
      k--;
      windowEnd++;
    }

    // && windowStart === windowEnd
   

          // console.log(currentLetter, nextLetter)


  }
  return maxRepeatStringLength

}


console.log(characterReplacement("ABAB",2)); // 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.

try {
  module.exports = characterReplacement;
} catch (error) {}