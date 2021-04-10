import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`searching for ${word}`);
  }
  function handleWordChange(event) {
    console.log(event.target.value);
    setWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleWordChange} autoFocus={true} />
      </form>
    </div>
  );
}
