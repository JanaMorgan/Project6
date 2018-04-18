$('button').click(function(){
  //put button stuff here. 
  myFunction();
});

function myFunction() {
    document.getElementById("button").style.color = "blue";
}

window.onload = function() {
  window.setTimeout(fadeout, 5000); //5 seconds
}

function fadeout() {
  document.getElementById('fadeout').style.opacity = '0';
}
