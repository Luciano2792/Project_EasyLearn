var get_message = new Promise (function(res, rej) {
    var message = database.ref("/Class/Primary/Math").once("value").then(function(snapshot){
        var data = snapshot.val();

        $('#title1').text(data.Title);
        $("#subtitle1").text(data.Subtitle);
        $("#subtitle").text(data.Primary);
        $(".atitle").text(data.Title1);
        $("#firstp").text(data.Firstp);
        $("#secondp").text(data.Secondp);
        $("#mathfirstimage").attr("src", data.mathfirstimage);
        $(".btitle").text(data.Title2);
        $("#thirdp").text(data.Thirdp);
        $("#mathsecondimage").attr("src", data.mathsecondimage);
        $("#exp1").text(data.Exp);
        
        return res(data);

    });
    if (!message) {
        return rej();}
});

$(".firstbutton").click(function(){
    $(".sumar").prop("hidden", false);
    $("#secondbutton").prop("hidden", false);
    $("#title").prop("hidden", false);
    $(".center").remove(".center");
});

$("#secondbutton").click(function(){
    $("#restar").prop("hidden", false);
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
                       feedback:$('#exp').val(),
                   };
                   database.ref('feedbacks').push(feedback);
                   $("#thanks").append("<strong> Gracias! </strong>");
       });
});