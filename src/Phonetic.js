import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetics.audio} target="_blank">
        Pronunciation
      </a>
      <br />
      <span className="oral">{props.phonetics.text} </span>
    </div>
  );
}
