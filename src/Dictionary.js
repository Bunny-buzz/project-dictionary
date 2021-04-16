import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultKeyword);
  let [meaning, setMeaning] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data[0]);
    setMeaning(response.data[0]);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleWordChange(event) {
    console.log(event.target.value);
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleWordChange}
              defaultValue={props.defaultKeyword}
              autoFocus={true}
            />
          </form>
          <div className="hint">
            search words: serendipty, happiness, determination....
          </div>
        </section>
        <Results results={meaning} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
