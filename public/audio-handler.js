var color;
var creaking = document.getElementById("creaking");
var wind = document.getElementById("wind");
var rain = document.getElementById("rain");

function audioSetColor(inColor){
    color = inColor;
    creaking.pause();
    wind.pause();
    rain.pause();
}

function soundBites(){
    if(color=="Red"){
        var selectedSoundBite = creaking;
        var modifier = 0.995;
    }
    else if(color=="Green"){
        var selectedSoundBite = wind;
        var modifier = 0;
        alert("hi");
    }
    else if(color=="Yellow"){
        var selectedSoundBite = rain;
        var modifier = 0;
        alert("hi")
    }
    else
    {
        return null;
    }

    if(Math.random() > modifier){
        selectedSoundBite.play();
    }
}

function audioInit(){
    var track1 = document.getElementById("track1");
    track1.play();
}