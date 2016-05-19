'use strict';
const Node = function(val, next) {
  this.val = val;
  this.next = next || null;
}

Node.prototype.append = function(val) {
  if (this.next) return this.next.append(val);
  this.next = new Node(val);
}

let head = new Node(null);
head.append(5);
head.append(7);
console.log(head);
