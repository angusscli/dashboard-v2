
var chart6;

 nv.addGraph(function() {
    chart6 = nv.models.stackedAreaChart()
                  .margin({right: 100})
                  .x(function(d) { return d[0] })   //We can modify the data accessor functions...
                  .y(function(d) { return d[1] })   //...in case your data is formatted differently.
                  //.useInteractiveGuideline(true)    //Tooltips which show all data points. Very nice!
                  .rightAlignYAxis(true)      //Let's move the y-axis to the right side.

                  .showControls(true)       //Allow user to choose 'Stacked', 'Stream', 'Expanded' mode.
                  .clipEdge(true);

    //Format x-axis labels with custom function.
    chart6.xAxis
        .tickFormat(function(d) { 
          return d3.time.format('%x')(new Date(d)) 
    });

    chart6.yAxis
        .tickFormat(d3.format(',.0f'));

    d3.select('#chart6 svg')
      .datum(chartdata6)
      .call(chart6);

    nv.utils.windowResize(chart6.update);

    return chart6;
  });

 
/*
 socket.on('chart6', function(value){
console.log("chart6 socket.on");
     var data= JSON.parse(value);
     
     var y = data.date.substr(0,4);
     var m = data.date.substr(4,2)-1;
     var d = data.date.substr(6,2);
     var date = new Date(y,m,d).getTime();
     
     
     if (data.score > 0) {
  	   		chartdata3[0].values.push({x:date,y:data.score,size:data.magnitude,sharp:'circle'})
     } else {
  	   		chartdata3[1].values.push({x:date,y:data.score,size:data.magnitude,sharp:'circle'})
     }
     if (chart6!=undefined) {
	       d3.select("#chart6 svg")
	       .datum(chartdata6)
	       .transition().duration(1200)
	       .call(chart6);
     }
 });*/
 

/*
   // create the chart
   var chart6;

   const maxValue = 1
   const minValue = -1
   const ticks = 100

   const niceYScale = d3.scale.linear()
     .domain([minValue, maxValue])
     .nice(ticks);
   
   nv.addGraph(function() {
       chart6 = nv.models.scatterChart()
           .showDistX(true)
           .showDistY(true)
           .useVoronoi(true)
           .color(  [d3.rgb("green"), d3.rgb("red")] )
           .duration(300)
           .forceY(niceYScale.domain())
       ;
       chart6.dispatch.on('renderEnd', function(){
           console.log('render complete');
       });
       var tickMultiFormat = d3.time.format.multi([
           ["%-I:%M%p", function(d) { return d.getMinutes(); }], // not the beginning of the hour
           ["%-I%p", function(d) { return d.getHours(); }], // not midnight
           ["%b %-d", function(d) { return d.getDate() != 1; }], // not the first of the month
           ["%b %-d", function(d) { return d.getMonth(); }], // not Jan 1st
           ["%Y", function() { return true; }]
       ]);
       //chart6.xAxis.tickFormat(formatDateTick).axisLabel('Time');
       chart6.xAxis
       .tickPadding(10)
       .tickFormat(    
         function(d) {
        	 return tickMultiFormat(new Date(d));
        	 }
       ).axisLabel('Date');
     chart6.xScale(d3.time.scale());

       chart6.yAxis.tickFormat(d3.format('.02f')).axisLabel('Score');
       
       
       d3.select('#chart6 svg')
           .datum(chartdata3)
           .call(chart6);
       nv.utils.windowResize(chart6.update);
       chart6.dispatch.on('stateChange', function(e) { ('New State:', JSON.stringify(e)); });
       
       chart6.tooltip.enabled(false)
       return chart6;
   });


   socket.on('chart6', function(value){
console.log("chart6 socket.on");
       var data= JSON.parse(value);
       
       var y = data.date.substr(0,4);
       var m = data.date.substr(4,2)-1;
       var d = data.date.substr(6,2);
       var date = new Date(y,m,d).getTime();
       
       
       if (data.score > 0) {
    	   		chartdata3[0].values.push({x:date,y:data.score,size:data.magnitude,sharp:'circle'})
       } else {
    	   		chartdata3[1].values.push({x:date,y:data.score,size:data.magnitude,sharp:'circle'})
       }
       if (chart6!=undefined) {
	       d3.select("#chart6 svg")
	       .datum(chartdata3)
	       .transition().duration(1200)
	       .call(chart6);
       }
   });
   */
