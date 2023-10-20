var data = [
    { fruit: "Apples", count: 10 },
    { fruit: "Oranges", count: 15 },
  ];


  // Select the chart container
var svg = d3.select("#chart-container")
.append("svg")
.attr("width", 400)
.attr("height", 200);

// Create a rectangle for each data point
svg.selectAll("rect")
.data(data)
.enter()
.append("rect")
.attr("x", function(d, i) { return i * 80; })
.attr("y", function(d) { return 200 - d.count * 10; })
.attr("width", 50)
.attr("height", function(d) { return d.count * 10; })
.attr("fill", "orange");

// Add labels
svg.selectAll("text")
.data(data)
.enter()
.append("text")
.text(function(d) { return d.fruit; })
.attr("x", function(d, i) { return i * 80 + 25; })
.attr("y", 190)
.attr("text-anchor", "middle");