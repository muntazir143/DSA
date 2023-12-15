class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //insert at end of list
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // remove from end of list
  pop() {
    if (!this.head) return; // empty list

    // one node only
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }

    let current = this.head;
    let newTail = null;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return this;
  }

  // delete first node
  shift() {
    if (!this.head) return; // empty list

    // one node only
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this;
    }

    let currentHead = this.head;
    let newHead = currentHead.next;
    this.head = newHead;
    this.length--;
    return currentHead;
  }

  // add first node
  unshift(value) {
    const newNode = new Node(value);

    let currentHead = this.head;
    let newHead = newNode;
    this.head = newHead;
    newHead.next = currentHead;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let target = this.head;
    for (let i  = 1; i <= index; i++) {
      target = target.next;
    }
    return target.value;
  }

  printAll() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.printAll();
console.log("----------------");
list.pop();
list.printAll();
console.log("----------------");
list.shift();
list.printAll();
console.log("----------------");
list.unshift(1);
list.printAll();
console.log("----------------");
console.log(list.get(2));
console.log("----------------");