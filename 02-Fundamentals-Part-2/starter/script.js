/**032 */
'use strict';//严格模式 必须在首行strict mode ,must be put in the first line
// when we put the 'use strict' the browser console will give us a prompting
function pr(parameter1) {
    console.log(parameter1);
}
let hasDriversLicense = false;
const passTest = true;
/** 
if (passTest) {
    hasDriverLicense = true;
}

if (hasDriversLicense) console.log('I can drive ');
const private = 234;
*/
//const interface = 'abc';

/**33 */
function logger() {
    console.log('my name is tom');
}
//calling funning invoking the function
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

fruitProcessor(2, 4);
//console.log(fruitProcessor(2, 4));
//console.log(juice);//script.js:31 Uncaught ReferenceError: juice is not defined
const appleJuice = fruitProcessor(2, 0);
console.log(appleJuice);

const num = Number('33');
console.log(num);
pr('234');
pr(123);

/**034 */
// function without a name
// anonymous function
// function expression函数表达式
const calAge2 = function (birthYear) {
    return 2022 - birthYear;
}
pr(calAge2(1980));
pr(`you age is ${calAge2(1990)}`);


// 已经声明的funtion 可以放在call之后，但是匿名的function除外
// the funtion and its calling is ok below:
const age = calAge3(1990);
// function declaration函数声明
function calAge3(birthYear) {
    return 2022 - 1990;

}
/*
//the function and its calling is not ok below:
const age2 = calAge3(1990);
const calAge3 = function (birthYear) {
    return 2022 - birthYear;
}*/


/**035arrow functions */
pr('**035 arrow function**')
//one parameters one line of expression
const calcAge5 = birthYear => 2022 - birthYear;
const age5 = calcAge5(1988);
pr(age5);


//one parameter and  multiple expressions
const yearsUntilRetirement = birthYear => {
    const age = 2022 - birthYear;
    const retirement = 60 - age;
    return retirement;
}
pr(yearsUntilRetirement(1978));

//multiple parameters and  multiple expressions
const yearsUntilRetirement2 = (birthYear, yourName) => {
    const age = 2022 - birthYear;
    const retirement = 60 - age;
    return `the retirement years of ${yourName} remains ${retirement}`;
}
pr(yearsUntilRetirement2(1978, 'Tom'));

/**036 functions calling other functions */
pr('functions calling other funtions');

/**037 reviewing functions */
const yearsUntilRetirement3 = (birthYear, yourName) => {
    const age = 2022 - birthYear;
    const retirement = 60 - age;
    if (retirement > 0) {
        return `${yourName} is going to retire in ${retirement} years.`;
    } else {
        return `${yourName} is retired`;
    }

}
pr(yearsUntilRetirement3(1978, 'Tom'));
pr(yearsUntilRetirement3(1958, 'Jack'));

//**038 coding challange */
const calcAverage = (a, b, c) => (a + b + c) / 3;
pr(calcAverage(3, 4, 5));

//**039 array */
// to do...