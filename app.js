function getColor() {
  //generating a random hexadecimal number and slice it to remove . and get 6 characters
  return '#' + Math.random().toString(16).slice(2,8);
}
//sets background color style
function setBackground(){
  var background = getColor();
  document.body.style.background =  background;
  document.getElementById("color").innerHTML = getColor();
}

// runs function on click
document.body.onkeyup = function(e){
  if(e.keyCode == 32){
    setBackground();
    console.log(getColor());
  }
}
