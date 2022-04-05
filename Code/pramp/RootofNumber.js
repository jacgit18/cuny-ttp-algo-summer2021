function root(x, n) {
  
    //const result = (n % 2  === 0) ? n : n;

    if (x % n  === 0){
       
        return Math.sqrt(x)
      }
 
  
    if (n % 2  === 0){
       return Math.sqrt(x) ;
  
    } else{
        return Math.cbrt(x).toFixed(3);

        //    return Math.pow(x/n, n) // how to get 1.913 with 7
             
            //return x/x*n
      
    }
    
  }
  
  
  console.log(root(7, 3));

  console.log(root(9, 2));

  console.log(root(16, 4)); // should be 2 since 2*2*2*2

  console.log(root(27, 3)); // should be 3 since 3*3*3

  console.log();

  

  function rooTwo(x, n){
    if (x == 0){
        return 0
    }

    let lowerBound = 0
    let upperBound = Math.max(1, x)
    let approxRoot = (upperBound + lowerBound) / 2

    while (approxRoot - lowerBound >= 0.001){
        if (Math.pow(approxRoot, n) > x){
            upperBound = approxRoot

        }
    else if (Math.pow(approxRoot, n) < x){
        lowerBound = approxRoot

    }
    else
        break

    approxRoot = (upperBound + lowerBound) / 2
    }
     

    return approxRoot

    
  }
   


    console.log(rooTwo(7, 3));
    console.log(rooTwo(9, 2));
    console.log(rooTwo(16, 4));
