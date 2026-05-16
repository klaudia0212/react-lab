import logo from './logo.svg';
import './App.css';
import {useState} from "react";


function App() {
  const [email, setEmail] = useState('klaudia@gmail.com');
  const [logged, setLogged] = useState(false);

    function handleChange(event) {
        setEmail(event.target.value);
    }

    let message;
    if(email.length < 5){
      message = <div>za krótki adres!</div>;
    } else if (email.length < 15){
      message = <div>dobry adres email</div>;
    } else {
      message = <div>za długi adres email</div>;
    }
  
if (logged){
  return(
    <div>
        <h1>Witaj w sysytemie do zapisów na zajęcia</h1>
        <h2>Witaj {email}!</h2>
        <button type="button" onClick={() => setLogged(false)}>Wyloguj</button>
      </div>
  );
}
 return (
    <div>
      <h1>Witaj w sysytemie do zapisów na zajęcia</h1>
      <h2>Zaloguj się e-mailem</h2>
      {message}
      <input type="text" value={email} onChange={handleChange} />
      <button type="button" onClick={() => setLogged(true)}>
        Wchodzę
      </button>
    </div>
  );
}

export default App;