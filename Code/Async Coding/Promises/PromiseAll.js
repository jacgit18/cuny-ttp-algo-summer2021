// When done correctly, promise composition is a great way to handle situations where asynchronous operations depend on each other or execution order matters. 
// What if we’re dealing with multiple promises, but we don’t care about the order? Let’s think in terms of cleaning again.

// For us to consider our house clean, we need our clothes to dry, our trash bins emptied, and the dishwasher to run. We need all of these tasks to complete 
// but not in any particular order. Furthermore, since they’re all getting done asynchronously, they should really all be happening at the same time!

// To maximize efficiency we should use concurrency, multiple asynchronous operations happening together. With promises, we can do this with the 
// function Promise.all().

// Promise.all() accepts an array of promises as its argument and returns a single promise. That single promise will settle in one of two ways:


// If every promise in the argument array resolves, the single promise returned from Promise.all() will resolve with an array containing the resolve value
//  from each promise in the argument array.

// If any promise from the argument array rejects, the single promise returned from Promise.all() will immediately reject with the reason that promise 
// rejected. This behavior is sometimes referred to as failing fast.

// We invoke Promise.all() with an array of three promises— the returned values from functions.
// We invoke .then() with a success handler which will print the array of resolved values if each promise resolves successfully.
// We invoke .catch() with a failure handler which will print the first rejection message if any promise rejects.

const {checkAvailability} = require('./library5.js');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

// Write your code below:

const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.'); 
const  checkBags = checkAvailability('bags', 'Favorite Supply Co.');

Promise.all([checkSunglasses, checkPants, checkBags])
  .then(onFulfill)
  .catch(onReject);

