import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";
export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultKeyword);
  let [meaning, setMeaning] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  function handleDictionaryResponse(response) {
    setMeaning(response.data[0]);
  }
  function handlePixabayResponse(response) {
    console.log(response.data);
    setPhotos(response.data.hits);
  }
  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    let pixabayApiKey = "21195821-1a42fea634dbe86cb953ddd60";
    let pixabayApiUrl = `https://pixabay.com/api/?key=21195821-1a42fea634dbe86cb953ddd60&q=${word}&image_type=photo&api_key=${pixabayApiKey}`;
    axios.get(pixabayApiUrl).then(handlePixabayResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleWordChange(event) {
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
          <h1>What word are you searching for?</h1>
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
