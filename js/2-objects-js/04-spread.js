// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

const numbers = [
  1000,
  ...[1, 2, 3],
  5000,
  ...[4, 5, 6],
  7000,
  ...[7, 8, 9],
  9000,
];

console.log(numbers);

const temps = [18, 14, 12, 21, 17, 29, 34];
console.log(Math.max(...temps));
console.log(Math.min(...temps));

const defaultSettings = {
  theme: "light",
  showNotification: true,
  hideSidebar: false,
};

const userSettings = {
  showNotification: false,
  hideSidebar: true,
};

const finalSettings = {...defaultSettings, ...userSettings};
console.table(finalSettings)
