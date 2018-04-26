var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var tempo;
output.innerHTML = slider.value;// Display the default slider value
var audio = document.getElementById("audio");


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    tempo = (this.value/100) + 1;
    audio.playbackRate = tempo;
}