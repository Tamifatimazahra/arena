// import { tournamentData } from "./data/tournamentDB";
// console.log(tournamentData);

console.log("HELLO");
import { tournamentData } from "Data/tournamentDB.js";
console.log(tournamentData);
import {tournamentCard}  from "./compenents/tournamentCard.js";
console.log(tournamentCard);

const grid =document.getElementById("tournament-grid");
tournamentData.map(tournament => {
  const card = tournamentCard(tournament);
  grid.appendChild(card);});

