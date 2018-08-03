var get_message = new Promise (function(res, rej) {
    var message = database.ref("/Class/Prep/Esp2").once("value").then(function(snapshot){
        var data = snapshot.val();

        $('#title1').text(data.Title);
        $("#subtitle1").text(data.Subtitle);
        $("#subtitle").text(data.Prepa);
        $(".atitle").text(data.Title1);
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
    $("#theme1").prop("hidden", false);
    $("#theme2").prop("hidden", false);
    $(".question").prop("hidden", false);
    $("#secondbutton").prop("hidden", false);
    $("#fixmargin").remove("#fixmargin");
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