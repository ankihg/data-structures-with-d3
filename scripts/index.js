console.log('hi from index');

// d3.selectAll("circle").style("color", function() {
//   return "hsl(" + Math.random() * 360 + ",100%,50%)";
// });

d3.select("svg")
  .append("circle")
  .attr("cx", 20)
  .attr("cy", 20)
  .attr("r", 10);

d3.select("#root")
  .attr("fill", "green");

console.log(d3.select('#main'));
