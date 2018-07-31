$(".firstbutton").click(function(){
    $(".sumar").append(
        "<div class='col-md-7'><p><strong>Miralo con un ejemplo de la vida real. Imagina que tienes 4 manzanas, tu amigo te regala 2. Ahora ¿Cuántas manzanas tienes tú?. Exacto, tendrías 6 (4+2=6), pero ¿Por qué es esto?. Resulta que la suma consiste en tomar un número y adicionarle otro número, de forma que se juntan dos números en uno.</strong></p><p><strong>Cabe destacar que para escribir una suma de forma algebraica se representa con el signo '+'</div><div class='col-md-3'><img src='../Sources/sumanzanas.png' width='90%' height='90%'></div>");
    $("#secondbutton").prop("hidden", false);
    $("#title").prop("hidden", false);
    $(".center").remove(".center");
});

$("#secondbutton").click(function(){
    $("#restar").append("<div class='col-md-12'><h2 id='title'>Restar</h2></div><div class='col-md-7'><p><strong>Tomemos el mismo ejemplo de arriba, pero en lugar de que tu amigo te de 2 manzanas, tú le das 2 manzanas a él. Ahora, ¿Cuántas manzanas tienes tú?. Exacto, tendrías sólo 2 (4-2=2), pero ¿Por qué esto?. Resulta que la resta consiste en tomar un número y quitarle otro número, es decir, quitando una cantidad de otra. Cabe destacar que para escribir una resta de forma algebraica se representa con el signo '-'</strong></p></div><div class='col-md-3'><img src='../Sources/Ejemplo-de-resta1.jpg' width='90%' height='90%'></div></div>");
    $(".question").prop("hidden", false);
    $(".2button").remove(".2button");
    $("#thirdbutton").prop("hidden", false);
});

jQuery(document).ready(function($){
   $('#feedback').click(
       'submit',
       function(e){
           e.preventDefault();

           	var feedback = $('#exp').val();

               var user_fb = {
                       feedback:$('#exp').val();
                   };
                   database.ref('feedbacks').push(feedback);
                   $("#thanks").append("<strong> Gracias! </strong>");
       });
});