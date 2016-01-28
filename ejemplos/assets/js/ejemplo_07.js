// The data
var myData = [100, 650, 250, 500, 425];

// Chart dimensions
var margin = { top: 10, right: 10, bottom: 10, left: 10 },
    width = 500 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;

var rectWidth = 60;
var rectPadding = 10;

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
      .attr('x', function(d, i) { return i * (rectWidth + rectPadding); })
      .attr('y', function(d) { return height - d; })
      .attr('width', rectWidth)
      .attr('height', function(d) { return d; })
      .style('fill', '#017089');

// Append a label for each circle.
svg.selectAll('text')
    .data(myData)
    .enter()
  .append('text')
    .attr('x', function(d, i) { return (rectWidth / 2) + (rectPadding + rectWidth) * i; })
    .attr('y', function(d) { return height - 10; })
    .attr('text-anchor', 'middle')
    .style('fill', 'white')
    .style('font-size', '20px')
    .text(function(d) { return d; });





    