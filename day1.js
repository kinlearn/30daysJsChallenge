"use strict";
/*
Day 1 : Variables and Data Types
Date : 13/07/2024
*/

/*

Activity 1 : Variable Declaration
- Task 1 : Declare a variable using var, assign it a number and log the value to the console
- Task 2 : Declare a variable using let, assign it a string and log the value to the console
*/

var num = -32.42;
console.log(num);

let str = "-32.42 is a string";
console.log(str);

/*
Activity 2 : Constant Declaration
- Task 3 : Declare a variable using const, assign it a boolean value and log the value to the console
*/

const isAwesome = true;
console.log(isAwesome);

/*
Activity 3 : Data Types
- Task 4 : Create variables of different data types (number, string, boolean, object, array) and log 
each variable's type using the typeof operator
*/

const anum = 3.14,
  astr = "a string",
  abool = false,
  anobj = { a: a, b: b },
  anarr = ["a", "new", "array"];
console.log(typeof anum);
console.log(typeof astr);
console.log(typeof abool);
console.log(typeof anobj);
console.log(typeof anarr);

/*
Activity 4 : Reassigning Variables
• Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
*/

let aVal = "ajinkya";
console.log(aVal);
aVal = "is smart";
console.log(aVal);
aVal = true;
console.log(aVal);

/*
Activity 5: Understanding const
• Task 6: Try reassigning a variable declared with const and observe the error.
*/

const aConstant = "Rock";
aConstant = "bottom";

/*
Feature Request:
1. Variable Types Console Log: Write a script that declares 
variables of different data types and logs both the value and type of each variable to the console.
2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const
 when it comes to reassignment.
*/

/*
Achievement:
By the end of these activities, you will:
• Know how to declare variables using var, let, and const. ✔️
• Understand the different data types in JavaScript. ✔️
• Be able to use the typeof operator to identify the data type of a variable. ✔️
• Understand the concept of variable reassignment and the immutability of const variables. ✔️
*/
