// var x = 1;

// Three ways to show your output

// alert(x);

// document.write(x)

// console.log(x)

// *** Usage of variable in functions: ***


document.getElementById('Btn').onclick = function (){
  var textEntered = "";

  textEntered = document.getElementById('inputValue').value;
  document.getElementById('newText').innerHTML = textEntered;
}
