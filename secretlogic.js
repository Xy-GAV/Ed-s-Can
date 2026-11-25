let name = " "
let Audio = document.getElementById("characterAudio")
// audio.src = "https://www.youtube.com/watch?v=inRXBlYgMGI"
const CDcase = document.getElementById("CDcase")
let playing = false


$("#textinput").on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        submitfunc()
    }
});

// CDcase.onclick = function() {togglePlay()}
CDcase.onclick = function() {
  if(playing===false){
    EmbedController.togglePlay();
    playing=true
   } else{
    EmbedController.togglePlay();
    playing=false
   }

   console.log(playing)
}



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

