import "./App.css";
import { useState } from "react";
import "milligram";
import LoginForm from "./LoginForm";
import LoggedInForm from "./LoggedInForm";
import NewMeetingForm from "./meetings/NewMeetingForm";
import MeetingsList from "./meetings/MeetingsList";
import MeetingPage from "./meetings/MeetingPage";

function App() {
  const [email, setEmail] = useState("");
  const [logged, setLogin] = useState(false);

  function login(emailFromForm) {
    setEmail(emailFromForm);
    setLogin(true);
  }

  function logout() {
  setEmail("");
  setLogin(false);
  }

  if (logged) {
    return (
      <div>
        <h1>Witaj w systemie do zapisów na zajęcia</h1>
        <LoggedInForm email={email} onLogout={logout} />
        <MeetingPage />
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
