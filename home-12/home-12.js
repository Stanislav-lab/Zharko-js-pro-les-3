// Створити масив, довжину та елементи якого задає користувач.
//Відсортувати масив за зростанням.
//Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.


let a = prompt("Введите 0 элемент массива")
let b = prompt("Введите 1 элемент массива")
let c = prompt("Введите 2 элемент массива")
let d = prompt("Введите 3 элемент массива")
let e = prompt("Введите 4 элемент массива")
let f = +prompt("Введите количество элементов массива")

{
const arr = [a, b, c, d, e];
arr.length = f

console.log(arr.length);
console.log(arr);
console.log(arr.sort());
console.log(arr.splice(0,2));
}
