/*
Day 2 : Operators
Date : 14/07/2024
*/

/*
Activity 1: Arithmetic Operations
• Task 1: Write a program to add two numbers and log the result to the console.
• Task 2: Write a program to subtract two numbers and log the result to the console.
• Task 3: Write a program to multiply two numbers and log the result to the console.
• Task 4: Write a program to divide two numbers and log the result to the console.
• Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
*/

// Task 1
let num1 = -53,
  num2 = 43;
let sumNum = num1 + num2;
console.log(`Sum of ${num1} and ${num2} is ${sumNum}`);

// Task 2
let subtractNums = num1 - num2;
console.log(`Subtraction of ${num1} and ${num2} is ${subtractNums}`);

// Task 3
let multiplyNums = num1 * num2;
console.log(`Multiplication of ${num1} and ${num2} is ${subtractNums}`);

// Task 4
let divideNums = num1 / num2;
console.log(`Division of ${num1} and ${num2} is ${subtractNums}`);

// Task 5
let remainderNums = num1 % num2;
console.log(`Reminder of ${num1} and ${num2} is ${subtractNums}`);

/*
Activity 2: Assignment Operators
• Task 6: Use the += operator to add a number to a variable and log the result to the console.
• Task 7: Use the -- operator to subtract a number from a variable and log the result to the console.
*/

// task 6
sumNum += num2;
console.log(sumNum);

// task 7
subtractNums -= num2;
console.log(subtractNums);

/*
Activity 3: Comparison Operators
• Task 8: Write a program to compare two numbers using > and < and log the result to the console.
• Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
• Task 10: Write a program to compare two numbers using == and === and log the result to the console.
*/

// Task 8
let isNum1larger = num1 > num2;
console.log(isNum1larger);
let isNum1Smaller = num1 < num2;
console.log(isNum1Smaller);

// Task 9
let isNum1largerOrEqual = num1 >= num2;
console.log(isNum1largerOrEqual);
let isNum1SmallerOrEqual = num1 <= num2;
console.log(isNum1SmallerOrEqual);

// Task 10
let isEqual = num1 == +num2;
console.log(isEqual);
let isStrictlyEqual = num1 == +num2;
console.log(isEqual);

/*
Activity 4: Logical Operators
• Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
• Task 12: Write a program that uses the operator to combine two conditions and log the result to the console.
• Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
*/

// Task 11
let bothNumsTrue = num1 && num2;
console.log(bothNumsTrue);
// Task 12
let anyOneNumTrue = num1 && num2;
console.log(bothNumsTrue);

// Task 13
let age = 17,
  canDrive = true,
  isDrunk = false;
const allowLicence = age >= 18 && canDrive && !isDrunk;
console.log(allowLicence);

/*
Activity 5: Ternary Operator
• Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
*/

const isPositive = num >= 0 ? "Positive" : "Negative";
console.log(`Task 14 : num = ${num} isPositive = ${isPositive}`);

/*
Feature Request:
1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results. 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
*/

/*
Achievement:
By the end of these activities, students will:
• Understand and use arithmetic operators to perform basic calculations.
• Use assignment operators to modify variable values.
• Compare values using comparison operators.
• Combine conditions using logical operators.
• Use the ternary operator for concise conditional expressions.

*/
