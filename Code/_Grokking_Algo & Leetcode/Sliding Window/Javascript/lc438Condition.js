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
 
 let res = [];
 let left = 0;
 let right = 0;
 for (right;right<s.length;right++) {
     if (hash[s[right]]!=null) hash[s[right]]--;
     if (hash[s[right]]==0) uniqueChars--;
     if (uniqueChars==0) res.push(left);
     if (right - left + 1 == p.length) {
         if (hash[s[left]]!=null) hash[s[left]]++;
         if (hash[s[left++]]==1) uniqueChars++;
     }
 }
 return res;
};


console.log(findAnagrams("cbaebabacd","abc")); //  [0,6]

