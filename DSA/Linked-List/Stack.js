class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(val){
    let newNode = new Node(val)
    this.head.next = newNode;
    this.head = newNOde
  }
  dequeue() {
    let toDequeue = this.head.val
    this.head.next = this.head
    return toDequeue
  }
  peek() {
    return this.head.val
  }
}
