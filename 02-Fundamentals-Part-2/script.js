'use strict';

// strict mode helps debug (shows error in console)

let hasDriversLicense = false;
const passTest = true;

//if (passTest) hasDriverLicense = true;

if (hasDriversLicense) console.log("I can drive :D");

function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking the function

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    console.log(applePieces, orangePieces);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

fruitProcessor(5, 0);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// function delcarition

const age1 = calcAge1(1991);
function calcAge1(birthYear) {
    return 2037 - birthYear;

}

console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);

// can initiate variable priot to function declaration, but cannot priot function expression

// Arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}
// can only ommit return in one liners using arrow functions

console.log(yearsUntilRetirement(1991, 'Jonas'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// Arrays
const friends = ['Michael', 'Steven', 'Peter', 2022, ['Michael', 'Steven', 'Peter']];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends.length);

friends[2] = 'Jay';
console.log(friends);

// puts at back
friends.push('John');
// puts at front
friends.unshift('Jack');

friends.pop(friends);

friends.indexOf('Steven');

// Objects
const jonas = {
    firstName: 'Jonas',
    lastName: 'Chep',
    birthYear: 1991,
    friends: ['Michael', 'Steven', 'Peter'],
    hasDriversLicense: true,

    /*
    calcAge: function (birthYear) {
        return 2037 - birthYear;
    }
    */
    calcAge: function () {
        return 2037 - this.birthYear;
    }
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';

// works the same as above
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, and friends');
console.log(jonas[interestedIn]);

jonas.location = "Portugal";
jonas['car'] = 'Toyota';
console.log(jonas);

//console.log(jonas.calcAge(1991));
console.log(jonas.calcAge());

// for loop

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repitition ${rep}`);
}

// while loop

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repitition ${rep}`);
    rep++;
}