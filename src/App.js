import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [score, setScore] = useState(10);
  const checkNumber = () => {
    let num = Number(document.getElementById("input").value);
    let random = Math.floor(Math.random() * (10 - 0)) + 1;
    const popUp = document.querySelector(".pop-up");
    const okbtnE = document.querySelector(".okbtn");
    const popUp1 = document.querySelector(".pop-up1");
    const okbtnE1 = document.querySelector(".okbtn1");

    console.log(random);
    console.log(num);
    if (num === "" || num === null) {
      alert("Input should not Empty..!");
    } else {
      if (random === num) {
        // alert("Congrats......! You Won.");
        popUp.classList.add("pop-up-open");

        okbtnE.addEventListener("click", () => {
          popUp.classList.remove("pop-up-open");
        });

        setScore(score + 10);
        document.getElementById("score").innerHTML = score;

        if (score === 50) {
          setCount(count + 1);
        } else if (score === 100) {
          setCount(count + 1);
        } else if (score === 200) {
          setCount(count + 1);
        } else if (score === 250) {
          setCount(count + 1);
        } else if (score === 300) {
          setCount(count + 1);
        } else if (score === 350) {
          setCount(count + 1);
        } else if (score === 400) {
          setCount(count + 1);
        } else if (score === 450) {
          setCount(count + 1);
        } else if (score === 500) {
          setCount(count + 1);
        }
        if (count === 2) {
          document.getElementById("level").innerHTML = "Level 2";
        } else if (count === 3) {
          document.getElementById("level").innerHTML = "Level 3";
        } else if (count === 4) {
          document.getElementById("level").innerHTML = "Level 4";
        } else if (count === 5) {
          document.getElementById("level").innerHTML = "Level 5";
        } else if (count === 6) {
          document.getElementById("level").innerHTML = "Level 6";
        } else if (count === 7) {
          document.getElementById("level").innerHTML = "Level 7";
        } else if (count === 8) {
          document.getElementById("level").innerHTML = "Level 8";
        } else if (count === 9) {
          document.getElementById("level").innerHTML = "Level 9";
        } else if (count === 10) {
          document.getElementById("level").innerHTML = "Level 10";
        }
      } else {
        // alert("Your Guessing is not correct. Try again...");
        popUp1.classList.add("pop-up1-open");

        okbtnE1.addEventListener("click", () => {
          popUp1.classList.remove("pop-up1-open");
        });
      }
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>Guess The Number</h2>
      </header>

      <div className="body">
        <h2 id="level">Level 1</h2>
        <div className="res">
          Score<p id="score">0</p>
        </div>
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

        <div className="pop-up">
          <img src={require("./images/icon.gif")} />
          <h2>You Won</h2>
          <p>Congrats... You Won.You Earned 10 Score</p>
          <button className="okbtn">OK</button>
        </div>

        <div className="pop-up1">
          <img src={require("./images/cross.gif")} />
          <h2>You Loss</h2>
          <p>Your Guessing is not correct. Try again... </p>
          <button className="okbtn1">OK</button>
        </div>
      </div>
    </div>
  );
}

export default App;
