import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Components/Card";
import "./style.css";

const Home = () => {
  const [listPokemon, setListPokemon] = useState();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
      .then((response) => {
        setListPokemon(response?.data);
      });
  }, []);

 function teste(url){
    axios.get(url).then((response) => {
      setPokemon(response.data);
    });
  }

  console.log(pokemon?.types?.map((items) => (items?.type?.name)), "pokemon");

  const typePokemon = pokemon?.types?.map(items => (items?.type?.name));

  return (
    <div className="container-home">
      <h2>Lista de Pokemons</h2>
      <div className="card-pokemon">
        {listPokemon &&
          listPokemon.results.map((item) => (
            <>
              <button onClick={() => teste(item?.url)}>
                <p>{item?.name}</p>
              </button>
            </>
          ))}
      </div>
      <div className="card-pokemon">
        {pokemon && (
          <>
            <Card
              title={pokemon.name}
              type={pokemon?.types[0]?.type.name}
              weight={pokemon.weight}
              heigth={pokemon.height}
            />
            <button onClick={() => setPokemon(false)}>close</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
