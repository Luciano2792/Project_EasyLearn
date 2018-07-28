$(".firstbutton").click(function(){
	$(".text").append("<div class='col-md-7'><p><strong>La multiplicación es la operación la cual se toma un número primario y se suma a si mismo tantas veces este indicado en el segundo valor dado. Es decir, 2+2+2=6 es lo mismo a decir 2*3=6</strong></p></div><div class='col-md-3'><img width='100%' height='100%' src='../Sources/multimanzanas.png'></div>");
	$("#secondbutton").prop("hidden", false);
	$(".center").remove(".center");
});
$("#secondbutton").click(function(){
	$(".text2").append("<div class='col-md-12'><h2 id='title'>Dividir</h2></div><div class='col-md-7'><p><strong>Entiende mejor la división con este ejemplo: Imagina que tienes una pizza dividida en 8 otros y estás en tu casa con otros 3 amigos y quieren comerse la pizza en partes iguales evidentemente.</strong></p><p><strong>¿Cuántas porciones de pizza le tocan a cada integrante?. Exacto, son 2 (8/4=2), pero ¿Por qué esto?. Estamos buscando las veces que está el 4 en el 8, es decir, las veces que puede multiplicarse el 4 sin superar al 8.</strong></p></div><div class='col-md-4'><img src='../Sources/div-entre5.png' width='100%' height='100%'></div>");
	$(".quit").remove(".quit");
	$("#thirdbutton").prop("hidden", false);
})	