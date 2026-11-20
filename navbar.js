let open = false;
console.log("hi")


document.getElementById("HamburgerIcon").onclick = function() {togglenav()}

function togglenav(){
   console.log("the burger is pressed...")

   if(open===false){
    document.getElementById("topbarmobilecontent").style.display = "inline"
    open=true
   } else{
    document.getElementById("topbarmobilecontent").style.display = "none"
    open=false
   }

   console.log(open)
}