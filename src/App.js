import "./App.css";
import Dictionary from "./Dictionary";

import logo from "./logo.png";

export default function App() {
  return (
    <div className="App ">
      <div className="contianer">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="Sunset" />
        </main>
      </div>
      <footer className="footer text-center">
        <small>
          coded by <a href="https://nimidada.netlify.app/">Nimi Dada</a>,
          open-sourced{" "}
          <a href="https://github.com/Bunny-buzz/project-dictionary">Github</a>{" "}
          and hosted on{" "}
          <a href="https://condescending-montalcini-7952ff.netlify.app/">
            Netlify
          </a>
        </small>
      </footer>
    </div>
  );
}
