
// Given a string expression of numbers and operators, return all possible results from computing 
// all the different possible ways to group numbers and operators. You may return the answer in any order.

/* 

Problem/Notes:


I/O:

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


 Functions:





 
 
*/
const diffWaysToCompute = (expression)=>{
    
};


console.log(diffWaysToCompute("2-1-1")); // [0,2]
console.log(diffWaysToCompute("2*3-4*5")); // [-34,-14,-10,-10,10]





// Example 1:

// Input: expression = "2-1-1"
// Output: [0,2]
// Explanation:
// ((2-1)-1) = 0 
// (2-(1-1)) = 2
// Example 2:

// Input: expression = "2*3-4*5"
// Output: [-34,-14,-10,-10,10]
// Explanation:
// (2*(3-(4*5))) = -34 
// ((2*3)-(4*5)) = -14 
// ((2*(3-4))*5) = -10 
// (2*((3-4)*5)) = -10 
// (((2*3)-4)*5) = 10