var input;

function sendInputToBackEnd(input) {
  // var request = new XMLHttpRequest();
  // request.onreadystatechange = function() {
  //   if (request.readyState === 4 && request.status === 200) {
  //     console.log(request.response, request.responseText);
  //     document.getElementById('words').innerHTML = request.response;
  //   }
  // };
  // request.open("GET", "/define/" + input, true);
  // request.send();
  return "help,helical,helium,hello";
}

document.getElementById("button").addEventListener("click", function() {
  input = document.getElementById('search').value;
  if(input.length >= 3) {
    sendInputToBackEnd(input);
  }
});


function displayWords(string) {
  var wordArray = string.split(",");
  var HTMLstring = "";
  wordArray.forEach(function(el, i){
    HTMLstring += "<li id=" + '"wordResults' + i +'"' + ">" + el + "</li>";
  });
  document.getElementById('words').innerHTML = HTMLstring;
  document.getElementById('wordResults0').addEventListener("click", function(){
    var clickedWord = document.getElementById('wordResults0').innerHTML;
    console.log(clickedWord);
    getDefinition(clickedWord);
  });
  document.getElementById('wordResults1').addEventListener("click", function(){
    var clickedWord = document.getElementById('wordResults1').innerHTML;
    console.log(clickedWord);
    getDefinition(clickedWord);
  });
  document.getElementById('wordResults2').addEventListener("click", function(){
    var clickedWord = document.getElementById('wordResults2').innerHTML;
    console.log(clickedWord);
    getDefinition(clickedWord);
  });
  document.getElementById('wordResults3').addEventListener("click", function(){
    var clickedWord = document.getElementById('wordResults3').innerHTML;
    console.log(clickedWord);
    getDefinition(clickedWord);
  });
}

function getDefinition(clickedWord){
  // var request = new XMLHttpRequest();
  // request.onreadystatechange = function() {
  //   if (request.readyState === 4 && request.status === 200) {
  //     console.log(request.response, request.responseText);
  //   }
  // };
  // request.open("GET", "/define/" + clickedWord, true);
  // request.send();
  return "the definition";
}

function displayDefinition(definitionFromServer) {
  var definitionElement = document.createElement('p');
  definitionElement.id = "definition";
  definitionElement.innerHTML = definitionFromServer;
  document.getElementById('words').appendChild(definitionElement);
}
