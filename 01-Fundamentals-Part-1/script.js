let js = 'amazing';
console.log(40 + 8 + 23 - 10);

// Console.Log prints to browser console
console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);

/*
 Block Comment
*/

let javascriptIsFun = true;
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 34);
console.log(typeof firstName);

firstName = 12;
// Can assign new value without "let" to previously declared variables

// both output "undefined" to console
let year;
console.log(year);
console.log(typeof year);

const birthYear = 1991;
// cannot reassign const variable
// use const by default

var job = "programmer";
job = "teacher";
// var can be mutated as well
// var is function scoped

console.log(2 * 2, 4 + 4, 10 * 3);
const firstName2 = "John";
const lastName = "Chep";
console.log(firstName2 + " " + lastName);

// template literals for strings
// use ``
const jonasNew = `I'm ${firstName}, a ${lastName}`;
console.log(jonasNew);

if (1 === 1) {
    console.log("1=1");
}

// Type Conversion

const inputYeat = '1991';
console.log(inputYear + 18);
// Concatinates both ints and strings

console.log(Number(inputYear));
// can use Number on string too, but it gives am invalid number as a result

console.log(String(23));

//type coercion

console.log('23' - '10' - 3);
// results in 10
console.log(3 + 4 + 5 + '5');
// results to 125

// falsy and truthy values are values that are not booleans unless you attempt to convert them
// 5 falsy values: 0, '', undefined, null NaN
// NaN = Not a Number

console.log(Boolean(0));

const money = 0;

if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job");
}

let height;

if (height) {
    console.log("Height is defined");
} else {
    console.log("Height is UNDEFINED");
}

// says undefined even if height = 0


// can put if statements on one line
if (height === 2) console.log("Height = 2");

// === is for strict (both type and value)
// == is for loose (just value)

// prompt user input
const favourite = prompt("What's your favourite number?");

console.log(favourite);
/*
&& for AND logic
|| for OR logic
! for NOT loic
*/


// switch statements 
const day = "monday";
switch (day) {
    case "monday":
        console.log("monday");
        break;
    case "tuesday":
        console.log("tuesday");
        break;
    case "wednesday":
        console.log("wednesday");
        break;
    case "thursday":
        console.log("thursday");
        break;
    case "friday":
        console.log("friday");
        break;
    case "saturday":
        console.log("saturday");
        break;
    case "sunday":
        console.log("sunday");
        break;
    default:
        console.log("not a valid day");
        break;
}

// conditions
// this is an expression unlike an if statement
age >= 18 ? console.log("I am legal to drink wine") : console.log("I cannot drink wine");

mean =>
    mean = (arr) => { acc = arr.reduce((acc, x) => { return { sum: acc.sum + x, count: acc.count + 1 } }, { sum: 0, count: 0 }); return acc.count / acc.sum } 
