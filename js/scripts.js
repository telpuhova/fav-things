$(document).ready(function() {
  $("#favinput").submit(function(event) {
    event.preventDefault();
    var inputs=[];

    inputs[0] = $("#input1").val();
    inputs[1] = $("#input2").val();
    inputs[2] = $("#input3").val();
    inputs[3] = $("#input4").val();

    console.log(inputs[1]);
    var newArray=[];
    newArray.push(inputs[1], inputs[0], inputs[2]);
    console.log(newArray);

    $(".result").append("<li>" + newArray[0] + "</li>");
    $(".result").append("<li>" + newArray[1] + "</li>");
    $(".result").append("<li>" + newArray[2] + "</li>");

  });
});
