import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meanings(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>
            <div className="example"> "{definition.example}"</div>
            <br />
            <strong>Similar:</strong>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
