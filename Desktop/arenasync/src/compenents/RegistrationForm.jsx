import { useState } from "react";
// import { Form } from "react-router-dom";

function RegistrationForm({showFormm}) {
    const [nom, setNom] = useState("");
    const [equipe, setEquipe] = useState("");
    const [niveau, setNiveau] = useState("");
    const isNomValid = nom.length >= 3;
 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Nom:", nom);
        console.log("Équipe:", equipe);
        console.log("Niveau:", niveau);
    };

    return (
        <div>
         
             


            {showFormm && (
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        placeholder="Nom" />

                    <input type="text"
                        value={equipe}
                        onChange={(e) => setEquipe(e.target.value)}
                        placeholder="Equipe" />

                    <input type="text"
                        value={niveau}
                        onChange={(e) => setNiveau(e.target.value)}
                        placeholder="Niveau" />

                    <button type="submit" disabled={!isNomValid}>
                        Valider
                    </button>
                </form>
            )}
        </div>
    );
}

export default RegistrationForm;

