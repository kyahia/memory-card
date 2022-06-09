import React, {useState} from "react";
import "./cards.css";

export default function Cards(props){
   return (
      <div className="cards-wrapper">
         { props.data.map((char, key) => <Card info={char} key={key} fct={props.selection} />) }
      </div>
   )
}

function Card(props){
   const img = require(`../resources/${props.info.name}.webp`);
   const clicked = () => {
      const id = props.info.id;
      props.fct(id)
   }
   const style = {
      // backgroundColor: props.info.color,
      backgroundImage: 'url(' + img + ')',
      borderColor: props.info.color
      // backgroundPosition: 'center',
      // backgroundSize: 'cover'
   }
   return(
      <div className="card" style={style} onClick={clicked}>
         <h1>{props.info.name}</h1>
         <h2>{props.info.age}</h2>
      </div>
   )
}