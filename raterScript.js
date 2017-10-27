
var clicked=false;
var clickedid=0;
$(document).ready(function(){
$("#rowbox").mouseleave(function(){
    console.log("mouse leaves row div");
    console.log(clickedid);
    console.log(clicked);
    if(clicked == false)
    {
        for(var i=1;i<=6;i++)
        {
     
        document.getElementById(i+"img").src = "LightStar.png";
        }
    }
    if(clicked == true)
    {
        console.log("here!");
        for(var i=1;i<=clickedid;i++)
        {
            console.log("darking star");
        document.getElementById(i+"img").src = "DarkStar1.png";
        }
        for(var j=i;j<=6;j++)
        {
            console.log("lighting star");
        document.getElementById(j+"img").src = "LightStar.png";
        }
    }
        
});
});

function calculate(divobject) {
  
            console.log("heovring........");
            for(var i=1;i<=divobject;i++)
            {
     
            document.getElementById(i+"img").src = "DarkStar.png";
            }
            for(var j=i;j<=6;j++)
            {
    
            document.getElementById(j+"img").src = "LightStar.png";
            }
                   
}

function status(divobject) {
    clicked = true;
    clickedid = divobject;
    console.log("clickedonit")
        
        for(var i=1;i<=divobject;i++)
        {
        document.getElementById(i+"img").src = "DarkStar1.png";
        }
        for(var j=i;j<=6;j++)
        {
        document.getElementById(j+"img").src = "LightStar.png";
        }

        setTimeout(function(){ alert( divobject + " Rated!!!!"); }, 500);
}