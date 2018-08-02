$(".firstbutton").click(function(){
	$(".text").prop("hidden", false);
	$("#secondbutton").prop("hidden", false);
	$(".center").remove(".center");
	$("#title").prop("hidden", false);
});
$("#secondbutton").click(function(){
	$(".text2").prop("hidden", false);
	$(".quit").remove(".quit");
	$("#thirdbutton").prop("hidden", false);
})	