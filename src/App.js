import "./App.css";
import { useState } from "react";
import "milligram";
import LoginForm from "./LoginForm";
import LoggedInForm from "./LoggedInForm";
import MeetingPage from "./meetings/MeetingPage";

function App() {
  const [email, setEmail] = useState("");
  const [logged, setLogin] = useState(false);
  const [meetings, setMeetings] = useState([]);

  function login(emailFromForm) {
    setEmail(emailFromForm);
    setLogin(true);
  }

  function logout() {
  setEmail("");
  setLogin(false);
  }

  function addMeeting(meeting) {
    const nextMeetings = [...meetings, meeting];
    setMeetings(nextMeetings);
  }

  if (logged) {
    return (
      <div>
        <h1>Witaj w systemie do zapisów na zajęcia</h1>
        <LoggedInForm email={email} onLogout={logout} />
        <MeetingPage meetings={meetings} onNewMeeting={addMeeting} />
      </div>
    );
  }

  return (
    <div>
      <h1>Witaj w systemie do zapisów na zajęcia</h1>
      <LoginForm onLogin={login} />
    </div>
  );
}

export default App;
