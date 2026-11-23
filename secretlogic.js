let name = " "

$("#textinput").on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        submitfunc()
    }
});

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
