class QNode
{
	constructor(data, prev)
	{
		this.data = data;
		this.next = null;
		this.prev = prev;
	}
}
class MyQueue
{
	constructor()
	{
		this.front = null;
		this.rear = null;
	}
	// Add a node into queue
	enqueue(data)
	{
		// Create a new node
		var node = new QNode(data, this.rear);
		if (this.front == null)
		{
			// When adding a first node of queue
			this.front = node;
			this.size = 1;
		}
		else
		{
			this.rear.next = node;
			this.size = this.size + 1;
		}
		this.rear = node;
	}
	isEmpty()
	{
		if (this.size == 0)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	// Get a front element of queue
	peek()
	{
		if (this.isEmpty() == true)
		{
			console.log("\n Empty Queue");
			// When stack is empty
			return -1;
		}
		else
		{
			return this.front.data;
		}
	}
	isSize()
	{
		return this.size;
	}
	// Remove a front node of a queue
	dequeue()
	{
		if (this.isEmpty() == true)
		{
			// When queue is empty
			return -1;
		}
		else
		{
			var data = this.peek();
			if (this.front == this.rear)
			{
				// When queue contains only one node
				this.rear = null;
				this.front = null;
			}
			else
			{
				this.front = this.front.next;
				this.front.prev = null;
			}
			// Change queue size
			this.size--;
			// Delete node value
			return data;
		}
	}
	// Print elements of queue
	printQdata()
	{
		var node = this.front;
		console.log("\n Queue Element");
		while (node != null)
		{
			process.stdout.write(" " + node.data);
			node = node.next;
		}
		console.log();
	}
}

function main()
{
	var q = new MyQueue();
	// Add queue element
	q.enqueue(1);
	q.enqueue(2);
	q.enqueue(3);
	q.enqueue(4);
	q.enqueue(5);
	q.printQdata();

    console.log(q)

	// process.stdout.write(" Size : " + q.isSize());
	// // Remove queue element
	// process.stdout.write("\n Dequeue Node : " + q.dequeue());
	// process.stdout.write("\n Dequeue Node : " + q.dequeue());
	// process.stdout.write("\n Dequeue Node : " + q.dequeue());
	// q.printQdata();
	// process.stdout.write(" Size : " + q.isSize());
}
// Start program execution
main();