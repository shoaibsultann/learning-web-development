document.getElementById("Btn").onclick = function() {
  var favLang = "php";
  var enteredLang = document.getElementById("inputValue").value;

  if ( favLang == enteredLang){

    document.write("you got it")

  } else {
    document.write("Try Again")
  }

}