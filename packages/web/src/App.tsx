import "./App.css";

import reactLogo from "./assets/react.svg";
import { useState } from "react";
import viteLogo from "/vite.svg";

function App() {
  const [message, setMessage] = useState("");

  function onClick() {
    fetch(import.meta.env.VITE_APP_API_URL)
      .then((response) => response.text())
      .then(setMessage);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={onClick}>View message </button>
        <p>{message}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
