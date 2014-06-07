function soundBites(color){
    if(color=="red"){
        var soundBite = document.getElementById("creaking");
        var modifier = 0.98;
    }
    else if(color=="green"){
        var soundBite = document.getElementById("wind");
        var modifier = 0;
    }
    else if(color=="yellow"){
        var soundBite = document.getElementById("rain");
        var modifier = 0;
    }
    else
    {
        return null;
    }

    if(Math.random() > modifier){
        soundBite.play();
    }
}

function audioInit(){
    var track1 = document.getElementById("track1");
    track1.play();
}