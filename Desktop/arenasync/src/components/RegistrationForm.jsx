import { useState } from "react";
// import { Form } from "react-router-dom";

function RegistrationForm({showFormm, setShowForm}) {
    const [nom, setNom] = useState("");
    const [equipe, setEquipe] = useState("");
    const [niveau, setNiveau] = useState("");
    const isNomValid = nom.length >= 3;
 

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!isNomValid)return;
        const participant ={nom,equipe,niveau};
        onAddParticipant(participant);
        setNom("");
        setEquipe("");
        setNiveau("");
        setShowForm(false);
    };

    return (
        <>
          {showFormm && (
             <div className="parent">
        
             <div className="form" >
          
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

                    <button type="button" onClick={() =>setShowForm(false)}>
                        Anuller
                    </button>
                </form>
          
        </div>
     </div>
          )}
        
        </>

    );
}

export default RegistrationForm;
