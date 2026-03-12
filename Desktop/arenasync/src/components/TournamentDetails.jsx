import { useState } from "react";
import RegistrationForm from "./RegistrationForm.jsx";
import ParticipantsList from "./participantRaw.jsx";

function TournamentDetails() {
  const [participants, setParticipants] = useState([]);

  const handleAddParticipant = (newParticipant) => {
    setParticipants([...participants, newParticipant]);
  };

  return (
    <div>
      <h2>Participants</h2>
      <RegistrationForm onAddParticipant={handleAddParticipant} />
      <ParticipantsList participants={participants} />
    </div>
  );
}
export default TournamentDetails;
