window.onload = function(){
    $("g").click(function(){
        if(!$(this).hasClass("green")){
            $(this).attr("class","red");
        }
    });
    
    var g  = new Game();
    g.start();
}
