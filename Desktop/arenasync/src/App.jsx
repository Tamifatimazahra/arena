// App.jsx
import React, { useState } from "react";
import './App.css'
import  Header from "./Header";
import Search  from "./search";
import { StatusBadge } from "./compenents/statusBadge.jsx";
import  {TournamentCard,Container}  from "./compenents/tournamentCard.jsx";
import { tournamentData } from "./Data/tournamentDB.js";
import RegistrationForm from "./compenents/RegistrationForm.jsx";


function App() {  

   const [showFormm, setShowForm ]= useState(false)
  return (
<>
    <Header />
  <Container  data={tournamentData} setShowForm={setShowForm} showFormm={showFormm} />
  {/* <RegistrationForm/> */}
  <RegistrationForm showFormm={showFormm} />

 </>


   );
}
export default App;
