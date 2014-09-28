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
    
    
    var li  = [],
        svg = d3.select("svg")
    
    $("path").click(function(){
        if($(this).attr("style").match(/fill/)=="fill" && li.length == 0){
            li=[$(this)[0].id]
            $(this).css("fill","yellow");
        }
        else{
            li.push($(this)[0].id);
            if(li.length == 3){
                var nID =  "arrow"+li[1].replace("path","")+"-"+li[2].replace("path","")
                $("#"+li[0]).attr("id",nID)
                $("#"+nID).attr("class","hidden");
                li=[]
            }
        }
    });
    
    
}
