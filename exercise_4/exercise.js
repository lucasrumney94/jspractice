/*
  This is rather simple code, but I am also testing my workflow.
*/
var i = 0;
function onButtonPress() {
  i++;
  document.getElementById("button").innerHTML = i
  var alertText = "I can also create alerts for the user.\n\nYou've pressed the button " + i + " times so far!"
  window.alert(alertText)
  console.log("I can also log information into the console for debug purposes.")
  console.log("The user has pressed the button " + i + " times so far during this visit.");
}
