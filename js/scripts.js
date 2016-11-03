//Business Logic
var numberArray = [];
var highestValue;

function pingPong() {
  for (var i = 1; i <= highestValue; i++) {
    numberArray.push(i)
    if (i % 3 === 0 && i % 5 !== 0) {
      numberArray.splice(i - 1, 1, "ping");
    } else if (i % 5 === 0 && i % 3 !== 0) {
      numberArray.splice(i - 1, 1, "pong");
    } else if (i % 5 === 0 && i % 3 === 0) {
      numberArray.splice(i - 1, 1, "pingpong");
    };

  };
};

// User Interface Logic
$().ready(function() {
  $("button#submit").click(function(event) {
    event.preventDefault();
    numberArray = [];
    $("ul#output").children("li").remove();
    highestValue = $("input#inputtedNumber").val();
    pingPong();
    var value = $("input#inputtedNumber").val();
    for (var i = 0; i < value; i++) {
      $("ul#output").append("<li>" + numberArray[i] + "</li>")
    };

    });



});
