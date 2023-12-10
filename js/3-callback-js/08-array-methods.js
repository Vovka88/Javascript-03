const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // forEach()

// numbers.forEach((arg) => {console.log(arg);});

// // map()

// const doubledNumbers = numbers.map((number) => {return number * 2});

// console.log(doubledNumbers);

// // filter()

// const filteredNumbers = numbers.filter((arg) => arg < 3 || arg > 7);

// console.log(filteredNumbers);

// //

// const grinders = players.filter(({timePlayed}) => timePlayed > 250);
// console.table(grinders);

// // find()
// const findedNumbers = numbers.find((arg) => arg >= 6)

// console.log();

// const playerfinded = players.find(({id}) => id === "player-3")
// console.log(playerfinded);

// // every() и some()

// const isAllOnline = players.every(player => player.online);
// console.log(isAllOnline);

// const isOnline = players.some(player => player.online);
// console.log(isOnline);

// reduce(callback, number) | де number - число з якого все починається

const total = numbers.reduce((acc, number) => acc + number, 0);
console.log(total);

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const salaryCalc = salary.reduce(((values) => values = Object.values()));