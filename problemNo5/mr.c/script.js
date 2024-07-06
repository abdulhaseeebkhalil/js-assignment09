document.getElementById('factorialForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input number
    let inputNumber = parseInt(document.getElementById('inputNumber').value);

    // Function to calculate factorial
    function calculateFactorial(num) {
        if (num < 0) {
            return "Invalid input! Please enter a non-negative integer.";
        } else if (num === 0 || num === 1) {
            return 1;
        } else {
            let factorial = 1;
            for (let i = 2; i <= num; i++) {
                factorial *= i;
            }
            return factorial;
        }
    }

    // Calculate the factorial
    let result = calculateFactorial(inputNumber);

    // Display the result
    document.getElementById('result').textContent = "Factorial: " + result;
});
