function ParticipantRow({ participants }) {
  return (
    <div className="participants-list">
      <h3>Liste des participants</h3>
      {participants.length === 0 ? (
        <p>Aucun participant pour le moment.</p>
      ) : (
        participants.map((p, index) => (
          <div key={index} className="participant-row">
            <p>Nom: {p.nom}</p>
            <p>Équipe: {p.equipe}</p>
            <p>Niveau: {p.niveau}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ParticipantRow;
