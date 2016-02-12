function sendInputToBackEnd(input) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response, request.responseText);
      document.getElementById('words').innerHTML = request.response;
    }
  };
  request.open("GET", "/define/" + input, true);
  request.send();
}

document.getElementById("button").addEventListener("click", function() {
  var input = document.getElementById('search').value;
  console.log(input);
  if(input.length >= 3) {
    sendInputToBackEnd(input);
  }
});
