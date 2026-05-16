import logo from './logo.svg';
import './App.css';

function App() {
  let email = 'klaudia@gmail.com';

  function handleChange(event){
    console.log(event.target.value);
  }
    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój email to {email}</h2>
            <input type="text" onChange={handleChange}/>
        </div>
    );
}

export default App;