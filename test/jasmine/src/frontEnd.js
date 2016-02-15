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
  console.log(input);
  if(input.length >= 3) {
    sendInputToBackEnd(input);
  }

});

function displayWords(string) {
  var wordArray = string.split(",");
  var HTMLstring = "";
  wordArray.forEach(function(el){
    HTMLstring += "<li>" + el + "</li>";
  });
  document.getElementById('words').innerHTML = HTMLstring;
}
