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
3rd line`)