// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Завдання 1. Знайти суму та кількість позитивних елементів.

// {
//     const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47].filter(function (element) {
//         return element > 0
//     });
//     console.log(arr);
//     console.log(`позитивних елементів ${arr.length}`);
//         let result = arr.reduce(function(sum, elem) {
//         return sum + elem;
//     }, 0);
//
//     console.log(`сума позитивних елементів ${result}`);
// }

// Завдання 2. Знайти мінімальний елемент масиву та його порядковий номер.

// {
//     const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
//         const minimum = Math.min(...arr);
//         console.log(minimum);
//         console.log(arr.indexOf(minimum));
// }

// Завдання 3. Знайти максимальний елемент масиву та його порядковий номер.

// {
//     const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
//     const maximum = Math.max(...arr);
//     console.log(maximum);
//     console.log(arr.indexOf(maximum));
// }

// Завдання 4. Визначити кількість негативних елементів.

// {
//     const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47].filter(function (element) {
//         return element < 0
//     });
//     console.log(arr.length);
// }

// Завдання 5. Знайти кількість непарних позитивних елементів.

// {
//     const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47].filter(function (element) {
//         return element > 0 && element % 2 !== 0
//     });
//     console.log(arr);
//     console.log(`позитивних непарних елементів ${arr.length}`);
// }

// Завдання 6. Знайти кількість парних позитивних елементів.

// {
//     const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47].filter(function (element) {
//         return element > 0 && element % 2 === 0
//     });
//     console.log(arr);
//     console.log(`позитивних парних елементів ${arr.length}`);
// }

// Завдання 7. Знайти суму парних позитивних елементів.

// {
//     const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47].filter(function (element) {
//         return element > 0 && element % 2 === 0
//     });
//     console.log(arr);
//         let result = arr.reduce(function(sum, elem) {
//         return sum + elem;
//     }, 0);
//
//     console.log(`сума позитивних парних елементів ${result}`);
// }

// Завдання 8. Знайти суму непарних позитивних елементів.

// {
//     const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47].filter(function (element) {
//         return element > 0 && element % 2 !== 0
//     });
//     console.log(arr);
//     let result = arr.reduce(function(sum, elem) {
//         return sum + elem;
//     }, 0);
//
//     console.log(`сума позитивних непарних елементів ${result}`);
// }

// Завдання 9. Знайти добуток позитивних елементів.

// {
//     const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47].filter(function (element) {
//         return element > 0
//     });
//     console.log(arr);
//     let result = arr.reduce(function(mult, elem) {
//         return mult * elem;
//     }, 1);
//
//     console.log(`добуток позитивних елементів ${result}`);
// }

// Завдання 10. Знайти найбільший серед елементів масиву, остальні обнулити.

let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let max = arr[0];
let maximum = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        arr[maximum] = 0;
        maximum = i;
    } else {
        arr[i] = 0;
    }
}

console.log(arr);