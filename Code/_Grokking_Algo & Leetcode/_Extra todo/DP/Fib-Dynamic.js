//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
let calculations = 0;
// function fibonacci(n) { //O(2^n)
  
//   if (n < 2) {
//     return n
//   }
//   return fibonacci(n-1) + fibonacci(n-2);
// }

// top down
function fibonacciMaster() { //O(n)
  let cache = {};
  return function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] =  fib(n - 1) + fib(n - 2);

        


        return cache[n];
      }
    }
    
  }
}

// no closure
  let cache = {};
   function fib(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        // console.log(n);
        cache[n] =  fib(n - 1) + fib(n - 2);

        // console.trace(cache[n] = fib(n-1) + fib(n-2))
        // console.log(cache);
        // console.log(cache[n]);


        return cache[n];
      }
    }
  }


// bottom up Iterative
// function fibonacciMaster2(n) {
//   let answer = [0,1];
//   for ( let i = 2; i <= n; i++) {
//     answer.push(answer[i-2] + answer[i-1]);
//   }
//   return answer.pop();
// }

// O(2^n) Exponential time
function fibonacciRecursive(n) {
  if (n < 2){
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive (n - 2);
  // return console.log(fibonacciRecursive(n - 1) + fibonacciRecursive (n - 2));

}

const fasterFib = fibonacciMaster(); // stores return since

//  using clousure/encapulations

// console.log('Slow', fibonacci(35))
// console.log('DP', fasterFib(10));

// console.time("time one")
console.log('DP', fasterFib(6));
console.log(fib(6))

// console.timeEnd("time one")

console.time("time two")
console.log('DP2', fibonacciMaster2(6));
console.timeEnd("time two")

console.log('we did ' + calculations + ' calculations');

