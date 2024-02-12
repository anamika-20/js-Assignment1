// Enforcing stricter parsing and error handling on the code at runtime
"use strict";

// Function for performing addition
function add(num1, num2) {
  return num1 + num2;
}

// Function for performing subtraction
function subtract(num1, num2) {
  return num1 - num2;
}

// Function for performing multiplication
function multiply(num1, num2) {
  return num1 * num2;
}

// Function for performing division
function divide(num1, num2) {
  // Checking if dividing by zero
  if (num2 === 0) {
    // Throwing an error if trying to divide by zero
    throw new Error("Cannot divide by zero");
  }
  return num1 / num2;
}

// Function for handling calculation
function calculate() {
  try {
    // Getting user inputs
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;

    var result;

    // Checking for invalid inputs
    if (isNaN(num1) || isNaN(num2)) {
      // Throwing an error if inputs are not valid numbers
      throw new Error("Invalid input. Please enter valid numbers.");
    }

    // Performing calculation based on the operator
    switch (operator) {
      case "add":
        result = add(num1, num2);
        break;
      case "subtract":
        result = subtract(num1, num2);
        break;
      case "multiply":
        result = multiply(num1, num2);
        break;
      case "divide":
        result = divide(num1, num2);
        break;
      default:
        // Throwing an error for an invalid operator
        throw new Error("Invalid operator");
    }

    // Checking for overflow and underflow
    if (!isFinite(result)) {
      // Throwing an error if the result is too large or too small
      throw new Error("Result is too large or too small to be represented");
    }

    // Displaying the result
    document.getElementById("result").innerText = "Result: " + result;
  } catch (error) {
    // Handling any errors
    document.getElementById("result").innerText = "Error: " + error.message;
  }
}

// Function for resetting the calculator
function reset() {
  // Clearing the input fields and result display
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").innerText = "";
}
