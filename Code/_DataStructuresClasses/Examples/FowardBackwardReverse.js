// 1. LinkedLists
// Node class for a linked list node
const linkSetter = require("../DataStrucFactoryInterview");
const linkedGetter = new linkSetter();


  let array1 = [1,5,7,10]
  let linkedList = linkedGetter.ArrayLinkListDeserialize(array1)
  
  
  
  let printFoward = (node) =>{
  let current = node;
  while(current!== null){
      console.log(current.value)
      current = current.next  // equvivalent to i++ in a loop
  
    }
  }
  
  printFoward(linkedList);
  console.log()
  
  const printBackward = (node) =>{
    // let foward =  printFoward = (node);
    // // use stack with push pop to get values or something
    // console.log(foward)

    if(node === null) return;
    // console.log(node.value); // foward

    printBackward(node.next);
  
    console.log(node.value); // backward

  
  }
  
  printBackward(linkedList);
  console.log()

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
  
  console.log(reverse(linkedList)) // this actually moves values as opposed to printing backwards
  
  // reverse(linkedList)