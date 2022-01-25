// Problem Statement 

// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] 
// (si < ei), determine if a person could attend all meetings.

//
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

//   print_interval() {
//     process.stdout.write(`[${this.start}, ${this.end}]`);
//   }
}

const can_attend_all_appointments = (intervals) => {
  console.log(intervals)

  // return false;
};

let testCaseOne = [[0,30],[5,10],[15,20]]; // false
let testCaseTwo = [[7,10],[2,4]]; // true



// console.log(`Can attend all appointments: ${can_attend_all_appointments([
//   new Interval(0, 30),
//   new Interval(5, 10),
//   new Interval(15, 20),
// ])}`);

// console.log(`Can attend all appointments: ${can_attend_all_appointments([
//   new Interval(7, 10),
//   new Interval(2, 4),
// ])}`);


console.log(`Can attend all appointments: ${can_attend_all_appointments(testCaseOne)}`);

console.log(`Can attend all appointments: ${can_attend_all_appointments(testCaseTwo)}`);




// Solution
// -----
// function can_attend_all_appointments(intervals) {
//   intervals.sort((a, b) => a.start - b.start);
//   for (i = 1; i < intervals.length; i++) {
//     if (intervals[i].start < intervals[i - 1].end) {
//       // please note the comparison above, it is "<" and not "<="
//       // while merging we needed "<=" comparison, as we will be merging the two
//       // intervals having condition "intervals[i][start] === intervals[i - 1][end]" but
//       // such intervals don't represent conflicting appointments as one starts right
//       // after the other
//       return false;
//     }
//   }
//   return true;
// }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(N*logN), where ‘N’ is the total number of appointments. Though we are iterating the intervals only once, our algorithm will take O(N * logN) since we need to sort them in the beginning.

// Space complexity #
// The space complexity of the above algorithm will be O(N), which we need for sorting. For Java, Arrays.sort() uses Timsort, which needs O(N) space.
