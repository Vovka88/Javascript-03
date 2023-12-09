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

const makeProfileMarkup = (arg) => {
    const {name, tag, location, avatar, stats:{ followers, views, likes}} = arg
    return `<img src="${avatar}">
                <p>${name}<span>${tag}</span></p>
                <p>Location: ${location}</p>
                <ul>
                <li>Followers: ${followers}</li>
                <li>Views: ${views}</li>
                <li>Likes: ${likes}</li>
                </ul>`;
};

const markup = makeProfileMarkup(profile);

document.body.insertAdjacentHTML("afterbegin", markup);