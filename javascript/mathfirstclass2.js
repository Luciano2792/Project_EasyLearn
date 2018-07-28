$(".firstbutton").click(function(){
	$(".text").append("<div class='col-md-7'><p><strong>La multiplicación es la operación la cual se toma un número primario y se suma a si mismo tantas veces este indicado en el segundo valor dado. Es decir, 2+2+2=6 es lo mismo a decir 2*3=6</strong></p></div><div class='col-md-3'><img style='border: 5px solid #C1BF2A; border-radius: 50px;' width='100%' height='100%' src='../Sources/multimanzanas.png'></div>");
	$("#secondbutton").prop("hidden", false);
	$(".center").remove(".center");
});
$("#secondbutton").click(function(){
	$("#thirdbutton").prop("hidden", false);
})