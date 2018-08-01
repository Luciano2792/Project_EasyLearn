$(".firstbutton").click(function(){
    $("#title").prop("hidden", false);
    $("#theme1").prop("hidden", false);
    $(".question").prop("hidden", false);
    $(".center").remove(".center");
    $("#secondbutton").prop("hidden", false);
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