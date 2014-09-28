var Zone = function(){
    
    
}

$("g").hover(function(){
        if(!$("div#color").hasClass("open")){
            $("aside").css("opacity","1");
        }
    },function(){
        $("aside").css("opacity","0");
});