// Define your data (the values you want to display)
const data = [10, 20, 30, 40, 50];

// Set the dimensions of your chart
const width = 400;
const height = 300;
const barWidth = 40;

// Create an SVG element to draw your chart on
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Create a scale for your data to fit the chart
const xScale = d3.scaleLinear()
  .domain([0, d3.max(data)])
  .range([0, width]);

// Create and append the bars to the chart
svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * (barWidth + 10))
  .attr("y", d => height - xScale(d))
  .attr("width", barWidth)
  .attr("height", d => xScale(d))
  .attr("fill", "blue")
  .on("mouseover", function (d, i) {
    // When you hover over a bar, show the tooltip
    d3.select(this)
      .attr("fill", "orange");
    tooltip
      .style("opacity", 1)
      .html(`Value: ${d}`)
      .style("left", i * (barWidth + 10) + 10 + "px")
      .style("top", height - xScale(d) - 30 + "px");
  })
  .on("mouseout", function () {
    // When you move the mouse away from a bar, hide the tooltip
    d3.select(this)
      .attr("fill", "blue");
    tooltip.style("opacity", 0);
  });

// Create a tooltip element
const tooltip = d3
  .select("body")
  .append("div")
  .style("position", "absolute")
  .style("opacity", 0);

// Style the tooltip
tooltip.style("background-color", "white");
tooltip.style("border", "1px solid black");
tooltip.style("padding", "5px");
tooltip.style("border-radius", "5px");

// Add labels to the chart
svg.selectAll("text")
  .data(data)
  .enter()
  .append("text")
  .text(d => d)
  .attr("x", (d, i) => i * (barWidth + 10) + barWidth / 2)
  .attr("y", d => height - xScale(d) - 5)
  .attr("text-anchor", "middle")
  .attr("font-size", "14px");
