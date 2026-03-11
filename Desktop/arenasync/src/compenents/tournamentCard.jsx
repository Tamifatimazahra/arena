
import { StatusBadge } from "./statusBadge";
import { useState } from "react";

export function TournamentCard(props) {
    // const card =document.createElement("div");
    // card.classList.add("tournament-card");
            const [isRegistered,setisRegistered]=useState(false)

    return (
        <div className="card">
            <h2 id="title">{props.data.title}</h2>
             <p id="des"> {props.data.description}</p>
            <StatusBadge status={props.data.status} />
            <p> {props.data.sport}</p>
            <p>{props.data.date}</p>
            <p> {props.data.location}</p>
<button onClick={()=> setisRegistered(!isRegistered)} style={{
    backgroundColor: isRegistered ? "red" : "green"}}   >{isRegistered?  "Se désinscrire" :"S'inscrire"}
</button>
        </div>



    );
}
export function Container(props) {
    return (
        <div className="container">
            {props.data.map((tournament) => (<TournamentCard data={tournament} />
            ))}
        </div>
    );
}