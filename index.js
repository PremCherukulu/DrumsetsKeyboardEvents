var sound1 = document.getElementById("sound1")


document.body.addEventListener('keydown',function(e){

    var kCode = e.keyCode;
    if(kCode === 65){
        document.getElementById("sound1").play();
        document.getElementById("A").style.color ="yellow";
        document.getElementById("A").style.fontSize ="40px";
        setTimeout(function(){
            document.getElementById("A").style.color ="white";
            document.getElementById("A").style.fontSize ="32px";         
         },500);
        console.log("keydown ==> "+kCode);
    }
    else if(kCode === 83){
        document.getElementById("sound2").play();
        document.getElementById("S").style.color ="yellow";
        document.getElementById("S").style.fontSize ="40px";
        setTimeout(function(){
            document.getElementById("S").style.color ="white";
            document.getElementById("S").style.fontSize ="32px";
         },500);
        console.log("keydown ==> "+kCode);
    }
    else if(kCode === 68){
        document.getElementById("sound3").play();
        document.getElementById("D").style.color ="yellow";
        document.getElementById("D").style.fontSize ="40px";
        setTimeout(function(){
            document.getElementById("D").style.color ="white";
            document.getElementById("D").style.fontSize ="32px";
         },500);
        console.log("keydown ==> "+kCode);
    }

    else if(kCode === 70){
        document.getElementById("sound4").play();
        document.getElementById("F").style.color ="yellow";
        document.getElementById("F").style.fontSize ="40px";
        setTimeout(function(){
            document.getElementById("F").style.color ="white";
            document.getElementById("F").style.fontSize ="32px";
         },500);
        console.log("keydown ==> "+kCode);
    }

    else if(kCode === 71){
        document.getElementById("sound5").play();
        document.getElementById("G").style.color ="yellow";
        document.getElementById("G").style.fontSize ="40px";
        setTimeout(function(){
            document.getElementById("G").style.color ="white";
            document.getElementById("G").style.fontSize ="32px";
         },500);
        console.log("keydown ==> "+kCode);
    }

    else if(kCode === 72){
        document.getElementById("sound6").play();
        document.getElementById("H").style.color ="yellow";
        document.getElementById("H").style.fontSize ="40px";
        setTimeout(function(){
            document.getElementById("H").style.color ="white";
            document.getElementById("H").style.fontSize ="32px";
         },500);
        console.log("keydown ==> "+kCode);
    }

    else if(kCode === 74){
        document.getElementById("sound7").play();
        document.getElementById("J").style.color ="yellow";
        document.getElementById("J").style.fontSize ="40px";
        setTimeout(function(){
            document.getElementById("J").style.color ="white";
            document.getElementById("J").style.fontSize ="32px";
         },500);
        console.log("keydown ==> "+kCode);
    }

    else if(kCode === 75){
        document.getElementById("sound8").play();
        document.getElementById("K").style.color ="yellow";
        document.getElementById("K").style.fontSize ="40px";
        setTimeout(function(){
            document.getElementById("K").style.color ="white";
            document.getElementById("K").style.fontSize ="32px";
         },500);
        console.log("keydown ==> "+kCode);
    }

    else if(kCode === 76){
        document.getElementById("sound9").play();
        document.getElementById("L").style.color ="yellow";
        document.getElementById("L").style.fontSize ="40px";
        setTimeout(function(){
            document.getElementById("L").style.color ="white";
            document.getElementById("L").style.fontSize ="32px";
         },500);
        console.log("keydown ==> "+kCode);
    }



});