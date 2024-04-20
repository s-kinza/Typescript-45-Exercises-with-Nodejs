"use strict";
// Define variable
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["Apple", "Banana", "orange"];
// Test for equality and inequality with strings
console.log("\nIs apple is equall to apple");
console.log(apple == "apple");
console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");
// test using LowerCase function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
// numerical tests
// Equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
// Not Equal to
console.log("\nIs ten is not equal to tewenty?");
console.log(ten != twenty);
// Greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);
// Less than 
console.log("\nIs twenty is less than ten? ");
console.log(twenty < 10);
// Greater than and Equal to
console.log("\nIs ten is greator than or equal to 5?");
console.log(ten >= 5);
// Less than or equal to
console.log("\nIs twenty is less than or equal to 10?");
console.log(twenty <= 10);
// test using "and" & "or" operators
// using && (AND)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
// Using && || (OR
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 != 20);
// test whether an item is include in Array
console.log("\nIs orange include in my fruits array");
console.log(fruits.includes("orange"));
// not include
console.log("\nIs orange not include in my fruits array");
console.log(!fruits.includes("orange"));
