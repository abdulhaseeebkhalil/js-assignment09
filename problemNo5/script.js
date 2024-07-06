// Prompt the user to enter a number
var inputNumber = parseInt(prompt("Enter a number to calculate its factorial:"));

// Initialize the factorial result
var result;

if (inputNumber < 0) {
    result = "Invalid input! Please enter a non-negative integer.";
} else if (inputNumber === 0 || inputNumber === 1) {
    result = 1;
} else {
    result = 1;
    for (var i = 2; i <= inputNumber; i++) {
        result *= i;
    }
}

// Display the result in an alert
alert("Factorial: " + result);
