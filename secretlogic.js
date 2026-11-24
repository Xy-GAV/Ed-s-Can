let name = " "
let audio = document.createElement("audio")
audio.src = "https://www.youtube.com/watch?v=inRXBlYgMGI"
const CDcase = document.getElementsByClassName("CDcase")
let playing = false

$("#textinput").on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        submitfunc()
    }
});

CDcase.onclick = function() {togglePlay()}



function submitfunc(){
  name = document.getElementById("textinput").value;
  //if it's empty, name = nothing instead of the last input
  if(document.getElementById("textinput").value === ""){
    name=" "
  }
  console.log(name);
  changeScene();
}

function changeScene(){
  if(name.toLowerCase()==="hypothesis" || name.toLowerCase()==="hypothesis sol" || name.toLowerCase()==="hypothesis, sol"){
  console.log("Hype scene")
  }
  else if(name.toLowerCase()==="cardinal" || name.toLowerCase()==="cardinal direction" || name.toLowerCase()==="cardinal direction, pol" || name.toLowerCase()==="son of polaris"){
    console.log("Cardinal scene")
  }
}

function togglePlay(){
  if(playing===false){
    playAudio()
    playing=true
   } else{
    pauseAudio()
    playing=false
   }

   console.log(playing)
}

function playAudio(){
  audio.play()
}

function pauseAudio(){
  audio.pause()
}