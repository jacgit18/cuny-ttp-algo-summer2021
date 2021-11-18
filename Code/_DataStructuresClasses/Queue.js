class Queue {
    constructor(){
      this.elements = [];
      this.top = 0;
      this.bottom = 0;
    }
  
    enqueue = (e) => {
      this.elements.push(e);
    };
  
      // Queue FIFO(First In First Out) - a line(queue)/ticket 
 queMaker = (waitingLine) => {
    if(waitingLine.length <= 1 ){ 
      this.elements.push(waitingLine[0]);
    }
    for (let i = 0; i < waitingLine.length; i++){
      this.elements.push(waitingLine[i]);
    }
    return this.elements;
  }
  
    
    dequeue = () => {
      return this.elements.shift();
    };
    
    isEmpty = () => {
      return this.elements.length == 0;
    };
    
   peek = () => {
      return !this.isEmpty() ? this.elements[0] : undefined;
    };

//     enqueue = (val) =>{
//         this.storage[this.top] === val
//         this.top++;
//     }

//     dequeue = () =>{
//         if (!this.isEmpty()){
//          let removedElement = this.storage[this.bottom];
//          delete this.storage[this.bottom];
//          this.bottom++;
//          return removedElement;

//         }
//     }

//     peekaboo = () =>{
//         return this.storage[this.bottom];
//     }

//     size = () =>{
//         return this.top - this.bottom;
//     }

//     isEmpty = () =>{
//         return this.size() === 0;
//     }
  }


  let queue = new Queue();

  queue.queMaker([2,3,1,4,3,2,6,5]);
  // let dequeue = queue.shift();
  console.log(queue)
  queue.dequeue();
  // queMaker(['new val'])
  console.log(queue)


//   const mycon = new myque();
// console.log(`The queue initial size is ${mycon.size()} `);
// console.log(`The queue is initially empty  ${mycon.isEmpty()} `);
// mycon.enqueue('a');
// mycon.enqueue('b')


// mycon.enqueue('c');
// console.log(`The queue initial size is ${mycon.size()} `);
// console.log(`The next element to be removed is ${mycon.peekaboo()} `); // lets you know what will be removed why undefiend

// mycon.dequeue();
// console.log(`The queue initial size is ${mycon.size()} `);
// console.log(`The next element to be removed is ${mycon.peekaboo()} `); 
