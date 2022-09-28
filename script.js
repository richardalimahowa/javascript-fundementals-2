'use strict ';
/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');
*/

/*function logger() {
    console.log('my name is Jonas');
}
// calling / invoking/ running
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/
// function declaration
/*function ageCalc(birthYear) { 
    const age = 2037 -birthYear;
    return age
}
const age1 = ageCalc(1991);
console.log(age1);

// functioln expression
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2);
*/

// arrow function
/*const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);
*/
// mutiple conditions with arrow functions
/*const yearsUntillRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement
} 
console.log(yearsUntillRetirement(1991));
*/
// two parameters using arrow functions
/*const yearsUntillRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
} 
console.log(yearsUntillRetirement(1991, 'Jonas'));
 // calling functions
 function cutFruitPieces (fruit) {
    return fruit * 4;
 }
 function fruitProcessor (apples, oranges) {
    const applesPieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `juice with ${applesPieces} piece of apple and ${orangePieces}  piece of orange.`;
    return juice;
 }
 console.log(fruitProcessor(2,3));
 */
 
 /*const calcAge = function(birthYear) {
    return 2037 - birthYear;
 }
 const yearsUntillRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} he has already retired`);
        return -1;
    }
    
 }
 console.log(yearsUntillRetirement(1991, 'Jonas'));

 const calcAverage =  (score1, score2, score3) => {
    const aveDoplhins = Number((score1 + score2 + score3)/3);
    const aveKoalas = Number((score1 + score2 + score3)/3);
    return aveDoplhins, aveKoalas;   

 }
 //test 1

let dolphins = calcAverage(44 , 23, 71);
let koalas = calcAverage(65, 54, 49);
console.log(dolphins, koalas);

const  checkWinner = function (avgDolphins, avgKoalas) {
    
    if (avgDolphins >= 2*avgKoalas) {
        console.log(`Dolphins wins${avgDolphins} vs ${avgKoalas}`);
        
    } else if (avgKoalas >= 2*avgDolphins) {
        console.log(`kolas wins ${avgKoalas} vs ${avgDolphins}`);
        
    } else {
        console.log(`no team wins`)
        
    }
}

checkWinner(dolphins, koalas);
checkWinner(575, 111);

//test 2
 dolphins = calcAverage(85 , 54, 41);
 koalas = calcAverage(23, 34, 27);
 console.log(dolphins, koalas);
 checkWinner(dolphins, koalas);
 */
// Arrays
/*const friends = ['peter', 'john', 'everest',];
console.log(friends);
 const years = new Array(1991, 1884, 2008, 2020);
 console.log(friends[0]);
 console.log(friends[2]);

 console.log(friends.length);
 console.log(friends[friends.length - 1]);

 friends[2] = 'jay';
 console.log(friends);

 const firstName = 'Jonas'
 const jonas = ['firstName', 'schmedtran', 2037 - 1991, 'teacher', friends];
 console.log(jonas);
 */
 // exercise 
 /*const calcAge = function ( birthYear) {
    return 2037 -birthYear
    

 }
 */
 /*const years = new Array [1990, 1967, 2002, 2010, 2018];
 const age1 = calcAge(years[0]);
 const age2 = calcAge(years[1]);
 const age3 = calcAge(years[2]); 
 console.log(age1, age2, age3);

 const age = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2], calcAge(years[years.length - 1]))];
 console.log(age);
 */

 // method arrays
 /*const friends = ['Micheal', 'Steven', 'Peter'];
 
 const newLength = friends.push('jay');
console.log(friends);
console.log(newLength);
friends.unshift('john');
console.log(friends);
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);
friends.shift();
console.log(friends);
console.log(friends.indexOf('Steven'));// check index of array element
console.log(friends.indexOf('Bob'));
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes(23));
if (friends.includes('Steven')) {
    console.log('you have a freind called steven');
}
// challenge 2
function calcTip (bill) {
    const tip1 = (15/100 * bill);
    const tip2 =(20/100 * bill);
    if ( bill >= 50 && bill <= 300) {
        return tip1;

    } else {
        return tip2;
    }
}
console.log(calcTip(100));
const Bill = new Array(125, 555, 44);
console.log(Bill);

const arrayTip = new Array(calcTip(Bill[0]), calcTip(Bill[1]), calcTip(Bill[2]));
console.log(Bill, arrayTip);

const totalA = Bill[0] + calcTip(Bill[0]);
const totalB = Bill[1] + calcTip(Bill[1]);
const totalC = Bill[2] + calcTip(Bill[2]);
const total = new Array((Bill[0] + calcTip(Bill[0])), (Bill[1] + calcTip(Bill[1])), (Bill[2] + calcTip(Bill[2])));
console.log(total);
// objects
const Jonas = {
    firstName: 'Jonas',
    lastName: 'schmedtman',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter','Steven']
};
console.log(Jonas);
console.log(Jonas.lastName);// dot
console.log(Jonas['firstName']);

const nameKey = 'Name';
console.log(Jonas['first' + nameKey]);
console.log(Jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? choose between firstName, lastName, age, job, and friends');
 
if (Jonas[interestedIn]) {
    console.log(Jonas[interestedIn]);
} else {
    console.log('wrong request! choose between firstName, lastName, age, job, and freinds');
}

Jonas.location = 'Portugal';
Jonas['twitter'] = '@jonasschmedtman';
console.log(Jonas);

//challenge
console.log(`${Jonas.firstName} has  ${Jonas.friends.length}, and his best friend is ${Jonas.friends[0]}`);
*/
// method objects

/*const Jonas = {
    firstName: 'Jonas',
    lastName: 'schmedtman',
   birthYear: 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter','Steven'],
    hasDriversLicence: true,
    /*calcAge: function(birthYear) {
        return 2037 - birthYear;
    }
    */
   /*calcAge:function() {
    //console.log(this);
    this.age = 2037 - this.birthYear;
    return this.age;
   }
};
console.log(Jonas.calcAge());
//console.log(Jonas['calcAge'](1991));
console.log(Jonas.calcAge());
console.log(Jonas.calcAge());
*/
// challenge
/*const bigger = {
    firstName: 'Jonas',
    lastName: 'schmedtman',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter','Steven'],
    hasDriversLicence: false,

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} year old ${bigger.job} and he has ${this.hasDriversLicence ? 'a' : 'no'} driver's license.`

    }
};
console.log(bigger.calcAge());
console.log(bigger.getSummary());
*/
// challege methods
/*const mark = {
    firstName:'Mark',
    lastName: 'Miller',
    height: 1.69,
    weight: 78,
    calcBMIMark: function() {
        this.bmi = (this.weight)/(this.height*this.height);
        return this.bmi;
    }
};
const john = {
    firstName:'John',
    lastName: 'Smith',
    height: 1.95,
    weight:92,
    calcBMIJohn: function() {
        this.bmi = (this.weight)/(this.height*this.height);
        return this.bmi;}
    };
const k = mark.calcBMIMark();
const m = john.calcBMIJohn();
console.log(k, m);
if (k > m) {
    console.log(`${mark.firstName}'s BMI (${k}) is higher than ${john.firstName}'s BMI(${m})  `)
} else {
    console.log(`${john.firstName}'s BMI (${m}) is higher than ${mark.firstName}'s BMI(${k})`)
}
*/
// loops for loop
for (let rep =1 ; rep <= 10; rep++) {
    console.log(`lifthing weights repetition ${rep}`);
}

// application of loops in array
const jonas = [
    'Jonas',
    'Schmedtman',
    2037 - 1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven'],
    true,
];
const types = [];
for (i = 0; i < jonas.length ; i++) {
    // reading from an array
    console.log(jonas[i], typeof jonas[i]);
    // filling types array
    //types[i] =  typeof jonas[i];
    types.push( typeof jonas[i]);
    
}
console.log(types);
 const years = [1991, 2007, 1969, 2020];
 const ages = [];
 for(let i = 0; i < years.length; i++) {
    2037 - years[i];
    ages.push(2037 - years[i]);
 
 }
console.log(ages);
// continue and break
console.log('-- ONLY STRINGS --');
for(let i =0 ; i < jonas.length; i++) {
    if(typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}
console.log('-- BREAK WITH NUMBER --');
for(let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] === "number") break;
    console.log(jonas[i], typeof jonas[i]);
}

let rep = 1;
while(rep <= 10) {
    //console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice);
while(dice !== 6) {
    console.log(`you have not rolled ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) { console.log('the loop is done');}
}
function calcTip (bill) {
    const tip1 = (15/100 * bill);
    const tip2 =(20/100 * bill);
    if ( bill >= 50 && bill <= 300) {
        return tip1;

    } else {
        return tip2;
    }
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for(i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    total.push(bills[i] + tip);
    
}
console.log(bills, tips, total);
const calcAve = function(arr) {
    let sum =0;
    for(i =0; i < arr.length; i++) {
        sum += arr[i];
        
    }
    return sum/arr.length;
}
   console.log(calcAve([2, 3, 7]));
   console.log(calcAve(total));
   console.log(calcAve(tips));
   




    
























 




