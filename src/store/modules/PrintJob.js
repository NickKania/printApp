export default class PrintJob {
  constructor(name, usrEmail) {
    this.name = name;
    this.creator = "temp";
    this.usrEmail = usrEmail;
    this.priority = 0;
    this.status = "queued";
  }
}
