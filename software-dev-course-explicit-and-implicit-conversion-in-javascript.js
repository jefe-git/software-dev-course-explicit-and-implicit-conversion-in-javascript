let result = ("5") - 2;
console.log("The result is: " + result); 

//the implcit conversion would happen here but to make it explicit I use () to convert string into a #, output will be 3 

let input = "false"; 
let isValid = input === "true" ? true : false
// the actual value of the strong false was not 'false' technically beacuse it is a stroing that is filled so we must identify that even though it is false it is truth
console.log("Is Valid: " + isValid);

let age = "25"; 
// javascript sees the + as a string concatenatation operator which adds the 25 in text to the 5 age which will display 255 
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);
//output age will be 30

//Now for my own examples ...

let currentAge = "12";
let ageNextYear = Number(currentAge) + 1;
console.log(ageNextYear); // age should be 13

// this shows explicit conversion from string to number to preform a birhtday calculation

let year = 2025
let strYear = year.toString()
console.log(strYear); 
//output should be "2025" as a text this is also explicit conversion