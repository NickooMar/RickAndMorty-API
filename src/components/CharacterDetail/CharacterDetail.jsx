import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";

import "./CharacterDetail.css";

const CharacterDetail = () => {
  const params = useParams();
  const [specificCharacter, setSpecificCharacter] = useState();

  useEffect(() => {
    async function loadCharacters() {
      await axios
        .get(`https://rickandmortyapi.com/api/character/${params.id}`)
        .then((response) => setSpecificCharacter(response.data));
    }

    loadCharacters();
  }, []);

  console.log(specificCharacter);

  return (
    <>
      <div className="header__div">
        <h1>Detalle Personaje</h1>
        <p className="header__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem suscipit,
          laudantium architecto dolorem hic dicta ipsam id recusandae neque
          repellat dolores! Laboriosam repellendus consectetur veniam illum cum,
          id et voluptatem error ducimus laborum repudiandae nostrum omnis quasi
          aliquam molestiae saepe.
        </p>
      </div>

      <section className="main__section">
        <div className="main__first-div">
          <img
            src={specificCharacter?.image}
            alt="character_img"
            className="main__first-div-image"
          />
          <h1 className="main__first-div-description">Descripción</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            accusamus illum dignissimos id, minus aut veritatis temporibus
            quibusdam expedita non, facilis provident aperiam quia.
          </p>
        </div>
        <div className="main__second-div">
          <h1>{specificCharacter?.name}</h1>
          <div
            id="afrus-container-form"
            data-form="63eb5735-0d30-4503-8f5e-63f7c16b036e"
          ></div>
          <script src="https://my.afrus.app/template/index.js"></script>

          <form action="" className="main__second-div__form">
            <label htmlFor="">Nombre</label>
            <br />
            <input type="text" placeholder="Nombre" />
            <label htmlFor="">Descripción</label>
            <br />
            <input type="text" placeholder="Descripcion" />
            <label htmlFor="">Email</label>
            <br />
            <input type="email" placeholder="Email" />
            <button className="main__second-div__btn">Enviar</button>
          </form>

          <h4>Elementos Adicionales</h4>
          <ul>
            <li>{specificCharacter?.status}</li>
            <li>{specificCharacter?.gender}</li>
            <li>{specificCharacter?.species}</li>
            <li>{specificCharacter?.location?.name}</li>
            <li>{specificCharacter?.episode[0]}</li>
          </ul>
        </div>
      </section>
      <Link to="/" style={{textDecoration: 'none', color:'black'}}>
        <button className="end__section__return-btn">Volver</button>
      </Link>
    </>
  );
};

export default CharacterDetail;
