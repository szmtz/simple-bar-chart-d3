// create the data - define your data as an array of objects, where each object represents a data point 

var data = [
    { label: "A", value: 30 },
    { label: "B", value: 50 },
    { label: "C", value: 20 },
    // Add more data points here
  ];

  // set up the svg container - select the container div and append an SVG element for your chart

  var svgWidth = 400;
  var svgHeight = 300;
  
  var svg = d3.select(".chart-container")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

    // create scales - define scale to map your data to the SVG space

    var xScale = d3.scaleBand()
    .domain(data.map(d => d.label))
    .range([0, svgWidth])
    .padding(0.1);
  
  var yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([svgHeight, 0]);

// create bars - use D3 to create the bar chart by appending rectangles for each data point

svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", d => xScale(d.label))
  .attr("y", d => yScale(d.value))
  .attr("width", xScale.bandwidth())
  .attr("height", d => svgHeight - yScale(d.value))
  .attr("class", "bar");


  // add axes - include axes for better data visualization

  svg.append("g")
  .attr("class", "x-axis")
  .attr("transform", "translate(0, " + svgHeight + ")")
  .call(d3.axisBottom(xScale));

svg.append("g")
  .attr("class", "y-axis")
  .call(d3.axisLeft(yScale));


  // customize and style - style your chart using CSS and customize it further with additional D3 functions 

  // apply CSS styles - the style.css file, add CSS styles to format and style your chart elements

   
  