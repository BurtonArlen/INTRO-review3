//User reliant function
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();



// business end
    var firstNumber = parseInt($("input#numberOne").val());
      console.log(firstNumber);

    if ((isNaN(firstNumber)) || (firstNumber < 0)){
      $("#outputList").append( "invalid input" );
    } else {
      for (var count = firstNumber; count = 1; count--){

        $("#outputList").append(count + ", ");
      }
    }

  });
});
