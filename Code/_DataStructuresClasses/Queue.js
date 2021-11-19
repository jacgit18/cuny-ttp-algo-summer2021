class Queue {
    constructor(){
      this.elements = [];
      this.top = 0;
      this.bottom = 0;
    }
  
    // enqueue = (e) => {
    //   this.elements.push(e);
    // };

        enqueue = (val) =>{
        this.elements[this.top] === val
        this.top++;
    }
  
      // Queue FIFO(First In First Out) - a line(queue)/ticket 
    queMaker = (waitingLine) => {
      if(waitingLine.length <= 1 ){ 
        this.elements.push(waitingLine[0]);
        // this.elements.enqueue(waitingLine[0]);
      }
      for (let i = 0; i < waitingLine.length; i++){
        this.elements.push(waitingLine[i]);
        // this.elements.enqueue(waitingLine[i]);

      }
    return this.elements;
  }
        dequeue = () =>{
        if (!this.isEmpty()){
         let removedElement = this.elements[this.bottom];
         delete this.elements[this.bottom];
         this.bottom++;
         return removedElement;

        }
    }
    
    // isEmpty = () => {
    //   return this.elements.length == 0;
    // };
    isEmpty = () =>{
        return this.size() === 0;
    }
    
    size = () =>{
        return this.top - this.bottom;
    }

    peek = () =>{
        return this.elements[this.bottom];
    }

  }


  let queue = new Queue();

  // queue.queMaker([2,3,1,4,3,2,6,5]);
  // let dequeue = queue.shift();
  queue.enqueue(11);
  queue.enqueue(21);
  queue.enqueue(31);

  console.log(queue)

  queue.dequeue();
  // queMaker(['new val'])
  console.log(queue.peek())


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
