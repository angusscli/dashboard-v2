

socket.on('user', function(value){
	var data = JSON.parse(value);
	$("#currentuser").text(data.currentuser);
	$("#total").text(data.total);
	$("#engagement").text(data.engagement);
	$("#successrate").text(data.successrate);
});
