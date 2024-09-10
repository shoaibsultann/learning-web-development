document.getElementById("Btn").onclick = function () {
  var randomNumber = Math.random();

  randomNumber = Math.floor(randomNumber * 10);

  var inputValue = document.getElementById("guessInput").value;

  if(inputValue == randomNumber){
    alert("Yeah! You Got it")
  } else {
    alert("Try Another Number")
  }
  
}