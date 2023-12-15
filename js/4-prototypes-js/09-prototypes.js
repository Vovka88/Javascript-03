const objC = {
  c: 5
}

const objB = Object.create(objC);
objB.b = "This is object B";
console.log(objB);
const objA = Object.create(objB);
objA.number = 10;
console.log(objA);
console.log(objA.c);
console.log(objA.hasOwnProperty("b"));


