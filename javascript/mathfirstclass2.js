var get_message = new Promise (function(res, rej) {
    var message = database.ref("/Class/Primary/Math2/").once("value").then(function(snapshot){
        var data = snapshot.val();

		$('#title1').text(data.Title);
		$("#subtitle1").text(data.Subtitle);
		$("#subtitle").text(data.Primary);
		$(".ctitle").text(data.Title1);
		$("#firstp").text(data.Firstp);
		$("#maththirdimg").attr("src", data.maththirdimg);
		$(".dtitle").text(data.Title2);
		$("#secondp").text(data.Secondp);
		$("#thirdp").text(data.Thirdp);
		$("#mathfourthimg").attr("src", data.mathfourthimg);
        
        return res(data);

    });
    if (!message) {
        return rej();}
});

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