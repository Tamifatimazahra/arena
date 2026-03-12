function ParticipantsList(props) {

  return (
    <div>
      <h3>Liste des participants</h3>

      {props.participants.map((participant, index) => (
        <p key={index}>
          {participant.nom} - {participant.equipe} - {participant.niveau}
        </p>
      ))}

    </div>
  );
}

export default ParticipantsList;