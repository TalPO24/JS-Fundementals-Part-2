//* ACTIVATING STRICT MODE 
/*
'use strict';
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log('I can drive')

// const interface = 'Audio'
// const private = 543
*/


//* FUNCTIONS
/*
function logger() {
    console.log('My name is Jonas')
}

//* calling / running / invoking function
logger();
logger();
logger();

function fruitProccessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges.`
    return juice
}

const appleJuice = fruitProccessor(5, 0)
console.log(appleJuice)

const appleOrangeJuice = fruitProccessor(2, 4)
console.log(appleOrangeJuice)
*/

//* FUNCTION DECLARATIONS VS EXPRESSIONS
/*
//* Function decleration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1996)
console.log(age1)

 //* Function expression
const calcAge2 = function(birthYear) {
    return 2037 - birthYear
}
const age2 = calcAge2(1996)
console.log(age1, age2)
*/


//* ARROW FUNCTIONS
/*
const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1996)
console.log(age3)

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear
    const retirement = 65 - age
    return `${firstName} retires in ${retirement} years`
}

console.log(yearUntilRetirement(1996, 'Jonas'));
console.log(yearUntilRetirement(1980, 'Bob'));
*/

//* FUNCTIONS CALLING OTHER FUNCTIONS
/*
function cutFruitPieces(fruit) {
    return fruit * 4
}

function fruitProccessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)

    const juice = `juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`
    return juice
}

console.log(fruitProccessor(2, 3))
*/

//* REVIEWING FUCTIONS
/*
const calcAge = function(birthyear) {
    return 2037 - birthyear
}

const yearUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired`)
        return -1
    }
}
console.log(yearUntilRetirement(1991, 'Jonas'))
console.log(yearUntilRetirement(1950, 'Mike'))
*/

//* TK-1
/*
const calc1 = (score1, score2, score3) => (score1 + score2 + score3) / 3
let scoreD = calc1(44, 23, 71)
let scoreK = calc1(65, 54, 49)

console.log(scoreD, scoreK)

const checkWinner = function(scoreD, scoreK) {
    if (scoreD >= 2 * scoreK) {
        console.log(`Dolphins wins ${scoreD}`)
    } else if (scoreK >= 2 * scoreD) {
        console.log(`Koalas wins ${scoreK}`)
    } else {
        console.log(`Nobody wins`)
    }
}
checkWinner(scoreD, scoreK)
checkWinner(567, 111)

scoreD = calc1(85, 54, 41)
scoreK = calc1(23, 34, 27)
checkWinner(scoreD, scoreK)
console.log(scoreD, scoreK)
*/

//* INTRODUCTION TO ARRAYS
/*
const friend1 = "Michael"
const friend2 = "Stevn"
const friend3 = "Peter"

const friends = ["Michael", "Steven", "Peter"]
console.log(friends)

const year = new Array(1991, 1994, 2008, 2020)
console.log(friends[0])
console.log(friends[2])

console.log(friends.length)
console.log(friends[friends.length - 1])

friends[2] = 'Jay'
console.log(friends)

const firstName = "Tal"
const tal = [firstName, "Poris", 2037 - 1996, "student", friends]
console.log(tal)
console.log(tal.length)

//*EXERCISE
const calcAge = function(birthyear) {
    return 2037 - birthyear
}

const years = [1990, 1967, 2002, 2010, 2018]
console.log(calcAge(years));

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length - 1])
console.log(age1, age2, age3)

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages)
*/

//* BASIC ARRAY OPERATIONS
/*
const friends = ["Michael", "Steven", "Peter"]

//* ADD ELEMENTS
const newLength = friends.push("jay")
console.log(friends)
console.log(newLength)

friends.unshift('John')
console.log(friends)


//* REMOVE ELEMENTS
friends.pop(); // Last
const popped = friends.pop();
console.log(popped)
console.log(friends)

friends.shift(); // First
console.log(friends)

console.log(friends.indexOf('Steven'))
console.log(friends.indexOf('Bob'))

friends.push(23)
console.log(friends.includes('Steven'))
console.log(friends.includes('Bob'))
console.log(friends.includes(23))

if (friends.includes('Steven')) {
    console.log(`you have a friend calld Steven`)
}
*/

//* TK2
/*
const bills = [125, 555, 44]
const tip1 = bills[0] >= 50 && bills[0] <= 300 ? bills[0] * 0.15 : bills[0] * 0.2
const tip2 = bills[1] >= 50 && bills[1] <= 300 ? bills[1] * 0.15 : bills[1] * 0.2
const tip3 = bills[2] >= 50 && bills[2] <= 300 ? bills[2] * 0.15 : bills[2] * 0.2

const tips = [tip1, tip2, tip3]

console.log(tips)

const total = [bills[0] + tip1, bills[1] + tip2, bills[2] + tip3]
console.log(total)
*/

//* INTRODUCTION TO OBJECTS
/*
const tal = {
    name: "tal",
    lastName: "Poris",
    age: 2037 - 1996,
    job: "Student",
    friends: ["Michael", "Peter", "Steven"]
}
*/

//* DOT VS. BRACKET NOTATION

const tal = {
    firstName: "tal",
    lastName: "Poris",
    age: 2037 - 1996,
    job: "Student",
    friends: ["Michael", "Peter", "Steven"]
}
console.log(tal)

console.log(tal.lastName)
console.log(tal['lastName'])

const nameKey = 'Name'
console.log(tal['first' + nameKey])
console.log(tal['last' + nameKey])

const intrestedIn = prompt('What do you want to know about Tal ? Choose between firstName, lastName, age, job, and friends')
if (tal[intrestedIn]) {
    console.log(tal[intrestedIn])
} else {
    console.log('Wrong request! Choose between firstName, lastName,age, job, and friends')
}
tal.location = 'Israel'
tal['twitter'] = '@talporis'
console.log(tal)

//* CHALLENGE
console.log(`${tal.firstName} has ${tal.friends.length} friends and his best freind is ${tal.friends[0]}`)