
        var points1 = [[1, 2], 3, [4, 3], [10, 50], [98, 100]];

        var points = [[1, 2], [3, 4],[5, 6]];

        function matrixRecursion(array, length = 0) {
            if (array.length === length) return 0;
            console.log(array[length]);

            // if (Array.isArray(array[length])) {
            //     matrixRecursion(array[length]);
            // }
            for(let row = 0; row < array.length; row++){

    
            matrixRecursion(array[row][col], col++);

            }

        }
        
    // console.log(matrixRecursion(points))
    
    
    
    function matrixIter(array) {
    
    for(let row = 0; row < array.length; row++){
  
        for(let col = 0; col < array[row].length; col++) {
            console.log(array[row][col]);
        }
    }
    
    }
    console.log()
    
    // console.log(matrixIter(points))
    

    function ArrayRecursive(arr) {
        let row = 0;
        let col= 0;
        if (row < arr.length) return;
        // if(col <= arr[row].length) return; 
        console.log(arr[row][col]);
        // row++;


        ArrayRecursive(arr[row])

        ArrayRecursive(arr[row][col])




        
      }

      console.log(ArrayRecursive(points))
