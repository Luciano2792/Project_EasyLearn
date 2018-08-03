// INDEX.
var get_message = new Promise (function(res, rej) {
    var message = database.ref("/Index/").once("value").then(function(snapshot){
        var data = snapshot.val();

        $('#title1').text(data.Title);
        $("#subtitle1").text(data.Subtitle);
        $("#firstimage").attr("src", data.firstimage);
        $("#description1").text(data.Description);
        $("#new1").text(data.New);
        $("#button1").text(data.Button1);
        $("#sign1").text(data.Sign1);
        $("#sign2").text(data.Sign2);

        return res(data);

    });
    if (!message) {
        return rej();}
});
// SELECTOR
var get_message = new Promise (function(res, rej) {
    var message = database.ref("/Selector/").once("value").then(function(snapshot){
        var data = snapshot.val();

        $('#title1').text(data.Title);
        $("#subtitle1").text(data.Subtitle);
        $("#subtitle2").text(data.Subtitle2);
        $("#first").text(data.First);
        $("#second").text(data.Second);
        $("#third").text(data.Third);
        $("#signout1").text(data.Signout);

        return res(data);

    });
    if (!message) {
        return rej();}
});
