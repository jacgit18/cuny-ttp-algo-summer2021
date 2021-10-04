// 1. LinkedLists
// Node class for a linked list node
class ListNode {
    constructor(value = null) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Generate a linked list from an array
  function generateList(arr) {
    if (arr.length === 0) { return null; }
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
    return head;
  }
  
  let array1 = [1,5,7,10]
  let linkedList = generateList(array1)
  // console.log(linkedList)
  
  
  
  let printFoward = (node) =>{
  let current = node;
  while(current!== null){
      console.log(current.value)
      current = current.next  // equvivalent to i++ in a loop
  
    }
  }
  
  // printFoward(linkedList);
  
  const printBackward = (node) =>{
    // let foward =  printFoward = (node);
    // // use stack with push pop to get values or something
    // console.log(foward)
  
    
  
  }
  
  printBackward(linkedList);
  
  const reverse = (node) =>{
    if(node === null || node < 0) return null
    let current = node;
    let last = null;
  
    while(current!== null){
      let next = current.next;
      current.next = last;
      last = current;
      current = next
  
    }
  
    return last
  
  }
  
  // console.log(reverse(linkedList))
  
  reverse(linkedList)