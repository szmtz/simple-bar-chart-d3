// create the data set

var data = [10, 20, 30, 40, 50];

//create bar chart based on data 
// select the SVG element and 'append' rectangles for each data point

var svg = d3.select("svg");
var barWidth = 40;
var barSpacing = 10;

svg
  .selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", function (d, i) {
    return i * (barWidth + barSpacing);
  })
  .attr("y", function (d) {
    return 200 - d;
  })
  .attr("width", barWidth)
  .attr("height", function (d) {
    return d;
  })
  .attr("class", "bar");

  // add labels 
  svg
  .selectAll("text")
  .data(data)
  .enter()
  .append("text")
  .attr("x", function (d, i) {
    return i * (barWidth + barSpacing) + barWidth / 2;
  })
  .attr("y", function (d) {
    return 200 - d - 5;
  })
  .attr("text-anchor", "middle")
  .text(function (d) {
    return d;
  });
