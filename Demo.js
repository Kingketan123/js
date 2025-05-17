const prompt = require("prompt-sync")();

// String

// let a = "Hello World";
// let b  = `Hello world`;
// const age = 25;

// console.log(typeof(a),"name = ",a);
// console.log(typeof(b),"name = ",b);
// console.log(typeof(age),"Age = ",age);

// let a = 12;
// console.log(typeof(a));

// let sum;

// console.log(typeof sum)

// let a = true;
// let b = false;

// console.log(typeof a);
// console.log(typeof b)

// let a = null;
// console.log(a,typeof a);

// let a = Symbol("id");
// let b = Symbol("id");

// console.log(a == !b);

// const num = [1,2,3,4,5];
// console.log(num,typeof num)

// const name = ["john","bob","lion"];
// console.log(name);
// console.log(name[2])
// console.log(name[1])

// const name = {
//     name:'Ketan',
//     course:"BCA",
//     Branch:"Full Stack",
//     Age:25,
//     data:{
//         name:'BOB',
//         Course:'BBA'
//     }
// }

// console.log(name[name]);
// console.log(name.Age)
// console.log(name.data.name)

// function Output(){
//     console.log("Hello World");
//     console.log("hello Data");
// }

// Output();

// function cal(a,b){
//     console.log("a + b = ",a + b);
//     console.log("a - b = ",a - b);
//     console.log('a / b = ',a / b);
//     console.log("a * b = ",a * b);
// }

// cal(10,2);

// let a = "10";
// let b = "2";

// console.log(a + b);
// console.log(a -b);
// console.log(a * b);
// console.log(a / b);
// console.log(a ** b);
// console.log(a % b);
// console.log(a++);
// console.log(++a);
// console.log(a--);
// console.log(--a);

// let a  = "12";
// let b = 2;
// console.log(a * b)

// let a = 11;
// let b = 2;
// console.log(a % b);

// let a = "MANN";
// let b = 12;
// console.log(a % b);

// let a = 10;
// let b = 2;

// console.log(a += b);
// console.log(a -= b)
// console.log(a *= b)
// console.log(a **= b);
// console.log(a %= b )

// let a = 12;
// let b = 10;
// console.log(a == b);
// console.log(a === b)
// console.log(a != b);
// console.log(a !== b);

// console.log(a > b)
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b)

// let age = 99;

// if(age > 18){
//     console.log("Adult")
// }else{
//     console.log("not adult");
// }

// if(age > 18){
//     console.log("Adult");
// }else if(age < 60){
//     console.log("old");
// }else{
//     console.log("Not Adult");
// }

// let num = prompt("Enter the value");

// if (num % 2 === 0) {
//   console.log("2 is divded");
// } else if (num % 3 === 0) {
//   console.log("3 is divded");
// } else {
//   console.log("2 and 3 is not divided");
// }


// let num = prompt("Enter the value");

// console.log(num,"num = ",typeof num);

// let a  = prompt("Enter the value =");
// let b = prompt("Enter the value = ");

// console.log(a + b);

// const num1 = prompt("Enter the value1 = ");
// const num2 = prompt("Enter the value2 = ");
// const operator = prompt("Enter your Operator(-, + , * ,/)");

// let result = "";

// if(operator == "+"){
//     result = num1 + num2;
// }else if(operator == "-"){
//     result = num1 - num2;
// }else if(operator == "*"){
//     result = num1 * num2;
// }else if(operator == "/"){
//     result = num1 / num2;
// }

// console.log(num1 + operator + num2 ," = ",result);

// let a = 2;

// let b = a == 1 ? "blue":(a != 1, console.log("not equal"));
// console.log(b);

// Swtich Statement

// let num = prompt("Enter the number");

// switch(num){
//     case "num":console.log(1);
//     break;
//     case "num":console.log(2);
//     break;
//     case "num":console.log(3);
//     break;
//     default:console.log("Invalid value");
//     break;
// }

// console.log(num);

// let a = 5;

// for(let i=1; i<=a; i++){
//     console.log(i,"Apan college")
// }

// let a = 5;

// for(let i=a; i>=1; i--){
//     console.log(" i = ",i);
// }

// let a = 100;

// for(let i = 1; i<=a; i++){
//     if(i % 2 !== 0){
//         console.log(' i = ',i);
//     }
// }

let a = 10;

for(let i=1; i<=a; i++){
    if(i === 7){
        break;
    }
    if(i === 6){
        continue;
    }

    console.log(i)
}