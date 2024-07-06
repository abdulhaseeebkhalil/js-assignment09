// Take 5 numbers from user in the from of array and add them all

// var numbers = [];
// for(var i = 0; i < 5; i++){
//     numbers[i] = +prompt("Enter the number: ")
// }

// var sum = 0;
// for(var i = 0; i < numbers.length; i++){
//     sum += numbers[i];
// }

// console.log("The sum of the numbers is: " + sum);


var numbers = [];
for (var i = 0; i < 5; i++) {
    numbers[i] = +prompt("Enter the number: ");
}

var sum = 0;
var largest = numbers[0];

for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("The sum of the numbers is: " + sum);
console.log("The largest number is: " + largest);
