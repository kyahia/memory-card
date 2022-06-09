import React, {useEffect, useState} from "react";
import Cards from "./components/cards";
import characters from "./chars-data.json";

export default function App() {
  const [chosenChars, setChosenChars] = useState([]);
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [updtChars, setUpdtChars] = useState(characters)

  // Re-arrange charlist randomly
  useEffect(() => {
    let list = [...characters];
    let rslt = [];
    for (let i = 0; i < characters.length; i++){
      rslt.push(list.splice(Math.floor(Math.random() * list.length), 1)[0])
    }
    setUpdtChars(rslt)

  }, [score])

  function selectChar(id){
    if (chosenChars.find(char => char == id) !== undefined){
      if (score > bestScore){
        setBestScore(score)
      }
      setScore(0)
      setChosenChars([])
    } else {
      setScore(score + 1)
      setChosenChars(prev => prev.concat(id))
    }
  }

  return (
    <div className="App">
      <h1>Best Score: {bestScore}</h1>
      <h2>Current score : {score}</h2>
      <Cards data={updtChars} selection={selectChar}/>
    </div>
  );
}

