class ListNode {
    constructor(value = null, length) {
      this.nodeProps = {
          value: value,
          length: length
        };
        // this.value = value
          
      this.next = null;
    }
  }


      
 const ArrayLinkListDeserialize = (arr) =>{
    if (arr.length === 0) { return null; }
    // let head = new ListNode(arr[0]);
    // let current = head;
    let head = [];
    for (let i = 0; i < arr.length; i++) {
    head.push( new ListNode(arr[i]));
    //   head = head.next;
    //   if(head.next === null){
    //     head.next = null;
    //   }
    }
    return head;
  }


  let nodes = [1,2,3,4,5];

let newNodeArray =  ArrayLinkListDeserialize(nodes);

console.log(newNodeArray);