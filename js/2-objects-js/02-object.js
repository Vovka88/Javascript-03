const simpleObject = {
  key1: "value1",
  key2: 2,
  key3: [1, 2, 3],
  key3: {
    key1: "value3.1",
    key2: 3.2,
  },
};

const book1 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const x = {};
console.dir(x);

// METHODS

const book2 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,

  changeName(arg) {
    console.log(arg);
    this.title = arg;
  },
};

book2.changeName("Faust");

const playlist = {
  name: "My top palaylist",
  rating: "5",
  tracks: ["track-1", "track-2", "track-3", "track-4"],
  trackcount: 7,

  changeName(newName) {
    this.name = newName;
    console.log(this.name);
  },
  changeRating(arg) {
    this.rating = arg;
    console.log(this.rating);
  },
  trackCount() {
    let i = 0
    for (const iterator of this.tracks) {
        i++;
    }
    this.trackcount = i;
  }
};

playlist.changeName("Hy");
playlist.trackCount();
console.log(playlist.trackcount);
