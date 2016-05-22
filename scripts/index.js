'use strict';
console.log('hi from index');

// d3.select("svg")
//   .append("circle")
//   .attr("cx", 20)
//   .attr("cy", 20)
//   .attr("r", 10);
//
// d3.select("#root")
//   .attr("fill", "green");

var linkedList = new Node(null);
linkedList.append(5);
linkedList.append(7);
linkedList.append(9);
linkedList.append(10);
processLinkedList(linkedList.next, 10);

function processLinkedList(linkedList, x) {
  var nodeDiv = d3.select("svg").append("g");
  nodeDiv
    .append("circle")
    .attr('fill', 'green')
    .attr("cx", x)
    .attr("cy", 20)
    .attr("r", 10);
  nodeDiv
    .append("text")
    .attr("x", x+10)
    .attr("y", 50)
    .attr("dx", function(d){return -20})
    .style('color', 'green')
    .text(() => linkedList.val);
  if (linkedList.next) processLinkedList(linkedList.next, x+50);
}
