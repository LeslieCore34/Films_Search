import React from "react"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Accueil from "./Accueil/Accueil";
import Recherche from "./Recherche/Recherche"

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/recherche">Recherche</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/recherche" element={<Recherche />} />
      </Routes>
    </Router>
  );
}

export default App;