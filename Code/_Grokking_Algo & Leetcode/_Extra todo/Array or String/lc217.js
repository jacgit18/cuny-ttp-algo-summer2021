let theNum = [1, 2, 3, 1];


const containsDuplicate = (nums) => {

let numbers = new Set();
for (let num of  nums){
        if (!numbers.has(num)){
            // adding numbers not in set from given array
            console.log(numbers.add(num))
    
        }
        else {
            return true;
        }

}
return false;
}

containsDuplicate(theNum);



    