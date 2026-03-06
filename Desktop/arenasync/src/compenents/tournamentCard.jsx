
export function TournamentCard(props) {
    // const card =document.createElement("div");
    // card.classList.add("tournament-card");


    return (
        <div className="card">
            <h2>{props.data.title}</h2>
            <p> {props.data.sport}</p>
            <p>{props.data.date}</p>
            <p> {props.data.location}</p>
        </div>
    );
}
export function Container(props){
    return(
    <div className="container">
        {props.data.map((tournament) =>(<TournamentCard data={tournament}/>
        ))}
    </div>
    );
}