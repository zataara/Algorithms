class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(val){
    let newNode = new Node(val)
    this.tail.next = newNode;
    this.tail = newNode
  }
  dequeue() {
    let toDequeue = this.head.val
    this.head = this.head.next
    return toDequeue
  }
  peek() {
    return this.head.val
  }
}


