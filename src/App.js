import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./logo.png";

export default function App() {
  return (
    <div className="App">
      <div className="contianer">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="footer text-center">
          <small>
            coded by Nimi Dada, open-sourced <a href="#">Github</a>
          </small>
        </footer>
      </div>
    </div>
  );
}
