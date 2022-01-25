const LinkedList = require("../../../_DataStructuresBuiltUpClasses/DataStrucFactoryInterview");
const myLK = new LinkedList();

let LinkListArray = [3,2,0,-4];
// let head = myLK.ArrayLinkListDeserialize(LinkListArray);
// Problem Statement #

// Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

class ListNode {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

const ArrayLinkListDeserialize = (arr) =>{
  if (arr.length === 0) { return null; }
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    // Path − Path represents a sequence of edges between the two vertices. In the following example, ABCD represents a path from A to D
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

let head = ArrayLinkListDeserialize(LinkListArray);



const find_cycle_start = (head) =>{

  let slow = head,
  fast = head;

while(fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;

  if(slow === fast) {
      break;
  }
}
// if(fast === null) {
//   fast = head.next;
// }
// if fast pointer reaches NULL, that means no cycle detected
if(!fast || !fast.next) {
  // fast = head.next;

  return null;
}
// let curr = head;
while(slow !== fast) {
  slow = curr.next;
  fast = fast.next;
}
// console.log(curr.next.next)
return curr;

};

try{
  console.log(  find_cycle_start(head))

}catch(e){

}


// head = new Node(1)
// head.next = new Node(2)
// head.next.next = new Node(3)
// head.next.next.next = new Node(4)
// head.next.next.next.next = new Node(5)
// head.next.next.next.next.next = new Node(6)

// head.next.next.next.next.next.next = head.next.next
// console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

// head.next.next.next.next.next.next = head.next.next.next
// console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

// head.next.next.next.next.next.next = head



// Solution
// -----
// function find_cycle_start(head) {
//   cycle_length = 0;
//   // find the LinkedList cycle
//   let slow = head,
//     fast = head;
//   while ((fast !== null && fast.next !== null)) {
//     fast = fast.next.next;
//     slow = slow.next;
//     if (slow === fast) { // found the cycle
//       cycle_length = calculate_cycle_length(slow);
//       break;
//     }
//   }
//   return find_start(head, cycle_length);
// }


// function calculate_cycle_length(slow) {
//   let current = slow,
//     cycle_length = 0;
//   while (true) {
//     current = current.next;
//     cycle_length += 1;
//     if (current === slow) {
//       break;
//     }
//   }
//   return cycle_length;
// }


// function find_start(head, cycle_length) {
//   let pointer1 = head,
//     pointer2 = head;
//   // move pointer2 ahead 'cycle_length' nodes
//   while (cycle_length > 0) {
//     pointer2 = pointer2.next;
//     cycle_length -= 1;
//   }
//   // increment both pointers until they meet at the start of the cycle
//   while (pointer1 !== pointer2) {
//     pointer1 = pointer1.next;
//     pointer2 = pointer2.next;
//   }

//   return pointer1;
// }

// -----

// Time Complexity #
// As we know, finding the cycle in a LinkedList with ‘N’ nodes and also finding the length of the cycle requires O(N). Also, as we saw in the above algorithm, we will need O(N) to find the start of the cycle. Therefore, the overall time complexity of our algorithm will be O(N).

// Space Complexity #
// The algorithm runs in constant space O(1).
