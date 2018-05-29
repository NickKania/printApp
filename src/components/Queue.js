export default class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
     this.queue.push(item);
  }

  dequeue() {
     return this.queue.shift();
  }

  size() {
     return this.queue.length;
  }

  peak() {
     return (this.queue[0] !== null) ? this.queue[0] : null;
  }
}
