class Interval {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  
    print_interval() {
      process.stdout.write(`[${this.start}, ${this.end}]`);
    }
  }

function insert(intervals, new_interval) {
  let merged = [],
    i = 0;

  // skip and add to output) all intervals that come before the 'new_interval'
  while (i < intervals.length && intervals[i].end < new_interval.start) {
    merged.push(intervals[i]);
    i += 1;
  }

  // merge all intervals that overlap with 'new_interval'
  while (i < intervals.length && intervals[i].start <= new_interval.end) {
    new_interval.start = Math.min(intervals[i].start, new_interval.start);
    new_interval.end = Math.max(intervals[i].end, new_interval.end);
    i += 1;
  }

  // insert the new_interval
  merged.push(new_interval);

  // add all the remaining intervals to the output
  while (i < intervals.length) {
    merged.push(intervals[i]);
    i += 1;
  }

  return merged;
}


process.stdout.write('Intervals after inserting the new interval: ');
// let result = insert(
//   [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
//   new Interval(4, 6)
// );

let result = insert(
  [new Interval(1, 3), new Interval(6, 9)],
  new Interval(2, 5)
);

let resultTwo = insert(
  [new Interval(1, 2), new Interval(3, 5), new Interval(6, 7),  new Interval(8, 10), new Interval(12, 16)],
  new Interval(4, 8)
);


for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();
for (i = 0; i < resultTwo.length; i++) {
  resultTwo[i].print_interval();
}