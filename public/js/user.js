

socket.on('user', function(value){
	var data = JSON.parse(value);
	$("#currentuser").text(data.currentuser);
	$("#total").text(data.total);
	$("#engagement").text(data.engagement);
	$("#successrate").text(data.successrate);
	
	chartdata6[1].values[0][1] = Number(data.total);

    d3.select('#chart6 svg')
    .datum(chartdata6)
    .call(chart6);

});
