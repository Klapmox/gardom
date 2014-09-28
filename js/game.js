var Game = function(){
    
    this.start = function(){
        
    }
    
    $("div.menuBlock").click(function(){
        if(!$("div#color").hasClass("open")){
            $("nav").css("min-width","500px");
            $("div#borderTop").css("min-width","420px");
            $("div#color").toggleClass("open");
        }else{
            if(!$(this).hasClass("elt-menu")){
                $("nav").css("min-width","80px");
                $("div#borderTop").css("min-width","0");
                $("div#color").toggleClass("open");
            }
        }
        if($(this).hasClass("elt-menu")){
            $("div.menuBlock.selected").toggleClass("selected");
            $(this).toggleClass("selected");
            $("div#menu-parts>div.selected").toggleClass("selected");
            $("#"+$(this)[0].id+"-info").toggleClass("selected");
            //modification du menu
        }
    });
    
    
}
