/*let js = "amazing";
if (js === "amazing") alert('javascript is FUN!');
console.log(40 + 30 - 20);
console.log('Jonas');
*/
/*
let javascriptIsFun = true;
console.log(javascriptIsFun)
console.log(typeof javascriptIsFun)

const birthYear = 1002
console.log(birthYear)
const birthMonth = 10;
*/
/*
var的作用域被规定为一个函数作用域，而let则被规定为块作用域，块作用域要比函数作用域小一些，但是如果两者既没在函数中，也没在块作用域中定义，那么两者都属于全局作用域。
*/
/*
const aaa = 1999;
console.log(typeof aaa)
let x = 100;
let y = 100;
console.log(x--);
console.log(--y);
*/
/*
// get bmi
let bmi;
let mass;
let markHeight = 1.69;
let johnHeight = 1.88;
let markWeights = 78;
let johnWeights = 95;
let markBMI = markWeights / markHeight ** 2;
let johnBMI = johnWeights / johnHeight ** 2;
console.log(markBMI, johnBMI)
// use back tick
console.log(`John's BMI is ${johnBMI}, equals to ${johnWeights / johnHeight ** 2}, his height is ${johnHeight}, his weights is ${johnWeights}`)

// new line
console.log(`1st line \n\
2nd line \n\
3rd line`)

console.log(` 1st line
2nd line
3rd line`)*/
/*
const age = Number(prompt("what's your age?"))
console.log(age);
console.log(typeof age);
if (age > 18) {
    console.log(`your age is ${age}, you are an adult`);
} else {
    console.log('you are not an adult');
}*/
/*
const year = 10;
const drink = year >= 18 ? "drink wine" : "drink water";
console.log(drink)
console.log(` I like to ${year >= 18 ? "drink wine" : "drink water"}`);*/
const age = 62;
console.log(`I am an/a ${age > 60 ? "old man" : age > 40 ? "middle man" : age > 20 ? "young man" : "children"}`);
// loose 
if (18 == '18') console.log('loose equal')
// strict
if (18 === '18') console.log('strict equal')
if (18 === Number('18')) console.log('convert to Number strict equal')

if (18 != '18') console.log('loose unequal')
if (18 !== '18') console.log('strict unequal')
if (1 == true) console.log('1 == true')
if (1 === true) console.log('1 ===true')
//Boolean
result1 = true & true// 与运算，结果为number
console.log(result1)
console.log(typeof result1)//结果为number
result2 = true && true//比较
console.log(result2)//结果为布尔变量
console.log(!true)
console.log(typeof (!true & false))
/* switch */
const day = 'tuesday';
switch (day) {
    case 'monday': console.log('monday');
        break;
    case 'tuesday':
        console.log('tue');
    case 'wednesday':
        console.log('wed');
        break;
    case 'thursday':
        console.log('thu');
    default:
        console.log('default')
}
/*027 statements and expressions */
// if... else ... ==>> statement
// 2+4 ==>> expression

/**028 the conditional operator */
const myage = 23;
myage >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');
console.log(myage - 7 >= 18 ? 'wine' : "water")