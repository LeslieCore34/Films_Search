import React from "react";
import { Link } from "react-router-dom";
import FilmsSearch from "./FilmsSearch";

function Accueil() {

    return (
        <div>
            <Link to="/">Accueil</Link>
            <Link to="/Recherche">Recherche</Link>
            <FilmsSearch />
        </div>
    );
}

export default Accueil;