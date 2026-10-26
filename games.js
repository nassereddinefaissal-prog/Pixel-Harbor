const games = [
  { title: "FIFA 27 – PS4", cost: 12.52, genre: "Sports" }
];

const catalog = document.getElementById("game-catalog");

games.forEach((game) => {
  catalog.insertAdjacentHTML("beforeend", `
    <div>
      <h2>${game.title}</h2>
      <p>${game.genre}</p>
      <p>$${(game.cost * 1.5).toFixed(2)}</p>
    </div>
  `);
});
