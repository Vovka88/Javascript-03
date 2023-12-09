const fnA = (arg, callback) => {
  console.log(arg);
  callback(2);
};

const fnB = (arg) => {
  console.log("This is callback", arg);
};

fnA(23, fnB);

function doMath(a, b, callback) {
  const result = callback(a, b);
  return result;
}

const add = (x, y) => {
  return x + y;
};

console.log(doMath(5, 4, add));

// function onGetPositionSuccess(arg) {
//   console.log("This is call onGetPositionSuccess!");
//   console.log(arg);
// }

// function onGetPositionError(arg) {
//   console.log("This is call onGetPositionError!");
//   console.log(arg);
// }

// console.dir(window);

// window.navigator.geolocation.getCurrentPosition( onGetPositionSuccess, onGetPositionError);


function callback() {
    console.log("After 2 seconds in time out, this is callback");
}

console.log("In code before timeout");
setTimeout(callback, 2000);
console.log("In code after timeout");