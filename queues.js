class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queues {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return this.size++;
  }

  dequeue() {
    if (!this.first) return null;
    var temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
