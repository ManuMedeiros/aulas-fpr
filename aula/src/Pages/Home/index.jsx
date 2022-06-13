import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "../../Components/Input";
import "./style.css";
import Links from "../../Components/Links";

const Home = () => {

  const [nerdFlix, setNerdFlix] = useState();

  useEffect(() => {
    axios
      .get("https://filmes-series-3f5bb-default-rtdb.firebaseio.com/nerdFlix.json")
      .then((response) => {
        console.log(response.data)
        setNerdFlix(response?.data);
      });
  }, []);


  return (
    <div className="container-home">
      <Links link={'/cadastro'} text="Cadastrar filme ou serie" />
      <h2>Filmes</h2>
      <div className="campos-movies">
        {nerdFlix && Object.values(nerdFlix?.filmes)?.map((itemsFilmes) => {
          return (
            <>
              <div className="card-filme">
                <img src={itemsFilmes?.img} className="img" />
                <h3>{itemsFilmes?.title}</h3>
                <span>{itemsFilmes?.genero}</span>
                <span>{itemsFilmes?.tipo}</span>
              </div>
            </>
          )
        })}
      </div>
      <h2>Series</h2>
      <div className="campos-movies">
        {nerdFlix && Object.values(nerdFlix?.series)?.map((itemsSeries) => {
          return (
            <>
              <div className="card-filme">
                <img src={itemsSeries?.img} className="img" />
                <h3>{itemsSeries?.title}</h3>
                <span>{itemsSeries?.genero}</span>
                <span>{itemsSeries?.tipo}</span>
              </div>
            </>
          )
        })}
      </div>
    </div >
  );
};

export default Home;
