var get_message = new Promise (function(res, rej) {
    var message = database.ref("/First/").once("value").then(function(snapshot){
        var data = snapshot.val();

        $('#titlefirst').text(data.Title);
        $("#subtitlefirst").text(data.Subtitle);
        $("#qfirst").text(data.Qfirst);
        $("#mathfirst").text(data.Mathfirst);
        $("#espfirst").text(data.Espfirst);
        $("#back").text(data.Back);

        return res(data);

    });
    if (!message) {
        return rej();}
});