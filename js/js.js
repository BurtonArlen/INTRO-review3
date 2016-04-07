// Logic function
var results = [];
var finalString = "";
var firstNumber = parseInt($("input#numberOne").val());
function checkValid(){
  var firstNumber = parseInt($("input#numberOne").val());
  if ((isNaN(firstNumber)) || (firstNumber < 0)) {
    results.push("INVALID INPUT! PLEASE ENTER A NUMBER GREATER THAN 0!!!!");
  }
}
function pingPongMath(){
  var firstNumber = parseInt($("input#numberOne").val());
  for (var i = firstNumber; i >= 1 ; i--) {
    if ((i%3 === 0) && (i%15 !== 0)) {
      results.push('PING!');
    } if ((i%5 === 0) && (i%15 !== 0)) {
      results.push('PONG!');
    } if (i%15 === 0) {
      results.push('PINGPONG!');
    } if ((i%15 !== 0) && (i%5 !== 0) && (i%3 !== 0)) {
      results.push(i);
    }
  }
  convertArray();
}
function convertArray(){
  finalString = results.join(", ");
}
//User function
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("p#outputList").empty();
    checkValid();
    pingPongMath();
    $("input#numberOne").val("");
    $("p#outputList").append(finalString);
    results = [];
    finalString = [];
  });
});
