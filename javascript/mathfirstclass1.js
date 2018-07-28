$(".firstbutton").click(function(){
    $(".sumar").append(
        "<div class='col-md-7'><p><strong>Miralo con un ejemplo de la vida real. Imagina que tienes 4 manzanas, tu amigo te regala 2. Ahora ¿Cuántas manzanas tienes tú?. Exacto, tendrías 6 (4+2=6), pero ¿Por qué es esto?; resulta que la suma consiste en tomar un número y adicionarle otro número, así sumando sus digitos.</strong></p></div><div class='col-md-3'><img src='../Sources/sumanzanas.png' width='90%' height='90%' style='border: 5px solid #C1BF2A; border-radius: 50px;'></div>");
    $("#secondbutton").prop("hidden", false);
    $(".center").remove(".center");
});

$("#secondbutton").click(function(){
    $("#restar").append("<div class='col-md-12'><h2 id='title'>Restar</h2></div><div class='col-md-12' style='text-align: center;'><p style='padding-bottom: 50px;'><strong>Tomemos el mismo ejemplo de arriba, pero en lugar de que tu amigo te de 2 manzanas, tú le das 2 manzanas a él. Ahora, ¿Cuántas manzanas tienes tú?. Exacto, tendrías sólo 2 (4-2=2), pero ¿Por qué esto?; resulta que la resta consiste en tomar un número y quitarle otro número, es decir, restando el valor del número inicial con el valor </strong></p></div></div>");
    $(".question").prop("hidden", false);
    $(".2button").remove(".2button");
    $("#thirdbutton").prop("hidden", false);
});