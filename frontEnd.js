var input;
var definitionElement = document.createElement('p');
definitionElement.id = "definition";

function sendInputToBackEnd(input) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response, request.responseText);
      displayWords(request.response);
    }
  };
  request.open("GET", "/suggestedwords/" + input, true);
  request.send();
}

// document.getElementById("button").addEventListener("click", function() {
//   input = document.getElementById('search').value;
//   if (input.length >= 3) {
//     sendInputToBackEnd(input);
//   }
// });

document.getElementById("search").addEventListener("keyup", function() {
  input = document.getElementById('search').value;
  if (input.length >= 3) {
    sendInputToBackEnd(input);
  }
});


function displayWords(string) {
  var wordArray = string.split(",");
  var HTMLstring = "";
  wordArray.forEach(function(el, i) {
    HTMLstring += "<li id=" + '"wordResults' + i + '"' + ">" + el + "</li>";
  });
  document.getElementById('words').innerHTML = HTMLstring;
  document.getElementById('wordResults0').addEventListener("click", function() {
    var clickedWord = document.getElementById('wordResults0').innerHTML;
    console.log(clickedWord);
    getDefinition(clickedWord);
  });
  document.getElementById('wordResults1').addEventListener("click", function() {
    var clickedWord = document.getElementById('wordResults1').innerHTML;
    console.log(clickedWord);
    getDefinition(clickedWord);
  });
  document.getElementById('wordResults2').addEventListener("click", function() {
    var clickedWord = document.getElementById('wordResults2').innerHTML;
    console.log(clickedWord);
    getDefinition(clickedWord);
  });
  document.getElementById('wordResults3').addEventListener("click", function() {
    var clickedWord = document.getElementById('wordResults3').innerHTML;
    console.log(clickedWord);
    getDefinition(clickedWord);
  });
  document.getElementById('wordResults4').addEventListener("click", function() {
    var clickedWord = document.getElementById('wordResults4').innerHTML;
    console.log(clickedWord);
    getDefinition(clickedWord);
  });
}

function getDefinition(clickedWord) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      console.log("defintionfromserver------->", request.responseText);
      displayDefinition(request.response);
    }
  };
  request.open("GET", "/define/" + clickedWord, true);
  request.send();
}

function displayDefinition(definitionFromServer) {
  definitionElement.innerHTML = "";
  definitionElement.innerHTML = definitionFromServer;
  document.getElementById('words').appendChild(definitionElement);
}
