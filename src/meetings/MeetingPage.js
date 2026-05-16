import { useState } from "react";
import NewMeetingForm from "./NewMeetingForm";
import MeetingsList from "./MeetingsList";

export default function MeetingPage(props) {
  const [formVisible, setFormVisible] = useState(false);

  function handleNewMeeting(meeting) {
    props.onNewMeeting(meeting);
    setFormVisible(false);
  }

  return (
    <div>
      <h2>Zajęcia ({props.meetings.length})</h2>

      {!formVisible && (
        <button type="button" onClick={() => setFormVisible(true)}>
          Dodaj Nowe Spotkanie
        </button>
      )}

      {formVisible && (
        <NewMeetingForm onSubmit={handleNewMeeting} />
      )}

      {props.meetings.length === 0 && <h5>Brak Spotkań</h5>}

      {props.meetings.length > 0 && (
        <MeetingsList meetings={props.meetings} />
      )}
    </div>
  );
}
