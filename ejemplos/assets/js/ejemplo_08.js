// The data
var myData = [100, 650, 250, 500, 425, 897];

// Chart dimensions
var margin = { top: 10, right: 10, bottom: 10, left: 10 },
    width = 300 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// var rectWidth = 60;
// var rectPadding = 10;

// Set scale
var yScale = d3.scale.linear()
                .domain([0, d3.max(myData)])
                .range([0, height]);

var xScale = d3.scale.ordinal()
                .domain(d3.range(myData.length))
                .rangeBands([0, width], 0.2);

// Append svg and store the seleccion in a variable
var svg = d3.select('#chart').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


// Append a circle for each data array element and set the attributes based on the data.
svg.selectAll('rect')
    .data(myData)
    .enter()
  .append('rect')
      .attr('x', function(d, i) { return xScale(i); })
      .attr('y', function(d) { return height - yScale(d); })
      .attr('width', xScale.rangeBand())
      .attr('height', function(d) { return yScale(d); })
      .style('fill', '#017089');

// Append a label for each circle.
svg.selectAll('text')
    .data(myData)
    .enter()
  .append('text')
    .attr('x', function(d, i) { return xScale(i) + (xScale.rangeBand() / 2); })
    .attr('y', function(d) { return height - yScale(d) + 30; })
    .attr('text-anchor', 'middle')
    .style('fill', 'white')
    .style('font-size', '20px')
    .text(function(d) { return d; });


