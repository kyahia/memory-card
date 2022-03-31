import React, {useState} from "react";
import "./cards.css"

export default function Cards(props){
   return (
      <div className="cards-wrapper">
         { props.data.map((char, key) => <Card info={char} key={key} fct={props.selection} />) }
      </div>
   )
}

function Card(props){
   const clicked = () => {
      const id = props.info.id;
      props.fct(id)
   }
   return(
      <div className="card" style={{backgroundColor: `${props.info.color}`}} onClick={clicked}>
         <h1>{props.info.name}</h1>
         <h2>{props.info.age}</h2>
      </div>
   )
}