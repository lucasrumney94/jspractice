var step = 0

function onButtonPress() {
  if (step===0){
    document.getElementById("paragraph").innerHTML = "Oh no! You pressed the button!";
    step++;
  }
  else if (step===1){
    document.getElementById("paragraph").innerHTML = "Please stop pressing the button!";
    step++;
  }
  else{
    document.getElementById("paragraph").innerHTML = "You have no idea what this button does!";
    step=0
  }
}
