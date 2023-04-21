import React from "react";
import "./App.css";

function App() {
  const checkNumber = () => {
    let num = document.getElementById("input").value;
    let random = Math.floor(Math.random() * (10 - 0)) + 1;
    console.log(random);
    if (num === "" || num === null) {
      alert("Input should not Empty..!");
    } else {
      if (random === num) {
        alert("Congrats......! You Won.");
      } else {
        alert("Your Guessing is not correct. Try again...");
      }
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>Guess The Number</h2>
      </header>
      <div className="body">
        <input
          id="input"
          type="number"
          min="1"
          max="10"
          placeholder="Guess a number (1-10)"
        />

        <div className="btn">
          <button type="button" onClick={checkNumber}>
            Check
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
