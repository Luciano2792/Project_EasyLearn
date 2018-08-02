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