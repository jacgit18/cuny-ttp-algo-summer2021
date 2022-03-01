// You are given a string s and an array of strings words of the same length. 
// Return all starting indices of substring(s) in s that is a concatenation 
// of each word in words exactly once, in any order, and without any intervening characters.

// You can return the answer in any order.

/* 

Problem/Notes:
get every variation of the concatenated string
divide word array length by word length 

I/O: string and array of strings words of the same length/ 
     return array of starting indices of substring in string that are concantenations

EdgeCase:{

}

Naïve-Approach:


Constraints:


Variables:


Control flow
         TestCase: {

          Pre-Condition:

         Conditions:

         Termination-Conditions:

         Post-Conditions:

}        switch case()



 Steps:
 1.
 2.


To Leverage & Rule out

 DataStructure&Algo :


 Functions: string method to convert array to string 





 
 
*/

const findSubstring = (letters, words) =>{

let result = [];
// console.log(letters.length)
// let i = words[0].length -1 ;
// console.log(i)

// if(words[0].length){


// for(i; i<letters.length; i+=1){
//   // if(letters.length){

//   // }
    
//   console.log(letters[i],i);
//   let j =0;
//   j++;

//   if(words[0].endsWith(letters[i])){
//     i+= 3
//     // console.log(letters[i], "test")

//   } else {
//     j++;

//   }
//   if(words[j].endsWith(letters[i])){
//     i+=3
//   }
// }
// }
  // return [letters.length, words[0].length]
let ArrayOne = [];
let ArrayTwo = [];

  for(let i=0; i<words.length-1; ++i){
    // if(words.length -1 === 2 ){
      let last = words[i-1];
      console.log(last);
      let currWord = words[i].concat(words[i+1]);
      let nextWord = words[i+1].concat(words[i])    
      ArrayOne.push(currWord,nextWord)
    // }
  
  //   let temp = words[i]   
  //   let tempNext = words[i+1]
  //  ArrayOne.push(tempNext.concat(temp))



    // console.log(ArrayOne)

  }

  return ArrayOne

  }
  
  
  console.time("Sliding")
  console.log(findSubstring("barfoothefoobarman", ["foo","bar"])) // [0,9]
  // console.log(findSubstring("wordgoodgoodgoodbestword",  ["word","good","best","word"])) // []
  console.log(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"])) // [6,9,12]

  console.timeEnd("Sliding")
  
  
  // console.time("Pointer")
  // console.log(findSubstring(s, words))

  // console.timeEnd("Pointer")
  
  
  try {
    module.exports = findSubstring;
  } catch (error) {}
  
  
  
 
  