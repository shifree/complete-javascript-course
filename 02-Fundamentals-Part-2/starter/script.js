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
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
pr(friends);

const years = new Array(1991, 1984, 2008, 2020);

pr(friends[0]);

pr(friends.length);
// 虽然数组array是const，但是数组元素仍然可以赋值
friends[2] = 'Jay';
pr(friends);
//以上的原因是数组对象存储的是地址，而非值，所以对数组的元素进行赋值不改变地址，如下，则不行：
/*
friends = ['Tom', 'Jerry', 'Paul']
pr(friends)
*/
// 040**//
pr(friends.length);
//Array尾部插入，返回数组长度
const newLengthoffriends = friends.push('Jack');
pr(newLengthoffriends);
//Array头部插入，返回数组长度
const newLengthoffriends2 = friends.unshift('John');
pr(friends);
pr(newLengthoffriends2);

//pop 删除尾部，返回pop的尾部元素
pr(friends.pop());
pr(friends);
//删除头部，返回shift掉的头部元素
pr(friends.shift());
pr(friends);

const index1 = friends.indexOf('Steven');
pr(`index of Steven is ${index1}`);


//042 objects//
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2022 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    height: 188,
    weight: 80
}
//对象元素取值的两个方式
pr(jonas.lastName);
pr(jonas['lastName']);

//对象元素的取值
const interestedIn = prompt('What do you want to know about jonas?job,  friends, height');
pr(jonas[interestedIn]);
pr(jonas);//此处输出的内容包括location和twitter。原因可能程序已经编译了，对象地址中已经有了location和twitter
pr(jonas.location);//在下面定义，所以此处输出undifined
pr('1756');
//*
//对象元素赋值
jonas.location = 'usa';
jonas['twitter'] = '@jonasschmedtman';
pr(jonas);
//*/

//043 dot //
//对象内的顺序no matter//

pr(jonas.lastName);
pr(jonas['lastName']);

const interestedIn2 = prompt("please choose one of jonas' interest");
if (jonas[interestedIn2]) {
    pr(jonas[interestedIn2]);
} else {
    pr('wrong request!')
}

//044 object methods
const jonas3 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2022 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    height: 188,
    weight: 80,
    calcAge2: function (birthYear) {
        return 2022 - birthYear;
    }
}
pr(jonas3.calcAge2(40));
pr(jonas3['calcAge2'](40))


const jonas4 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2022 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    height: 188,
    weight: 80,
    birthYear: 1980,
    calcAge2: function (birthYear) {
        return 2022 - birthYear;

    },
    calcAge4: function () {
        return 2022 - this.birthYear;
    }
}
pr(jonas4.calcAge4());
pr(jonas4['calcAge4']());

//045