//// Деструктуризація
// const showProfileInfo = (arg) => {
//     const {name, tag, location, avatar, ...restProps} = arg
//     console.log(name, tag, location, avatar, restProps)
// };

// const profile = {
//   name: "Pueblo",
//   tag: "user",
//   location: "Rio",
//   avatar: "https://brazilian.avatars.net",
//   stats: {
//     followers: 5063,
//     views: 234234,
//     likes: 1309,
//   },
// };

// showProfileInfo(profile);

//// Збір

const profile = {
  name: "Pueblo",
  tag: "user",
  location: "Rio",
  avatar: "https://brazilian.avatars.net",
  stats: {
    followers: 5063,
    views: 234234,
    likes: 1309,
  },
};

const { ...restProps } = profile;

console.log(restProps);