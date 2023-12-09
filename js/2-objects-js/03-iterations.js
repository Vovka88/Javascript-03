const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;

const keys = Object.keys(feedback);
console.log(keys);

for (const key of keys) {
  console.log(key);
  console.log(feedback[key]);
  totalFeedback += feedback[key];
}

console.log(totalFeedback);

const friends = [
  { name: "Olga", online: false },
  { name: "Nik", online: true },
  { name: "John", online: true },
  { name: "Prushka", online: true },
];

console.table(friends);

// Шукаємо друга за іменем

function findFriendByName(allFirends, friend) {
    for (const iterator of allFirends) {
        console.log(iterator.name);
        iterator.name === friend ? console.log("Знайшли") : console.log("Не знайшли");
    }
}

findFriendByName(friends, 'Nik');

function getAllNames(arg) {
    const names = [];
    for (const iterator of arg) {
        console.log(iterator.name);
        names.push(iterator,name)
    }
    return names
}

function getOnlineFriends(arg) {
    const online = [];
    for (const iterator of arg) {
        iterator.online === true ? online.push(iterator) : console.log(`User: ${iterator.name} offline`);
    }
    return online;
}

console.log(getOnlineFriends(friends));