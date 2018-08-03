var get_message = new Promise (function(res, rej) {
    var message = database.ref("/Class/Secondary/Esp2/").once("value").then(function(snapshot){
        var data = snapshot.val();

        $('#title1').text(data.Title);
        $("#subtitle1").text(data.Subtitle);
        $("#subtitle").text(data.Secondary);
        $(".atitle").text(data.Title1);
        $(".btitle").text(data.Title2);
        $("#p1").text(data.P1);
        $("#p2").text(data.P2);
        $("#i1").attr("src", data.i1);
        $("#i2").attr("src", data.i2);
        $("#q1").text(data.q1);
        
        return res(data);

    });
    if (!message) {
        return rej();}
});

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