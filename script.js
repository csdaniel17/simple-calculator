var operator;
//use currentNumber variable to capture the value inputed
var currentNumber;
var display = "";

$(function () {
  //when a number is clicked
  $(".number").click(function () {
    //add a digit to the display
    var digit = $(this).text();
    display += digit;
    $("#display").val(display);
  });
  //when an operator is clicked
  $(".operator").click(function () {
    //store the number
    currentNumber = Number(display)
    var newNumber = Number(display);
    if (currentNumber && operator) {
      //evaluate the operator upon the existing number and the new number
      if (operator === "+") {
        currentNumber = currentNumber + newNumber;
      } else if (operator === "-") {
        currentNumber = currentNumber - newNumber;
      } else if (operator === "*") {
        currentNumber = currentNumber * newNumber;
      } else if (operator === "/") {
        currentNumber = currentNumber / newNumber;
      } else {
        currentNumber = newNumber;
      }
    }
    //get name of operator clicked
    operator = $(this).text();
    //clear display when clicked in order to not concatenate numbers
    display = "";
    $("#display").val(display);

  });

  //when "=" is clicked
  $(".evaluate").click(function () {
    //parse the displayed number (new number)
    var newNumber = Number(display);
    //if there is an existing operator and existing number
    if (currentNumber && operator) {
      //evaluate the operator upon the existing number and the new number
      if (operator === "+") {
        currentNumber = currentNumber + newNumber;
      } else if (operator === "-") {
        currentNumber = currentNumber - newNumber;
      } else if (operator === "*") {
        currentNumber = currentNumber * newNumber;
      } else if (operator === "/") {
        currentNumber = currentNumber / newNumber;
      } else {
        currentNumber = newNumber;
      }
    }
    //unset the operator
    operator = null;
    //update the display to show the result
    display = currentNumber;
    $("#display").val(display);
  });
  //when "C" is clicked
  $(".clear").click(function () {
    //clear the display
    display = "";
    //unset the operator
    operator = null;
    //unset the current number
    currentNumber = null;
    //update display
    $("#display").val(display);
  });
});
