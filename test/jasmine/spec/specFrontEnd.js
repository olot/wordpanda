describe("user interface", function() {
  //
  // it("clicking button should do something", function(done) {
  //
  //   var clicked;
  //   document.getElementById("button").addEventListener("click", function() {
  //     clicked = "clicked";
  //   });
  //   document.getElementById("button").click();
  //   expect(clicked).toBe("clicked");
  //   done();
  // });
  //
  //
  // it("user input is stored in a variable", function() {
  //   document.getElementById("search").value = "boa";
  //   document.getElementById("button").click();
  //
  //   expect(input).toBe("boa");
  // });

  it("releasing a key after you have typed more than 3 letters should store user input into a variable", function(done) {
    var userInput;
    document.getElementById("search").value = "boa";
    document.getElementById("button").addEventListener("click", function() {
      userInput = document.getElementById("search").value;
      console.log(userInput);
    });
    document.getElementById("button").click();
    setTimeout(function() {
      expect(userInput).toBe("boa");
      done();
    }, 0);
  });

  it("releasing a key after you have typed more than 3 letters should fire off a callback function", function(done) {
    var testInput;
    function callback() {
      testInput = "called";
    }
    document.getElementById("button").addEventListener("click", function() {
      return callback();
    });
    document.getElementById("button").click();
    setTimeout(function() {
      expect(testInput).toBe("called");
      done();
    }, 0);
  });

  it("calling sendInputToBackEnd should return a string of words", function() {
    var returnedString = sendInputToBackEnd();
    var typeOf = typeof returnedString;
    expect(typeOf).toBe("string");
  });

  // it("calling displayWords should add the words to the DOM", function() {
  //   var returnedString = sendInputToBackEnd();
  //   displayWords(returnedString);
  //   var elementValue = document.getElementById('words').innerHTML;
  //   expect(elementValue).toBe(returnedString);
  // });

  it("calling display words should add each word as a li element to an ul element", function() {
    var returnedString = sendInputToBackEnd();
    displayWords(returnedString);
    var liInDOM = (document.getElementById('words').innerHTML.indexOf('</li>') != -1);
    expect(liInDOM).toBe(true);
  });

  it("clicking on a li element should fire off a definition function which will take the word and return its definition", function() {
    var liElement = document.getElementById("wordResults0");
    liElement.click();
    var wordClicked = liElement.innerHTML;
    var definition = getDefinition(wordClicked);
    expect(typeof definition).toBe("string");
  });

  it("calling displayDefinition should append the definition to the DOM", function() {
    var definition = getDefinition();
    displayDefinition(definition);
    var  defintionInDOM = (document.getElementById('words').innerHTML.indexOf('<p id="definition">') != -1);
    expect(defintionInDOM).toBe(true);
  });

  it("calling displayDefinition should append the definition to the DOM", function() {
    var definition = getDefinition();
    displayDefinition(definition);
    var  defintionInDOM = (document.getElementById('words').innerHTML.indexOf('<p id="definition">') != -1);
    expect(defintionInDOM).toBe(true);
  });


});
