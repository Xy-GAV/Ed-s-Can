let open = false;
console.log("hi")



if(document.getElementById('HamburgerIcon').clicked === true)
{
   console.log("the burger is pressed...")

   if(open==false){
    document.getElementById("topbarmobilecontent").style.display = "inline"
    open=true
   }
   if(open==true){
    document.getElementById("topbarmobilecontent").style.display = "none"
    open=false
   }
}