import { tournamentData } from "./Data/tournamentDB.js";
import { tournamentCard } from "./compenents/tournamentCard.js";

console.log("HELLO");
console.log(tournamentData);
console.log(tournamentCard);

const grid = document.getElementById("tournament-grid");
tournamentData.map(tournament => {
  const card = tournamentCard(tournament);
  grid.appendChild(card);
});
