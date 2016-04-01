//User reliant function
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

$("button#clear").click(function() {
  $("p#outputList").empty();
});

// business end

var firstNumber = parseInt($("input#numberOne").val());
  console.log(firstNumber);

  for (var i = firstNumber; i >= 1 ; i--) {
    console.log(i);
    if ((i%3 === 0) && (i%15 !== 0)) {
      $("p#outputList").append("PING! ");
    }
    if ((i%5 === 0) && (i%15 !== 0)) {
      $("p#outputList").append("PONG !");
    }
    if (i%15 === 0) {
      $("p#outputList").append("PANGPUNG !");
    }
    else if ((i%15 !== 0) && (i%5 !== 0) && (i%3 !== 0)) {
      $("p#outputList").append(i + ", ");
    }
    if ( (isNaN(firstNumber)) || (firstNumber < 0)){
    alert("THIS INPUT ONLY ACCEPTS NUMBER VALUES GREATER THAN 0");
  }
}
  });
});
