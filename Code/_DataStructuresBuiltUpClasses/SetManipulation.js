let animals = new Set();

animals.add('🐷');
animals.add('🐼');
animals.add('🐢');
animals.add('🐿');
console.log(animals.size); // 4
animals.add('🐼');
console.log(animals.size); // 4

console.log(animals.has('🐷')); // true
animals.delete('🐷');
console.log(animals.has('🐷')); // false

animals.forEach(animal => {
  console.log(`Hey ${animal}!`);
});

// Hey 🐼!
// Hey 🐢!
// Hey 🐿!

animals.clear();
console.log(animals.size); // 0

// Using Set constructor & forEach()
let emoji = ['🐷', '🐢', '🐷', '🐷'];
let myAnimals1 = new Set(emoji);
let myAnimals2 = new Set();

myAnimals2.add(['🐨', '🐑']);
myAnimals2.add({ name: 'Rud', type: '🐢' });
console.log(myAnimals2); 

myAnimals1.forEach(animal => {
  console.log('animal one set ', animal);
});

let myAnimals3 = new Set();


emoji.forEach(animal => myAnimals3.add(emoji));
  console.log('test  1 ', myAnimals3);

  let myAnimals4 = new Set();

// reduce
  emoji.reduce((_, e) => myAnimals4.add(e), null);
 
console.log('animal four set ', myAnimals4);

// map 
let myAnimals5 = new Set();


emoji.map(item => myAnimals5.add(myAnimals5));
console.log('animal five set ', myAnimals5);


let people = [
  { name: 'Josh', age: 15 },
  { name: 'Mark', age: 25 },
  { name: 'Tim', age: 20 },
  { name: 'Bob', age: 30 }
];

let set = new Set(people.map(item => item.name));
console.log('set six ', set);



console.log('Only unique characters will be in this set.'.length); // 43
let sentence = new Set('Only unique characters will be in this set.');
console.log(sentence.size); // 18



let moreAnimals = new Set(['🐺', '🐴', '🐕', '🐇']);

for (let animal of moreAnimals) {
  console.log(`Howdy ${ animal }`);
}

// Sets also have the keys and values methods, with keys being an alias for values,
// so both methods do exactly the same thing. Using either of these methods returns 
// a new iterator object with the values of the set in the same order in which they were 
// added to the set. Here’s an example:

let partyItems = new Set(['🍕', '🍾', '🎊']);
let items = partyItems.values();

console.log(items.next());
console.log(items.next());
console.log(items.next());
console.log(items.next().done);
