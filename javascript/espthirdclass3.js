var get_message = new Promise (function(res, rej) {
    var message = database.ref("/Class/Prep/Esp3").once("value").then(function(snapshot){
        var data = snapshot.val();

        $('#title1').text(data.Title);
        $("#subtitle1").text(data.Subtitle);
        $("#subtitle").text(data.Prepa);
        $("#q1").text(data.q1);
        $("#q2").text(data.q2);
        $("#q3").text(data.q3);
        $("#a1").text(data.a1);
        $("#a2").text(data.a2);
        $("#a3").text(data.a3);
        $("#a4").text(data.a4);
        $("#a5").text(data.a5);
        $("#a6").text(data.a6);
        $("#a7").text(data.a7);
        $("#a8").text(data.a8);
        $("#a9").text(data.a9);
        $("#a10").text(data.a10);
        $("#a11").text(data.a11);
        $("#a12").text(data.a12);

        
        return res(data);

    });
    if (!message) {
        return rej();}
});

jQuery(document).ready(function($){
    $("#bsubmit").click(
        function(e){
            e.preventDefault();

            if($("#firstanswer1")[0].checked == true){
                $("#alert1").append("<h4 style='color: #E9E603;'><strong> Lo siento, la respuesta ha sido incorrecta. <a href='espthirdclass1.html'>Repasa los conceptos</a> e intentalo de nuevo</strong></h4>");
            } else if($("#firstanswer2")[0].checked == true){
                $("#alert1").append("<h4 style='color: #E9E603;'><strong> Lo siento, la respuesta ha sido incorrecta. <a href='espthirdclass1.html'>Repasa los conceptos</a> e intentalo de nuevo</strong><h4>");
            } else if($("#firstanswer3")[0].checked == true){
                $("#alert1").append("<h4 style='color: #00BB0E;'><strong>La respuesta es correcta!</strong></h4>");
            } else if($("#firstanswer4")[0].checked == true){
                $("#alert1").append("<h4 style='color: #E9E603;'><strong> Lo siento, la respuesta ha sido incorrecta. <a href='espthirdclass1.html'>Repasa los conceptos</a> e intentalo de nuevo</strong></h4>");
            } else{
                $("#alert1").append("<h4 style='color: #E9E603; text-align: center;'><strong>Porfavor selecciona una respuesta!</strong></h4>");
           }

           if($("#secondanswer1")[0].checked == true){
                $("#alert2").append("<h4 style='color: #E9E603;'><strong> Lo siento, la respuesta ha sido incorrecta. <a href='espthirdclass1.html'>Repasa los conceptos</a> e intentalo de nuevo</strong><h4>");
            } else if($("#secondanswer2")[0].checked == true){
                $("#alert2").append("<h4 style='color: #E9E603;'><strong> Lo siento, la respuesta ha sido incorrecta. <a href='espthirdclass1.html'>Repasa los conceptos</a> e intentalo de nuevo</strong><h4>");
            } else if($("#secondanswer3")[0].checked == true){
                $("#alert2").append("<h4 style='color: #E9E603;'><strong> Lo siento, la respuesta ha sido incorrecta. <a href='espthirdclass1.html'>Repasa los conceptos</a> e intentalo de nuevo</strong><h4>");
            } else if($("#secondanswer4")[0].checked == true){
                $("#alert2").append("<h4 style='color: #00BB0E;'><strong>La respuesta es correcta!</strong></h4>");
            } else{
                $("#alert2").append("<h4 style='color: #E9E603; text-align: center;'><strong>Porfavor selecciona una respuesta!</strong></h4>");
            }
            
            if($("#thirdanswer1")[0].checked == true){
                $("#alert3").append("<h4 style='color: #00BB0E;'><strong>La respuesta es correcta!</strong></h4>");
            } else if($("#thirdanswer2")[0].checked == true){
                $("#alert3").append("<h4 style='color: #E9E603;'><strong> Lo siento, la respuesta ha sido incorrecta. <a href='espthirdclass1.html'>Repasa los conceptos</a> e intentalo de nuevo</strong><h4>");
            } else if($("#thirdanswer3")[0].checked == true){
                $("#alert3").append("<h4 style='color: #E9E603;'><strong> Lo siento, la respuesta ha sido incorrecta. <a href='espthirdclass1.html'>Repasa los conceptos</a> e intentalo de nuevo</strong><h4>");
            } else if($("#thirdanswer4")[0].checked == true){
                $("#alert3").append("<h4 style='color: #E9E603;'><strong> Lo siento, la respuesta ha sido incorrecta. <a href='espthirdclass1.html'>Repasa los conceptos</a> e intentalo de nuevo</strong><h4>");
            } else{
                $("#alert3").append("<h4 style='color: #E9E603; text-align: center;'><strong>Porfavor selecciona una respuesta!</strong></h4>");
            }

            if($("#firstanswer3")[0].checked == true && $("#secondanswer4")[0].checked == true && $("#thirdanswer1")[0].checked == true){
                alert("Has pasado esta asignatura!!");
                location.href="third.html"
            }
        }
    )
});