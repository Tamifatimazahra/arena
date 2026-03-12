// App.jsx
import React, { useState } from "react";
import './App.css'
import  Header from "./Header";
import Search  from "./search";
import { StatusBadge } from "./components/statusBadge.jsx";
import  {TournamentCard,Container}  from "./components/tournamentCard.jsx";
import { tournamentData } from "./components/tournamentDB.jsx";
import  RegistrationForm  from "./components/RegistrationForm.jsx";


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
