




/**
Find last word of a string and return its length

check for spaces before the last word 

iterate through string from end and decrement until we hit a space 

then we return word that was before white space


CRUD

as were reading the substring from the end 


 "   fly me   to   the moon  "
 
 we can trim the whitespace from both sides
 "fly me   to   the moon"
  "fly me   to   the moon"
                    ^
if current letter has a space before it at this at current iteration check length of word from current index to end of string

Create with characters that we are decrementing from



**/
var lengthOfLastWord = function(s) {
    if(s.length <= 1){
        return s.length
        }



    let lastLetter =s.trim();

    let res = [];
    let end = lastLetter.length -1
   
        while(end >= 0){
            
            if(lastLetter[end] !== " "){
            
            res.push(lastLetter[end])
            end--;

               }
               else{
                   break
               }
           
        }
    
    
    return res.length
        
    };




    // console.log(    lengthOfLastWord( "a")
    // )

    // console.log(    lengthOfLastWord( "")
    // )

    // console.log(    lengthOfLastWord( "Hello World")
    // )

    
    // console.log(    lengthOfLastWord( "luffy is still joyboy")
    // )



    var lengthOfLastWordVer = function(s) {
        // 
        return s.trim().split(" ").pop().length;
            
        };



        // console.time('testOne')
        // console.log(    lengthOfLastWord("   fly me   to   the moon  ")  )
        // console.timeEnd('testOne')


        // console.time('testTwo')

        // console.log(    lengthOfLastWordVer("   fly me   to   the moon  ")  )
        // console.timeEnd('testTwo')


