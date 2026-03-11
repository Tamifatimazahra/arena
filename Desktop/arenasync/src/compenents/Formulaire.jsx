import { useState } from "react";
import { Form } from "react-router-dom";
function RegistrationForm() {
    const [nom, setNom] = useState("");
    const [equipe, setEquipe] = useState("");
    const [niveau, setNiveau] = useState("");
    const isNomValid = nom.length >= 3;
    return (
        <form >
            <input type="text" 
            value={nom} 
            onChange={(e) => setNom(e.target.value)}
             placeholder="Nom" />

             <input type="text" 
             value={equipe}
             onChange={(e)=>setEquipe(e.target.value)}
             placeholder="Equipe" />






        </form>


    )

}