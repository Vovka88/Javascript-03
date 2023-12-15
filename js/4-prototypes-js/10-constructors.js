// const User = function ( {email, password} = {} ) {
//     this.email = email;
//     this.password = password;
// }

// User.prototype.changeEmail = function (arg) {
//     this.email = arg;
// }

// console.log(User.prototype);

// const user = new User( {email: "reddedkord@gmail.com", password: "1234"} );
// console.log(user);
/////////////////////////

const Review = function (productName, userName, text, rating) {
  this.productName = productName;
  this.userName = userName;
  this.text = text;
  this.rating = rating;
  this.date = new Date();
};

Review.prototype.editText = function (arg) {
  this.text = arg;
};
Review.prototype.editRating = function (arg) {
  this.rating = arg;
};

Review.prototype.getDetails = function () {
    return `${this.userName} wrote review on ${this.productName} with rating ${this.rating}: \n \t ${this.text} \n \t ${this.date}`;
}

const review = new Review("Game", "Gamer123", "Good Game", 10);
console.log(review.getDetails());