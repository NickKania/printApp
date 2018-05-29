import Queue from './Queue.js'
export default class Printer {
  constructor(name, displayName) {
    this.id = name;
    this.displayName = displayName
    this.inUse = false;
    this.isOnline = false;
    this.printQueue = new Queue;
  }
}
