// Use typeof to Check the Type of a Variable

/* You can use typeof to check the data structure, 
or type, of a variable. This is useful in debugging 
when working with multiple data types. If you think 
you're adding two numbers, but one is actually a string, 
the results can be unexpected. Type errors can lurk 
in calculations or function calls. Be careful especially 
when you're accessing and working with external data in 
the form of a JavaScript Object Notation (JSON) object.

Here are some examples using typeof:

console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});
In order, the console will display the strings string, 
number, object, and object.

JavaScript recognizes seven primitive (immutable) data types: 
Boolean, Null, Undefined, Number, String, Symbol (new with ES6),
 and BigInt (new with ES2020), and one type for mutable items: 
 Object. Note that in JavaScript, arrays are technically a type of object.

 //EXERCISE
Add two console.log() statements to check the typeof each of 
the two variables seven and three in the code.*/


//SOLUTION

//Use console.log(typeof variable) to display the type of 
//the desired variable.


let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven);
console.log(typeof three);



//TOPIC  Catch Misspelled Variable and Function Names

/* The console.log() and typeof methods are the two primary
 ways to check intermediate values and types of program output.
  Now it's time to get into the common forms that bugs take.
   One syntax-level issue that fast typers can commiserate 
   with is the humble spelling error.

Transposed, missing, or mis-capitalized characters in a 
variable or function name will have the browser looking 
for an object that doesn't exist - and complain in the 
form of a reference error. JavaScript variable and function 
names are case-sensitive.


//EXERCISE
Fix the two spelling errors in the code so the
 netWorkingCapital calculation works.*/

/*
let receivables = 10;
let payables = 8;
let netWorkingCapital = recievables - payable;
console.log(`Net working capital is: ${netWorkingCapital}`);*/

/*Hint 1
Check the spelling of the first two variables against when it is used. Also, reading a text backwards can help with detecting spelling errors. Make sure to check for these common spelling mistakes in English:

vowel confusion (a instead of e, i instead of a)
i before e
ous vs os
double letters if certain one-syllable words adding a suffix (like “big” to “bigger”)
Solutions
Solution 1 (Click to Show/Hide)
// 'i' and 'e' swapped in "receivables" and missing 's' in "payables"
*/

//DEBUGGING checked the wrong spellings

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);


//EXERCISE TWO DEBUG the spelling

let women = 10;
let men = 5;
/*
let numberOfGenderAttendees = womn - mn;
console.log(`Number of Gender Attendees is: ${numberOfGenderAttendees}`);
*/

//DEBUG

let numberOfGenderAttendees = women - men;
console.log(`Number of Gender Attendees is: ${numberOfGenderAttendees}`);



// TOPIC   Catch Unclosed Parentheses, Brackets, Braces and Quotes
/*Another syntax error to be aware of is that all opening 
parentheses, brackets, curly braces, and quotes have a closing
 pair. Forgetting a piece tends to happen when you're editing
  existing code and inserting items with one of the pair types.
   Also, take care when nesting code blocks into others, 
   such as adding a callback function as an argument 
   to a method.*/



//EXERCISE 
/*
Your code should fix the missing piece of the array.
Waiting:Your code should fix the missing piece
 of the .reduce() method. The console output should
  show that Sum of array values is: 6.*/

  //QUESTION DEBUG
/*
  let myArray = [1, 2, 3;
    let arraySum = myArray.reduce((previous, current =>  
        previous + current);
    console.log(`Sum of array values is: ${arraySum}`); */

//SOLUTION

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);



//EXERCISE

let x = 7;
let y = 9;
let result = "to come";

if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);




//EXERCISE




/*Hint 1
Remember to add opening and closing parentheses when 
calling a function 

FunctionName + ();*/


//DEBUG 
/*
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine;
console.log(result);

*/

//ANSWER
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let answer = getNine();
console.log(answer);





//EXERCISE 
/*

TOPIC  Catch Arguments Passed in the
 Wrong Order When Calling a Function

The above function is used to raise the base number b to the 
power of the exponent e.
The function must be called specifically with variables in 
the correct order. Otherwise the function will mix up both 
variables and return an undesired answer.
Make sure the variable power is implementing the raiseToPower 
function correctly.


function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);

*/


//DEBUG SOLUTION
function raiseToPower(b, e) {
    return Math.pow(b, e);
  }
  
  let base = 2;
  let exp = 3;
  
  
  let power = raiseToPower(base, exp);
  console.log(power);






  // TOPIC Catch Off By One Errors When Using Indexing


  /*
JavaScript indexing starts at zero, not one, which means 
the last index is always one less than the length of the item. 
If you try to access an index equal to the length, the program 
may throw an "index out of range" reference error or print 
undefined.

When you use string or array methods that take index 
ranges as arguments, it helps to read the documentation 
and understand if they are inclusive (the item at the given 
index is part of what's returned) or not. Here are some 
examples of off by one errors:

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  console.log(alphabet[k]);
}

The first example here loops one too many times, 
and the second loops one too few times (missing the 
    first index, 0). The third example is correct.

Fix the two indexing errors in the following function 
so all the numbers 1 through 5 are printed to the console.
*/


//DEBUG HINTS

/*
Your code should set the initial condition of the 
loop so it starts at the first index.
Waiting:Your code should fix the initial condition 
of the loop so that the index starts at 0.
Waiting:Your code should set the terminal condition 
of the loop so it stops at the last index.
Waiting:Your code should fix the terminal condition of
 the loop so that it stops at 1 before the length.

*/

//DEBUG THIS

/*

function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 1; i <= len; i++) {
  // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();

*/

function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Only change code below this line
    for (let i = 0; i < len; i++) {
    // Only change code above this line
      console.log(firstFive[i]);
    }
  }
  
  countToFive();


  


  //TOPIC Catch Off By One Errors When Using Indexing 17
/*Problem Explanation
Due to the way JavaScript indexes work firstFive has five elements but they are indexed from 0 to 4!

console.log(len); // 5
console.log(firstFive[0]); // 1
/*
console.log(firstFive[4]); // 5
console.log(firstFive[5]); // undefined
That should give you enough to grasp the limits of firstFive. Direct your attention to the loop. What does it do? You could try debugging it to find out!

Debugging

You are given this code:

for (let i = 1; i <= len; i++) {
  console.log(firstFive[i]);
}
To debug this piece of code, use console.clear(). What would be the best place for it? The answer is right before the for statement!

console.clear();
for (let i = 1; i <= len; i++) {
  console.log(firstFive[i]);
}
Console output:

  Console was cleared.
  2
  3
  4
  5
  undefined
Analysis


Examine the output. Under these conditions the loop first prints the element positioned at 1… which is 2! It also tries to print the element indexed at 5 which is undefined.

This can be considered the point of this challenge. Keep console.log() and console.clear() present. They will help you understand how your code works.

Solutions
Solution 1 (Click to Show/Hide)
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Fix the line below
  for (let i = 0; i < len; i++) {
    // Do not alter code below this line
    console.log(firstFive[i]);
  }
}

*/
/*
Code Explanation
The most straightforward way to fix this is to alter the for() conditions.
Make i start at 0. Also the loop should not be executed for i == 5. In other words, 
the relationship between i and len should be false when i == 5.
 That can be achieved by using 
 i < len (Is 5 < len? false, an and the loop won’t be executed!)*/



 // TOPIC Prevent Infinite Loops with a Valid Terminal Condition

 /*Loops are great tools when you need your 
 program to run a code block a certain number 
 of times or until a condition is met, but they
  need a terminal condition that ends the 
  looping. Infinite loops are likely to freeze 
  or crash the browser, and cause general
   program execution mayhem, which no one wants.*/


  /*
  The myFunc() function contains an infinite loop
   because the terminal condition i != 4 will never
    evaluate to false (and break the looping) - 
    i will increment by 2 each pass, and jump right
    over 4 since i is odd to start. Fix the comparison 
operator in the terminal condition so the loop only 
runs for i less than or equal to 4.
  */


/*
function myFunc() {
  for (let i = 1; i != 4; i += 2) {
    console.log("Still going!");
  }
}
*/

//DEBUG 
function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}
