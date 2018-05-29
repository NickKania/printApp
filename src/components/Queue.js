import PrintJob from './PrintJob.js'
export default class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
     this.queue.push(item);
  }

  dequeue() {
    for(i = 0; i < this.queue.length; i++) {
      if(this.queue[i] > 0) {
        var temp = this.queue[i];
        this.queue.splice(i,1);
        return temp;
      } else {
        return this.queue.shift();
      }
    }
  }

  size() {
     return this.queue.length;
  }

  peek() {
     return (this.queue[0] !== null) ? this.queue[0] : null;
  }
}
