/*
 *  Problem:  Robot Paths
 *
 *  Prompt:   Given a matrix of zeroes, determine how many unique paths exist
 *            from the top left corner to the bottom right corner
 *
 *  Input:    An Array of Array of Integers (matrix)
 *  Output:   Integer
 *
 *  Example:  matrix = [[0,0,0,0],
 *                      [0,0,0,0],
 *                      [0,0,0,0]]
 *
 *            robotPaths(matrix) = 38
 *
 *
 *            matrix = [[0,0,0],
 *                      [0,0,0]]
 *
 *            robotPaths(matrix) = 4
 *
 *  Note:     From any point, you can travel in the four cardinal directions
 *            (north, south, east, west). A path is valid as long as it travels
 *            from the top left corner to the bottom right corner, does not go
 *            off of the matrix, and does not travel back on itself
 */
// dont see any terminating condition 
let matrix1 = [[0,0,0],
             [0,0,0]];

let matrix2 = [[0,0,0,0],
              [0,0,0,0],
              [0,0,0,0]]

              let matrix3 = 
              [[0,0,0],
              [0,0,0],
              [0,0,0,]]


function robotPaths(matrix) {

  function traverse(Row,Col) {
    //BC: Out of Bounds
    // matrix[0].length proably num of rows and matrix.length is column num
   
    let maxRowLength = matrix[0].length; 
    let maxColLength = matrix.length; 
    let OutofBoundsCheck = Row<0||Col<0||Row>=matrix[0].length||Col>=matrix.length;
    // const AlreadyVisitedCoordinate = (matrix[Col][Row] === 1);
    let TargetReached = Row === maxRowLength - 1 && Col === maxColLength - 1;
    
    if(OutofBoundsCheck) {

      return 0;
    }

    //BC: Already visited coordinate
      else if(matrix[Col][Row] === 1) {
      return 0;
    }

    //BC: Reached Target
    else if(TargetReached) {
      return 1;
    }

    

    //Mark coordintate as visited
    // matrix[Row][Col] = 1;
    matrix[Col][Row] = 1;
    


    //Initialize sum of all paths
    let sumPaths = 0;

    sumPaths += traverse(Row+1, Col); //right
    sumPaths += traverse(Row-1, Col); //left
    sumPaths += traverse(Row, Col+1); //down
    sumPaths += traverse(Row, Col-1); //up

    //Mark coordinate as unvisited
    matrix[Col][Row] = 0;


    return sumPaths;

  }

  return traverse(0,0);
}


console.log(robotPaths(matrix2));