// 1 1 0 0           2
// 0 0 1 0           1
// 1 1 0 0           3
// 1 0 0 0  

// 3


const matrix = (matrix) =>{
  
    // let counter= {};
    
  let counts = {}
    
      
  for(let outerIndex = 0; outerIndex < matrix.length; outerIndex++ ){
        // console.log(matrix[0]);
    // row scope
    for(let i = 0; i<matrix.length; i++) {
      counts[matrix[outerIndex + 1]] = 0
    }
    
    console.log(counts)
    
    for(let innerIndex = 0; innerIndex < matrix.length; innerIndex++ ){
      // console.log(matrix[outerIndex][innerIndex] === matrix[outerIndex + 1][innerIndex + 1]);
      
  
        
        if(outerIndex + 1 === matrix.length ){
        break
        
        
        } else {
        
        if(matrix[outerIndex][innerIndex] === matrix[outerIndex + 1][innerIndex + 1] ){
          // let maxCluster = math.max()      
        }
        }
            // column scope
  
        //     counter= {
  //     row(0), col(0)
      
  //     }
          // console.log(matrix[1][0]);
  
  
  }
    
    
  
  
  }
  
  
  }
  
  
  let matrixVal = [[1,1,0,0],
                [0,0,1,0],
                [1,1,0,0],
                [1,0,0,0],
               ];
  
  console.log(matrix(matrixVal));
  // matrix(matrixVal);
  
  
  