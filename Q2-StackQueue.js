// Implement a Stack and a Queue data structure in Javascript.
var Stack = function () {
  this.final = []; //makes final seen across layers in this scope
  this.add = function (i) {this.final.push(i); return this.final;}
  this.remove = function (i) {this.final.pop(i); return this.final;}
}
s = new Stack(); //constructor invokation pattern, just becos i called new
s.add(3);

class Queue {
  constructor (){
  this.final = [];
  }

  add (i) {
    this.final.push(i);
    return this.final;
  }

  remove (i) {
    this.final.shift(i);
    return this.final;
    }
}
let q = new Queue //only runs constructor
q.add(3)
// Quene.remove(3)//
