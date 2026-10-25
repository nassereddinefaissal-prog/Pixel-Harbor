const games = [
  {
    title: "FC 27 – PS4",
    cost: 12.52,
    genre: "Sports",
    image: "images/fifa-27-ps4.jpg",
    link: "https://7lle.com/"
  },
  // Add more games here, separated by commas
];

const catalog = document.getElementById("game-catalog");

games.forEach((game) => {
  const sellingPrice = (game.cost * 1.5).toFixed(2);

  catalog.insertAdjacentHTML(
    "beforeend",
    `
      <article class="game-card">
        <img src="${game.image}" alt="${game.title}" loading="lazy">
        <h2>${game.title}</h2>
        <p>${game.genre}</p>
        <p>Price: $${sellingPrice}</p>
        <a href="${game.link}" target="_blank" rel="noopener noreferrer">
          View game
        </a>
      </article>
    `
  );
});
