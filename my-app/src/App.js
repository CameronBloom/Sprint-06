import './App.css';

import React, { useState } from "react";
import { render } from "react-dom";
// import "./styles.css";

const names = [
  "Dale Crawley",
  "Stewart Wright",
  "Elvis Espinal",
  "Julieta Stover",
  "Gabriela Arias",
  "Roxanne Bassett",
  "Kieran Tabor",
  "Kobe Holman",
  "Davion Fox",
  "Avery Felder"
]
const white = "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";
const yellow = "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

function App() {

  const [lightOn, setLightOn] = useState(false);
  const [userName, setUserName] = useState(names[Math.floor(Math.random() * 10)]);
  const [userAge, setUserAge] = useState(18);

  if (lightOn) {
    return (
      <div className="App">
      {/* <img src={white} alt="white" /> */}
      <img src={yellow} alt="on" />
      <p>The light is {lightOn ? "on!" : "off..."}</p>
      <button onClick={() => setLightOn(false)}>Light Switch</button>
      <br />
      <div>
        <h2>{userName}</h2>
        <button onClick={() => { 
          setUserName(names[Math.floor(Math.random() * 10)])
          setUserAge(Math.floor(Math.random() * 99)) 
        }}>Randomize Name</button>
        <h3>{userAge}</h3>
        <button onClick={() => { 
          setUserAge(userAge + 1);
        }}>Add a Year</button>        
        <button onClick={() => { 
          setUserAge(userAge - 1);
        }}>Subtract a Year</button>
      </div>
    </div>
    )
  }

  return (
    <div className="App">
      <img src={white} alt="off" />
      {/* <img src={yellow} alt="yellow" /> */}
      <p>The light is {lightOn ? "on!" : "off..."}</p>
      <button onClick={() => setLightOn(true)}>Light Switch</button>
      <br />
      <div>
        <h2>{userName}</h2>
        <button onClick={() => { 
          setUserName(names[Math.floor(Math.random() * 10)])
          setUserAge(Math.floor(Math.random() * 99)) 
        }}>Randomize Name</button>
        <h3>{userAge}</h3>
        <button onClick={() => { 
          setUserAge(userAge + 1);
        }}>Add a Year</button>
        <span>    </span>
        <button onClick={() => { 
          setUserAge(userAge - 1);
        }}>Subtract a Year</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

export default App;