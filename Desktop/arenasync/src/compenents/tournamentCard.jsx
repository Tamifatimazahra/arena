
import { StatusBadge } from "./statusBadge";
export function TournamentCard(props) {
    // const card =document.createElement("div");
    // card.classList.add("tournament-card");


    return (
        <div className="card">
            <h2 id="title">{props.data.title}</h2>
            <StatusBadge status={props.data.status} />
            <p> {props.data.sport}</p>
            <p>{props.data.date}</p>
            <p> {props.data.location}</p>

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