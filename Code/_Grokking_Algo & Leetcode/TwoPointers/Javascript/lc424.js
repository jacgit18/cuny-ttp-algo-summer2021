// You are given a string s and an integer k. You can choose any character of the string and change it to any 
// other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.


const characterReplacementOne = (s,k) =>{
  let [windowStart, windowEnd] = [0, 0]
  let [currentLetter, nextLetter] = [s[windowStart], s[windowStart + 1]]
  let maxRepeatStringLength = 0;
  let repeatString = ""


  if(s.length === 0 || k < 1) return 0
let count = 0;
  while(windowStart < s.length ){
    if(k === 0){
      return maxRepeatStringLength

    }
    
    if(currentLetter === nextLetter  ){
      repeatString += currentLetter;
      // repeatString.replace(repeatString.substring(''), currentLetter); 
      maxRepeatStringLength = Math.max(maxRepeatStringLength, repeatString.length);
      windowStart++;

    }
   
    if(currentLetter !== nextLetter) {
   
      currentLetter = nextLetter
      // console.log(currentLetter, nextLetter)
      k--;
      windowEnd++;
      
    }
  }
  // return maxRepeatStringLength

}


console.log(characterReplacement("ABAB",2)); // 4
console.log(characterReplacement("AABABBA",1)); // 4
AABABBA
AABBBBA


try {
  module.exports = characterReplacement;
} catch (error) {}


const length_of_longest_substring = function (s, k) {

  let windowStart = 0, maxLength = 0, charCount = {}, maxRepeat = 0;
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
      const rightChar = s[windowEnd];

      if (!(rightChar in charCount)) {
          charCount[rightChar] = 0;
      }

      charCount[rightChar] += 1;
      maxRepeat = Math.max(maxRepeat, charCount[rightChar]);

      if ((windowEnd - windowStart + 1 - maxRepeat) > k) {
          const leftChar = s[windowStart];
          charCount[leftChar] -= 1;
          windowStart += 1;
      }
      maxLength = Math.max(windowStart, windowEnd - windowStart + 1);
  }
  return maxLength;
}



// 74 steps pointer approach 72 steps
console.time("Sliding")
// console.log(length_of_longest_substring("ABAB",2)); // 4
console.log(length_of_longest_substring("AABABBA",1)); // 4
console.timeEnd("Sliding")




