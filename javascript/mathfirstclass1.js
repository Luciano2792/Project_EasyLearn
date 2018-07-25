$(".firstbutton").click(function(){
    $(".sumar").append(
        "<div class='col-md-7'><p><strong> Como operación matemática, la suma consiste en añadir dos números o más para obtener una cantidad total. Este proceso también permite reunir dos grupos de cosas para obtener un único conjunto. Por ejemplo: si tengo tres manzanas y tomo otras dos, tendré cinco manzanas (3+2=5).</strong></p></div><div class='col-md-3'><img src='../Sources/sumanzanas.png' width='90%' height='90%' style='border: 5px solid #C1BF2A; border-radius: 50px;'></div>");
    $(".2button").append("<div class='row'><button class='col-md-12' id='secondbutton'><h3><strong>Ver más</strong></h3></button></div>")
    $(".center").remove(".center");
});
$("#secondbutton").click(function(){
    $("#restar").append("<div class='col-md-12'><h2 id='title'>Restar</h2></div>");
});