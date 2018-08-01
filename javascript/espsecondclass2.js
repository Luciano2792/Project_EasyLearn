$("#firstbutton").click(function(){
    $("#title").prop("hidden", false);
    $(".viewtitle").prop("hidden", false);
    $("#theme2").prop("hidden", false);
    $(".question").prop("hidden", false);
    $("#secondbutton").prop("hidden", false);
    $("#theme3").prop("hidden", false);
    $("#firstbutton").remove("#firstbutton");
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
                    $("#thanks").append("<h4 style='color: #FFF;'><strong> Gracias! </strong></h4>");
        });
 });