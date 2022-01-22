const findAnagrams = (s, p) => {
    let hash = {},  uniqueChars = 0;
 for (let c of p) {
     if (hash[c]==null) {
         uniqueChars++;
         hash[c] = 1;
     } else {
         hash[c]++;
     }
 }
 // === considers type & value == considers only value
 let res = [];
 let left = 0;
 let right = 0;
 let count = 0;
 for (right;right<s.length;right++) {
     if (hash[s[right]]!==null) hash[s[right]]--;
     if (hash[s[right]]===0) uniqueChars--;
     if (uniqueChars===0) res.push(left);
     if (right - left + 1 === p.length) {
         if (hash[s[left]]!==null) hash[s[left]]++;
        //  console.log(count++, " sec " ,hash[s[left++]])
        //  console.log(count++, " sec " ,s[left++])
        //  console.log(count++, " sec " ,s[left])
        //  console.log(count++, " sec " ,left++)



         if (hash[s[left++]]===1) uniqueChars++;
     }
 }
 return res;
};


console.log(findAnagrams("cbaebabacd","abc")); //  [0,6]
console.log(findAnagrams("abab","ab")); //  [0,1,2]

