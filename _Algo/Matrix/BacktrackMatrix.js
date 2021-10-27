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

let matrix1 = [[0,0,0],
             [0,0,0]];

let matrix2 = [[0,0,0,0],
              [0,0,0,0],
              [0,0,0,0]]


function robotPaths(matrix) {

  function traverse(x,y) {
    //BC: Out of Bounds
    if(x<0||y<0||x>=matrix[0].length||y>=matrix.length) {
      return 0;
    }

    //BC: Already visited coordinate
    else if(matrix[y][x] === 1) {
      return 0;
    }

    //BC: Reached Target
    else if(x === matrix[0].length - 1 && y === matrix.length - 1) {
      return 1;
    }

    //Mark coordintate as visited
    matrix[y][x] = 1;

    //Initialize sum of all paths
    let sumPaths = 0;

    sumPaths += traverse(x+1, y); //right
    sumPaths += traverse(x-1, y); //left
    sumPaths += traverse(x, y+1); //down
    sumPaths += traverse(x, y-1); //up

    //Mark coordinate as unvisited
    matrix[y][x] = 0;

    return sumPaths;

  }

  return traverse(0,0);
}


console.log(robotPaths(matrix2));