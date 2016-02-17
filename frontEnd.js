var input;
var definitionElement = document.createElement('p');
definitionElement.id = "definition";
var definitionTitle = document.createElement('h2');


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
  console.log(wordArray);
  var HTMLstring = "";

  wordArray.forEach(function(el, i) {
    var id = '"wordResults' + i + '"';
    HTMLstring += "<a href='#definition'><li class='liElement' id=" + id + ">"+ el + "</li><a>";
    console.log("-------",HTMLstring);
  });
  document.getElementById('words').innerHTML = HTMLstring;

  var liArray = document.getElementsByClassName("liElement");
  console.log("li Array ----",liArray);

  function clickHandler(e) {
    for (i=0; i<liArray.length; i++){
      liArray[i].classList.remove('active');
    }
    var clickedWord = e.target.innerHTML;
    e.target.classList.add('active');
    getDefinition(clickedWord);
  }

  for (var i = 0; i < liArray.length; i++) {
    liArray[i].addEventListener("click", clickHandler);
  }
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
  definitionTitle.innerHTML = "";
  definitionTitle.innerHTML = 'Definition';
  definitionElement.innerHTML = definitionFromServer;
  document.getElementById('definition').className = "";
  document.getElementById('definition').appendChild(definitionTitle);
  document.getElementById('definition').appendChild(definitionElement);
}
