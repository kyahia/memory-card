import React, {useEffect, useState} from "react";
import Cards from "./components/cards";

const characters = [
  {name: 'aaa', age: 10, color: 'red', id: 0},
  {name: 'bbb', age: 20, color: 'blue', id: 1},
  {name: 'ccc', age: 30, color: 'yellow', id: 2},
  {name: 'eee', age: 40, color: 'orange', id: 3},
  {name: 'ggg', age: 50, color: 'purple', id: 4},
  {name: 'fff', age: 60, color: 'green', id: 5},
  {name: 'mmm', age: 70, color: 'lightblue', id: 6},

]

export default function App() {
  const [chosenChars, setChosenChars] = useState([]);
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [updtChars, setUpdtChars] = useState(characters)

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

