jQuery(document).ready(function($){
    $("#bsubmit").click(
        function(e){
            e.preventDefault();

            if($("#firstanswer1")[0].checked == true){
                $("#alert1").append("<h4 style='color: #E9E603;'><strong> Lo siento, la respuesta ha sido incorrecta. <a href='espfirstclass1.html'>Repasa los conceptos</a> e intentalo de nuevo</strong></h4>");
            } else if($("#firstanswer2")[0].checked == true){
                $("#alert1").append("<h4 style='color: #E9E603;'><strong> Lo siento, la respuesta ha sido incorrecta. <a href='espfirstclass1.html'>Repasa los conceptos</a> e intentalo de nuevo</strong><h4>");
            } else if($("#firstanswer3")[0].checked == true){
                $("#alert1").append("<h4 style='color: #00BB0E;'><strong>La respuesta es correcta!</strong></h4>");
            } else if($("#firstanswer4")[0].checked == true){
                $("#alert1").append("<h4 style='color: #E9E603;'><strong> Lo siento, la respuesta ha sido incorrecta. <a href='espfirstclass1.html'>Repasa los conceptos</a> e intentalo de nuevo</strong></h4>");
            } else{
                $("#alert1").append("<h4 style='color: #E9E603; text-align: center;'><strong>Porfavor selecciona una respuesta!</strong></h4>");
           }

           if($("#secondanswer1")[0].checked == true){
                $("#alert2").append("<h4 style='color: #E9E603;'><strong> Lo siento, la respuesta ha sido incorrecta. <a href='espfirstclass1.html'>Repasa los conceptos</a> e intentalo de nuevo</strong><h4>");
            } else if($("#secondanswer2")[0].checked == true){
                $("#alert2").append("<h4 style='color: #E9E603;'><strong> Lo siento, la respuesta ha sido incorrecta. <a href='espfirstclass1.html'>Repasa los conceptos</a> e intentalo de nuevo</strong><h4>");
            } else if($("#secondanswer3")[0].checked == true){
                $("#alert2").append("<h4 style='color: #E9E603;'><strong> Lo siento, la respuesta ha sido incorrecta. <a href='espfirstclass1.html'>Repasa los conceptos</a> e intentalo de nuevo</strong><h4>");
            } else if($("#secondanswer4")[0].checked == true){
                $("#alert2").append("<h4 style='color: #00BB0E;'><strong>La respuesta es correcta!</strong></h4>");
            } else{
                $("#alert2").append("<h4 style='color: #E9E603; text-align: center;'><strong>Porfavor selecciona una respuesta!</strong></h4>");
            }
            
            if($("#thirdanswer1")[0].checked == true){
                $("#alert3").append("<h4 style='color: #00BB0E;'><strong>La respuesta es correcta!</strong></h4>");
            } else if($("#thirdanswer2")[0].checked == true){
                $("#alert3").append("<h4 style='color: #E9E603;'><strong> Lo siento, la respuesta ha sido incorrecta. <a href='espfirstclass1.html'>Repasa los conceptos</a> e intentalo de nuevo</strong><h4>");
            } else if($("#thirdanswer3")[0].checked == true){
                $("#alert3").append("<h4 style='color: #E9E603;'><strong> Lo siento, la respuesta ha sido incorrecta. <a href='espfirstclass1.html'>Repasa los conceptos</a> e intentalo de nuevo</strong><h4>");
            } else if($("#thirdanswer4")[0].checked == true){
                $("#alert3").append("<h4 style='color: #E9E603;'><strong> Lo siento, la respuesta ha sido incorrecta. <a href='espfirstclass1.html'>Repasa los conceptos</a> e intentalo de nuevo</strong><h4>");
            } else{
                $("#alert3").append("<h4 style='color: #E9E603; text-align: center;'><strong>Porfavor selecciona una respuesta!</strong></h4>");
            }

            if($("#firstanswer3")[0].checked == true && $("#secondanswer4")[0].checked == true && $("#thirdanswer1")[0].checked == true){
                location.href="first.html"
            }
        }
    )
});