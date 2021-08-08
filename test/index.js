/* 👉 SEE THE README FOR INSTRUCTIONS */

const data = require('./data')

// access id and name and create object property with name of identifier(name/id) value and a value
// of nested object with the  identifier(name/id) value and other properties

// also convert the arrays to objects


//   The output should be an object where any nested arrays have 
//   been converted into objects (such that the keys for the objects 
//   are either the id or name values).

const nestedArraysToObjects = (obj, identifier) => {
  

  // TEST CASES
  // Object.assign({}, typeof obj.families);
  // Object.assign({}, obj.families);


  // for (let property in obj) {
  //   if (obj.hasOwnProperty(property)) {
  //     console.log(property)
  //   }
  // }

  Object.entries(obj).forEach(
    ([key, value]) => {
      if (typeof(obj[value]) === typeof([]) ) {
       newdata = Object.assign({}, value);
       console.log(newdata)
    }

    }

    
);


}


/*
  👉 HIT 'RUN' TO TEST OUT YOUR CODE IN THE CONSOLE
  (expected outputs for these use cases are in the readme)
*/
console.log(JSON.stringify(nestedArraysToObjects(data, "id"), null, 2))
// console.log(JSON.stringify(nestedArraysToObjects(data, "name"), null, 2))


console.log(`-------Edge cases--------`)
// console.log(JSON.stringify(nestedArraysToObjects(data, "name"), null, 2))