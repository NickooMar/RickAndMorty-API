import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CharacterList.css";
import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterList = () => {
  const [characterList, setCharacterList] = useState();

  useEffect(() => {
    async function loadCharacters() {
      await axios
        .get("https://rickandmortyapi.com/api/character")
        .then((response) => setCharacterList(response.data?.results));
    }

    loadCharacters();
  }, []);

  return (
    <>
      <section className="header__section">
        <h2>Lista de personajes</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          consequuntur odit nulla inventore maxime alias deleniti accusantium
          molestias laborum quos optio cupiditate magni dolor veritatis.
        </p>
      </section>

      <div className="div__cardList-row">
        {characterList?.map((character) => (
          <CharacterCard character={character} />
        ))}
      </div>
    </>
  );
};

export default CharacterList;
