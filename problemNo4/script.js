// function reverseString(str) {
//     var reversedStr = '';

//     // Loop through the string from the end to the beginning
//     for (var i = str.length - 1; i >= 0; i--) {
//         reversedStr += str[i];
//     }

//     // Print the reversed string
//     console.log(reversedStr);
// }

// // Take input from the user
// var inputString = prompt("Enter a string to reverse:");
// reverseString(inputString);


document.getElementById('reverseForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the input string
    let inputString = document.getElementById('inputString').value;

    // Reverse the string using a for loop
    let reversedStr = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedStr += inputString[i];
    }

    // Display the reversed string in a popup
    alert("Reversed String: " + reversedStr);
});
