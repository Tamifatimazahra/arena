export function TournamentCard(tournament){
    const card =document.createElement("div");
    card.classList.add("tournament-card");
    
    card.innerHTML=`
    <h2>Titre ${tournament.title}</h2>
    <p>sport: ${tournament.sport}</p>
    <p>Date: ${tournament.date}</p>
    <p>location: ${tournament.location}</p>
     `
     return card;
}