let oper = prompt("Input operation: add, sub, mult, div");
let num1 = Number(prompt("Input first number"));
let num2 = Number(prompt("Input second number"));
let res1 = num1 + num2;
let res2 = num1 - num2;
let res3 = num1 * num2;
let res4 = num1 / num2;
if (oper === "add") {
    console.log(`${num1} + ${num2} = ${res1}`)
} else if (oper === "sub") {
    console.log(`${num1} - ${num2} = ${res2}`)
} else if (oper === "mult") {
    console.log(`${num1} * ${num2} = ${res3}`)
} else if (oper === "div") {
    console.log(`${num1} / ${num2} = ${res4}`)
} else {
    console.log("Incorrect input") }