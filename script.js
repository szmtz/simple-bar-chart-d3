
        // // Your data (example data)
        // var data = [10, 30, 45, 60, 20];

        // // Set up the SVG canvas
        // var width = 400;
        // var height = 200;
        // var svg = d3.select("#chart")
        //     .append("svg")
        //     .attr("width", width)
        //     .attr("height", height);

        // // Create the X and Y scales
        // var xScale = d3.scaleBand()
        //     .domain(d3.range(data.length))
        //     .range([0, width])
        //     .padding(0.1);

        // var yScale = d3.scaleLinear()
        //     .domain([0, d3.max(data)])
        //     .nice()
        //     .range([height, 0]);

        // // Create the bars
        // svg.selectAll(".bar")
        //     .data(data)
        //     .enter().append("rect")
        //     .attr("class", "bar")
        //     .attr("x", function(d, i) { return xScale(i); })
        //     .attr("width", xScale.bandwidth())
        //     .attr("y", function(d) { return yScale(d); })
        //     .attr("height", function(d) { return height - yScale(d); });

        // // Add tooltips
        // svg.selectAll(".bar")
        //     .on("mouseover", function(d, i) {
        //         // Get the position of the bar for tooltip placement
        //         var xPos = xScale(i) + xScale.bandwidth() / 2;
        //         var yPos = yScale(d) - 10;

        //         // Show the tooltip
        //         svg.append("text")
        //             .attr("class", "tooltip")
        //             .attr("x", xPos)
        //             .attr("y", yPos)
        //             .text("Value: " + d)
        //             .attr("text-anchor", "middle");
        //     })
        //     .on("mouseout", function() {
        //         // Hide the tooltip on mouseout
        //         svg.select(".tooltip").remove();
        //     });
  