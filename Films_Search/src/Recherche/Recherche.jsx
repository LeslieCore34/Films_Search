import React from "react";
import { Link } from "react-router-dom";

function Recherche() {
    return (
        <div>
            <Link to="/">Accueil</Link>
            <Link to="/Recherche">Recherche</Link>
        </div>
    );
}

export default Navigation;