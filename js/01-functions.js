// // Перший варіант
// const add = function () {};
// // Другий варіант
// function add1() {}
// // Третій варіант (Стрілочна)
// const add2 = () => {};

// const add3 = function (arg, b, c = 2) {
//   const a = (arg * b) - c;
//   return a;
// };

// console.log(add3(2, 5));

// function FnA () {
//     console.log("Виконується функція FnA");
// }
// function FnB () {
//     console.log("Виконується функція FnB");
// }
// function FnC () {
//     console.log("Виконується функція FnC");
// }
// console.log("Лог перед викликом FnA");
// FnA()
// console.log("Лог після виклику FnA");
// console.log("Лог перед викликом FnB");
// FnB()
// console.log("Лог після виклику FnB");
// console.log("Лог перед викликом FnC");
// FnC()
// console.log("Лог після виклику FnC");

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

const arr = function (arg) {
  let i = 0;
  for (const iterator of arg) {
    i += iterator;
  }
  return i;
};

console.log(arr(cart));

// -----------------------

const changeCase = function (arg) {
    let newWord = "";
    for (let index = 0; index < arg.length; index++) {
        if(arg[index] === arg[index].toUpperCase()){
            newWord += arg[index].toLowerCase();
        }
        else  if(arg[index] === arg[index].toLowerCase()){
            newWord += arg[index].toUpperCase();
        }
    }
    return newWord
}

console.log(changeCase("JavaScript"));

// -----------------------

const slugify = function (arg) {
    return arg.toLowerCase().split(' ').join("-")
}

function fnA() {
    console.log(arguments)
    let args = Array.from(arguments);
    console.log(args);
}

fnA(1, 2, 3)

const fnB = () => {
    console.log(arguments)
}

fnB(1, 2, 3)

// -----------------------

const greet = (arg) => {
    
}