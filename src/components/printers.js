var name,displayName,inUse,isOnline;
var printQueue = new Queue();
function printer() {
  name = '';
  displayName = '';
  inUse = false;
  isOnline = false;
  printQueue;

}
function printer(name, displayName) {
  this.name = name;
  displayName = this.displayName
  inUse = false;
  isOnline = false;
  printQueue;
}
var makerBot = new printer(makerBot, "Makerbot");
var formLabs = new printer(formLabs, "Formlabs");
var printerList = [makerBot,formLabs];

class Queue {
  var data[];
  length = 0;
    enqueue(element) {
      this.data.push(element);
    }
    dequeue() {
      if(!this.isEmpty())
      return this.data.shift();
    }
    isEmpty() {
      return this.data.length == 0;
    }

}
