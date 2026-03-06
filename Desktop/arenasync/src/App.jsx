// App.jsx
import React from "react";
import './App.css'
import  Header from "./Header";
import Search  from "./search";
import { StatusBadge } from "./compenents/statusBadge.js";
import  {TournamentCard,Container}  from "./compenents/tournamentCard.jsx";
import { tournamentData } from "./Data/tournamentDB.js";

// import tournamentData from './Data/tournamentDB.js'
function App() { // ← function name khasha Uppercase
  return (
<>
    <Header />
  <Container  data={tournamentData} />

 </>


   );
}
export default App;
