// PRINT MULTIPLICATION TABLE
// take a number from a user and print a table upto 10

var number = +prompt("Enter a number: ");

for (var i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}
