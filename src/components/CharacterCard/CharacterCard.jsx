import React from "react";
import { Link } from "react-router-dom";

import "./CharacterCard.css";

const CharacterCard = ({ character }) => {
  return (
    <div key={character.id} className="div__character-card">
      <div className="img_character_content">
        <img
          src={character.image}
          alt="characterImage"
          className="img__character-card"
        />
        <span className="status__tag">{character.status}</span>
      </div>

      <div className="character__content">
        <h1>{character.name}</h1>
        <p>Estado:</p>
        <h3>{character.status}</h3>
        <p>Especie:</p>
        <h3>{character.species}</h3>
        <p>Genero:</p>
        <h3>{character.gender}</h3>
        <p>Ubicación:</p>
        <h3>{character.location?.name}</h3>
        <Link
          to={`/${character.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <button className="btn__character-card">Detalles</button>
        </Link>
      </div>
    </div>
  );
};

export default CharacterCard;
